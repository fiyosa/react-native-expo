/* eslint-disable @typescript-eslint/no-unused-vars */

interface IGet {
  page: 'initial' | 'home' | 'about' | 'setting'
}

const get: IGet = {
  page: 'initial',
}

const set = (_: IGet) => {}

const pageContext = { get, set, init: () => {} }

export default pageContext
