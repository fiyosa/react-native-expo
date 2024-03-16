import { NativeWindStyleSheet } from 'nativewind'
import Index from './src'
import { ContextProvider } from './src/context'

NativeWindStyleSheet.setOutput({
  default: 'native',
})

export default function App() {
  return (
    <ContextProvider>
      <Index />
    </ContextProvider>
  )
}
