import { UserInfoRes } from '@https/index'
import { defineStore } from 'pinia'

export interface SystemAccountInfoStoreState {
  user: UserInfoRes
}

export const useSystemAccountInfoStore = defineStore('SystemAccountInfoStore', {
  state: (): SystemAccountInfoStoreState => {
    const user: UserInfoRes = {}
    return {
      user
    }
  }
})
