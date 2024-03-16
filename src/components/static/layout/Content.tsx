import { useContext } from 'react'
import { SetupContext } from '../../../context'
import Home from '../../../pages/Home'
import About from '../../../pages/About'
import Setting from '../../../pages/Setting'

export const Content = () => {
  const { pageContext } = useContext(SetupContext)

  switch (pageContext.get.page) {
    case 'initial':
      return <></>

    case 'home':
      return <Home />

    case 'about':
      return <About />

    case 'setting':
      return <Setting />
  }
}
