import { UserInfo } from '@https/SystemHttps'
import { defineStore } from 'pinia'

export interface SystemAccountInfoStoreState {
  user: UserInfo
}

export const useSystemAccountInfoStore = defineStore('SystemAccountInfoStore', {
  state: (): SystemAccountInfoStoreState => {
    const user: UserInfo = {}
    return {
      user
    }
  }
})
