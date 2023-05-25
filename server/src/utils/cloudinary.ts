import cloudinary from 'cloudinary'

interface CloudinaryConfig {
  cloud_name: string
  api_key: string
  api_secret: string
}

const cloudinaryConfig: CloudinaryConfig = {
  cloud_name: process.env.CLOUD_NAME || '',
  api_key: process.env.CLOUD_KEY || '',
  api_secret: process.env.CLOUD_SECRET || '',
}

cloudinary.v2.config(cloudinaryConfig)

const folder = 'nlw-spacetime'
const preview = 'my_preview'

const cloudinaryUploadImg = async (cloudPath: string) => {
  return await cloudinary.v2.uploader.upload(cloudPath, {
    folder,
    preview,
  })
}

export default cloudinaryUploadImg
