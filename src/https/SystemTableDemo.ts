import { httpRequest } from '@utils/index';

export interface UserDemo {
    date: string
    name: string
    address: string
    status: number
}

/**
 * 表格组件Demo 获取用户列表
 * @returns
 */
export const tableMockHttp = async () => {
    const response = await httpRequest<UserDemo[]>({
        url: '/user/list',
        method: 'post',
    });
    if (response.code === 200) return response.data;
    return null;
};
