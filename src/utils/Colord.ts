import { AnyColor, colord, Colord } from 'colord'

export const getColorInstance = (value: AnyColor | Colord) => colord(value)

export const getToHex = (value: Colord) => value.toHex()
export const isDarkColor = (value: Colord) => value.isDark()
export const isLightColor = (value: Colord) => value.isLight()

// 饱和度越高，说明颜色越深，饱和度越低，说明颜色越浅
export const toIncreaseSaturate = (color: Colord, value: number = 0.1) => getToHex(color.saturate(value))
export const toReduceSaturate = (color: Colord, value: number = 0.1) => getToHex(color.desaturate(value))

export const toLight = (color: Colord, value: number = 0) => getToHex(color.lighten(value))
export const toDark = (color: Colord, value: number = 0) => getToHex(color.darken(value))
