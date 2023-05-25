import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fs from 'fs'
import { randomUUID } from 'node:crypto'
import { createWriteStream } from 'node:fs'
import { extname, resolve } from 'node:path'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import cloudinaryUploadImg from '../utils/cloudinary'

const pump = promisify(pipeline)

export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request: FastifyRequest, reply: FastifyReply) => {
    const upload = await request.file({
      limits: {
        fileSize: 1_048_576, // 1MB
      },
    })

    if (!upload) {
      return reply.status(400).send({ error: 'Something wrong with the file.' })
    }

    const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/

    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)

    if (!isValidFileFormat) {
      return reply.status(400).send({ error: 'Invalid file format.' })
    }

    const fileId = randomUUID()
    const extension = extname(upload.filename)

    const fileName = fileId.concat(extension)

    const writeStream = createWriteStream(
      resolve(__dirname, '../../uploads/', fileName),
    )

    await pump(upload.file, writeStream)

    const cloudPath = String(writeStream.path)

    try {
      const urls = await cloudinaryUploadImg(cloudPath)
      fs.unlinkSync(cloudPath)
      return { urls }
    } catch (error) {
      fs.unlinkSync(cloudPath)
      return reply
        .status(500)
        .send({ error: 'Error uploading file to Cloudinary.' })
    }
  })
}
