import { Colors } from '@/constants/theme'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={{ backgroundColor: Colors.background, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>RootLayout</Text>

      <Slot />
    </View>
  )
}

export default RootLayout