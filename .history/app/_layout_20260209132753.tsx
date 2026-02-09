import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const RootLayout = () => {

  const [] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  return (
    <View>
      <Text>RootLayout</Text>

      <Slot />
    </View>
  )
}

export default RootLayout