import { useContext, useEffect } from 'react'
import { Content, Footer } from './components/static/layout'
import { View } from 'react-native'
import Loading from './pages/Loading'
import { SetupContext } from './context'
import { delayThreshold } from './utils/generalUtil'

export default function Index() {
  const { loadingContext, pageContext } = useContext(SetupContext)

  useEffect(() => {
    ;(async () => {
      loadingContext.set({ ...loadingContext.get, page: true })

      await delayThreshold(async () => {
        await new Promise((r) => setTimeout(r, 1000))
      }, 1000)

      loadingContext.set({ ...loadingContext.get, page: false })
      pageContext.set({ page: 'home' })
    })()
  }, [])

  return (
    <>
      <View className="relative h-[100%] w-[100%] flex-1 flex-col">
        {loadingContext.get.page && <Loading />}
        {pageContext.get.page !== 'initial' && (
          <>
            <Content />
            <Footer />
          </>
        )}
      </View>
    </>
  )
}
