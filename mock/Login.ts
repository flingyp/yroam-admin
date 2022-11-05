import Mock from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';

import { failData, successData } from './util';

const MockRandom = Mock.Random;

/**
 * 用户登录
 * @param username
 * @param password
 * @returns
 */
const SysUserLogin = (username: string, password: string) => {
    if (username === 'admin' && password === '123456') {
        return successData({
            token: 'admin-token',
        });
    }
    if (username === 'user' && password === '123456') {
        return successData({
            token: 'user-token',
        });
    }
    return failData('用户名或密码错误');
};

/**
 * 用户信息
 * @param token
 * @returns
 */
const SysUserInfo = (token: string) => {
    // 超级管理员
    if (token === 'admin-token') {
        return successData({
            id: MockRandom.id(),
            username: 'admin',
            nickname: '超级管理员',
            birthday: MockRandom.date(),
            roles: ['admin'],
            permissions: ['sys:root:*'],
        });
    }
    if (token === 'user-token') {
        return successData({
            id: MockRandom.id(),
            username: 'user',
            nickname: '普通用户',
            birthday: MockRandom.date(),
            roles: ['user'],
            permissions: ['sys:user:*'],
        });
    }
    return failData('token错误');
};

/**
 * 用户路由
 * @param token
 */
const SysUserRouters = (token: string) => {
    if (token === 'admin-token') {
        return successData([
            {
                path: '/permission',
                name: 'Permission',
                component: 'Layout',
                meta: {
                    title: '菜单权限控制',
                    icon: 'icon-park-outline:permissions',
                    cache: false,
                },
                children: [
                    {
                        path: 'root',
                        name: 'RootPermission',
                        component: 'permissions/RootPermission',
                        meta: {
                            title: '超级管理员可见',
                            icon: 'icon-park-outline:permissions',
                            cache: false,
                        },
                    },
                    {
                        path: 'com',
                        name: 'ComPermission',
                        component: 'permissions/ComPermission',
                        meta: {
                            title: '超级管理员、普通用户可见',
                            icon: 'icon-park-outline:permissions',
                            cache: false,
                        },
                    },
                    {
                        path: 'button',
                        name: 'ButtonPermission',
                        component: 'permissions/ButtonPermission',
                        meta: {
                            title: '按钮权限控制',
                            icon: 'icon-park-outline:permissions',
                            cache: false,
                        },
                    },
                ],
            },
            {
                path: '/sysModule',
                name: 'SysModule',
                component: 'Layout',
                meta: {
                    title: '系统管理',
                    icon: 'eos-icons:system-ok',
                    cache: true,
                },
                children: [
                    {
                        path: 'user',
                        name: 'SysModule-User',
                        component: 'SysModule/user',
                        meta: {
                            title: '用户管理',
                            icon: 'eos-icons:system-ok',
                            cache: true,
                        },
                    },
                    {
                        path: 'role',
                        name: 'SysModule-Role',
                        component: 'SysModule/role',
                        meta: {
                            title: '角色管理',
                            icon: 'eos-icons:system-ok',
                            cache: true,
                        },
                    },
                ],
            },
        ]);
    }

    if (token === 'user-token') {
        return successData([
            {
                path: '/permission',
                name: 'Permission',
                component: 'Layout',
                meta: {
                    title: '菜单权限控制',
                    icon: 'icon-park-outline:permissions',
                    cache: false,
                },
                children: [
                    {
                        path: 'user',
                        name: 'UserPermission',
                        component: 'permissions/UserPermission',
                        meta: {
                            title: '普通用户可见',
                            icon: 'icon-park-outline:permissions',
                            cache: false,
                        },
                    },
                    {
                        path: 'com',
                        name: 'ComPermission',
                        component: 'permissions/ComPermission',
                        meta: {
                            title: '超级管理员、普通用户可见',
                            icon: 'icon-park-outline:permissions',
                            cache: false,
                        },
                    },
                    {
                        path: 'button',
                        name: 'ButtonPermission',
                        component: 'permissions/ButtonPermission',
                        meta: {
                            title: '按钮权限控制',
                            icon: 'icon-park-outline:permissions',
                            cache: false,
                        },
                    },
                ],
            },
        ]);
    }
    return failData('token错误');
};

export default [
    {
        url: '/dev/auth/login',
        method: 'post',
        response: ({ body }: any) => SysUserLogin(body.username, body.password),
    },
    {
        url: '/dev/auth/info',
        method: 'post',
        response: ({ headers }: any) => SysUserInfo(headers.token),
    },
    {
        url: '/dev/auth/getRouters',
        method: 'post',
        response: ({ headers }: any) => SysUserRouters(headers.token),
    },
] as MockMethod[];
