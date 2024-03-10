import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      colors: {
        'BackgroundColor_Light': 'rgb(243 244 246)',
        'BackgroundColor_Dark': 'rgb(17 24 39)',

        'BackgroundHighligtColor_Light': 'rgb(237 238 239)',
        'BackgroundHighligtColor_Dark': 'rgb(24 33 51)',
      }
    }
  }
}