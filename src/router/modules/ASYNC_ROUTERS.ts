import { SystemRoute } from 'configs';

export const ASYNC_ROUTERS: SystemRoute[] = [
    {
        path: '/permission',
        name: 'Permission',
        component: 'Layout',
        meta: {
            label: '前端权限测试',
            icon: 'material-AccessAlarmOutlined',
        },
        children: [
            {
                path: 'user',
                name: 'Permission-User',
                component: '@pages/Permission/UserIndex.vue',
                meta: {
                    label: '普通用户权限页面',
                    permissions: ['sys:user:*'],
                },
            },
            {
                path: 'role',
                name: 'Permission-Role',
                component: '@pages/Permission/RoleIndex.vue',
                meta: {
                    label: '超级管理员权限页面',
                    permissions: ['sys:root:*'],
                    icon: 'ionicons5-BagCheck',
                },
            },
            {
                path: 'button',
                name: 'Permission-Button',
                component: '@pages/Permission/ButtonIndex.vue',
                meta: {
                    label: '按钮级权限指令控制',
                },
            },
        ],
    },
];
