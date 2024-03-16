import { ReactNode, createContext, useState } from 'react'
import loadingContext from './loadingContext'
import pageContext from './pageContext'

export const SetupContext = createContext({
  loadingContext,
  pageContext,
})

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(loadingContext.get)
  const [page, setPage] = useState(pageContext.get)

  const value = {
    loadingContext: { get: loading, set: setLoading, init: () => setLoading(loadingContext.get) },
    pageContext: { get: page, set: setPage, init: () => setPage(pageContext.get) },
  }

  return <SetupContext.Provider value={value}>{children}</SetupContext.Provider>
}
