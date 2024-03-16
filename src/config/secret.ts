const secret = {
  API_OMDB_URL: process.env.EXPO_PUBLIC_API_OMDB_URL ?? 'http://localhost:4001',
  API_OMDB_KEY: process.env.EXPO_PUBLIC_API_OMDB_KEY ?? '???',
}

export default secret
