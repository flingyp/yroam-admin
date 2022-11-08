import { YAxiosInstance } from '@https/index';

enum MockSystemTable_URL {
    TableUserList = '/user/list'
}

export interface MockTableUser {
    id: string
    age: number
    username: string
    birthday: string
    email: string
    address: string
    status: number
}

/**
 * 用户表格
 * @returns
 */
export const fetchTableUser = async () => {
    const HttpResponse = await YAxiosInstance.request<any, MockTableUser[]>({
        url: MockSystemTable_URL.TableUserList,
        method: 'POST',
    });
    return HttpResponse;
};
