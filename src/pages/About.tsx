import { memo } from 'react'
import { Text, View } from 'react-native'

const About = () => {
  console.log('About')

  return (
    <View className="h-[100%] w-[100%] bg-green-500">
      <Text>About</Text>
    </View>
  )
}

export default memo(About)
