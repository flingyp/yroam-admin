import { RouteMeta } from 'vue-router'

export interface SystemRoute {
  path: string
  name: string
  component?: string
  redirect?: string
  meta?: RouteMeta
  children?: SystemRoute[]
}
