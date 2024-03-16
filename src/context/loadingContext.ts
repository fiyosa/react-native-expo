/* eslint-disable @typescript-eslint/no-unused-vars */

interface IGet {
  page: boolean
  hold: boolean
}

const get: IGet = {
  page: false,
  hold: false,
}

const set = (_: IGet) => {}

const loadingContext = { get, set, init: () => {} }

export default loadingContext
