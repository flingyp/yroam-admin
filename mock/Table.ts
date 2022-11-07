import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
import { useRandomInteger } from '@flypeng/tool';
import { UserDemo } from '@/https';

const MockRandom = Mock.Random;

export default [
    {
        url: '/dev/user/list',
        method: 'post',
        response: () => {
            const TableData = [];
            for (let i = 0; i < useRandomInteger(50, 100); i++) {
                const User: UserDemo = {
                    id: MockRandom.natural().toString(),
                    username: MockRandom.cname(),
                    age: MockRandom.integer(1, 100),
                    birthday: MockRandom.date(),
                    email: MockRandom.email(),
                    address: `${MockRandom.province()}${MockRandom.city()}${MockRandom.county()}`,
                    status: MockRandom.integer(0, 2),
                };
                TableData.push(User);
            }
            return {
                code: 200,
                msg: '操作成功',
                data: TableData,
            };
        },
    },
] as unknown as MockMethod[];
