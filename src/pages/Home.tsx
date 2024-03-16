import { memo, useEffect } from 'react'
import { Text, View } from 'react-native'
import { getOMDB } from '../api'

const Home = () => {
  console.log('home')

  useEffect(() => {
    ;(async () => {
      const getMovies = await getOMDB({ s: 'avenger', page: 1 })
      console.log(getMovies)
    })()
  }, [])

  return (
    <View className="h-[100%] w-[100%] bg-green-500">
      <Text>Home</Text>
    </View>
  )
}

export default memo(Home)
