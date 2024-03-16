import { useContext } from 'react'
import { View } from 'react-native'
import { SetupContext } from '../../../context'

export const Footer = () => {
  const { pageContext } = useContext(SetupContext)

  const handleChangePage = (page: typeof pageContext.get.page) => pageContext.set({ page })

  return (
    <View className="absolute bottom-0 left-0 flex w-[100%] flex-row items-center justify-evenly bg-yellow-400 p-2">
      <button onClick={() => handleChangePage('home')}>Home</button>
      <button onClick={() => handleChangePage('about')}>About</button>
      <button onClick={() => handleChangePage('setting')}>Setting</button>
    </View>
  )
}
