import { Breakpoints } from '../@types/types'

export default function getColumns(width: number) {
  if (width > Breakpoints.Medium) {
    return '1fr 1fr 1fr'
  }
  if (width > Breakpoints.xSmall) {
    return '1fr 1fr'
  }
  return '1fr'
}
