import { memo } from 'react'
import { Text, View } from 'react-native'

const Setting = () => {
  console.log('Setting')

  return (
    <View className="h-[100%] w-[100%] bg-green-500">
      <Text>Setting</Text>
    </View>
  )
}

export default memo(Setting)
