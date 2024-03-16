import secret from '../config/secret'

interface IRes {
  code: number
  result: IResSuccess1 | IResSuccess2 | IResError
}

interface IResSuccess1 {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: { Source: string; Value: string }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: 'True' | 'False'
}

interface IResSuccess2 {
  Search: {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
  }[]
  totalResults: string
  Response: 'True' | 'False'
}

interface IResError {
  Response: 'True' | 'False'
  Error: string
}

interface IProps {
  i?: string // A valid IMDb ID (e.g. tt1285016)
  t?: string // Movie title to search for.

  s?: string // Movie title to search for.

  page?: string | number // Page number to return.
  y?: string | number // Year of release.
  type?: 'movie' | 'series' | 'episode' // Type of result to return.
  plot?: 'short' | 'full' // Return short or full plot.
  r?: 'json' | 'xml' // The data type to return.
}

export const getOMDB = async (props: IProps): Promise<IRes> => {
  let params = ''
  params += '&apikey=' + secret.API_OMDB_KEY
  if (props.page) params += '&page=' + `${props.page}`
  if (props.i) params += '&i=' + `${props.i}`
  if (props.t) params += '&t=' + `${props.t}`
  if (props.s) params += '&s=' + `${props.s}`
  if (props.y) params += '&y=' + `${props.y}`
  if (props.type) params += '&type=' + `${props.type}`
  if (props.plot) params += '&plot=' + `${props.plot}`
  if (props.r) params += '&r=' + `${props.r}`
  if (params.length !== 0) params = '?' + params.substring(1)

  try {
    const call = await fetch(secret.API_OMDB_URL + params, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    })
    const res = await call.json()

    if (res?.Response === 'False') {
      return {
        code: 400,
        result: res,
      }
    }
    return {
      code: call.status,
      result: res,
    }
  } catch (err) {
    return {
      code: 400,
      result: {
        Response: 'False',
        Error: 'Unable to connect to the server. Check your internet connection.',
      },
    }
  }
}
