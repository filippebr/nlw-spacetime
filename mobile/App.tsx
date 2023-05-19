import { StatusBar } from 'expo-status-bar'
import { ImageBackground } from 'react-native'

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import { styled } from 'nativewind'
import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'

const StylesStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StylesStripes className="absolute left-2" />
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
