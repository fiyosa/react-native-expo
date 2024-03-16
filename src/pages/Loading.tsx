import { Text, View } from 'react-native'

const Loading = () => {
  return (
    <View className="absolute z-10 h-[100%] w-[100%] flex-1 items-center justify-center bg-white">
      <Text className="text-[50px] text-red-500">Wait</Text>
    </View>
  )
}

export default Loading
