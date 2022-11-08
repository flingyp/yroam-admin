import { defineStore } from 'pinia';
import { UserInfo } from '@/https/modules/SystemHttps';

export interface SystemAccountInfoStoreState {
    user: UserInfo
}

export const useSystemAccountInfoStore = defineStore('SystemAccountInfoStore', {
    state: (): SystemAccountInfoStoreState => {
        const user: UserInfo = {};
        return {
            user,
        };
    },
});
