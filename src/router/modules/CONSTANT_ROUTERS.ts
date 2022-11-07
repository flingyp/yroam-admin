import { SystemRoute } from 'configs';

// TODO: 在编写路由配置的时候 component 是用 @pages/ 的方式，但是是没有IDEA路径提示的，所以这一点需要在文档声明的
// TODO:  meta.icon 引用图标时的写法 source-iconLabel （source：图标源、iconLabel：图标名称）这一点需要在文档声明的

export const CONSTANT_ROUTERS: SystemRoute[] = [
    {
        path: '/login',
        name: 'LoginIndex',
        component: '@pages/Login/LoginIndex.vue',
        meta: {
            isShow: false,
        },
    },
    {
        path: '/404',
        name: 'NotFound',
        component: '@pages/Common/NotFound.vue',
        meta: {
            isShow: false,
        },
    },
    {
        path: '/common',
        name: 'PermissionCommon',
        component: 'Layout',
        children: [
            {
                path: '',
                name: 'PermissionCommonIndex',
                component: '@pages/Permission/CommonIndex.vue',
                meta: {
                    label: '均可访问权限页面',
                },
            },
        ],
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: 'Layout',
        children: [
            {
                path: '',
                name: 'AboutPageIndex',
                component: '@pages/SystemAbout.vue',
                meta: {
                    label: '关于',
                    icon: 'material-AcUnitRound',
                },
            },
        ],
    },
    {
        path: '/naive',
        name: 'NaiveUI-Component',
        component: 'Layout',
        children: [
            {
                path: 'component',
                name: 'NaiveUI-ComponentIndex',
                component: '@pages/NaiveComponent.vue',
                meta: {
                    label: 'NaiveUI 示例',
                    icon: 'ionicons5-LogoWebComponent',
                },
            },
        ],
    },
    {
        path: '/common',
        name: 'Common-Page',
        component: 'Layout',
        meta: {
            label: '常用页面',
        },
        children: [
            {
                path: '404',
                name: 'Common-NotFound',
                component: '@pages/Common/NotFound.vue',
                meta: {
                    label: '404 页面',
                    icon: 'antd-FileExclamationOutlined',
                },
            },
            {
                path: '500',
                name: 'Common-ServeError',
                component: '@pages/Common/ServeError.vue',
                meta: {
                    label: '500 页面',
                    icon: 'material-ErrorFilled',
                },
            },
            {
                path: 'table',
                name: 'Common-Table',
                component: '@pages/Common/CommonDataTable.vue',
                meta: {
                    label: '数据表格',
                    icon: 'antd-TableOutlined',
                },
            },
        ],
    },
    {
        path: '/docs',
        name: 'Docs-Page',
        component: 'Layout',
        meta: {
            label: '相关文档',
        },
        children: [
            {
                path: 'vite',
                name: 'Vite-Vue',
                meta: {
                    label: 'Vite中文文档',
                    icon: 'antd-FileExclamationOutlined',
                    link: 'INTERNAL_LINK',
                    url: 'https://cn.vitejs.dev',
                },
            },
            {
                path: 'vue',
                name: 'Docs-Vue',
                meta: {
                    label: 'Vue.js中文文档',
                    icon: 'antd-FileExclamationOutlined',
                    link: 'INTERNAL_LINK',
                    url: 'https://cn.vuejs.org',
                },
            },
            {
                path: 'naive',
                name: 'Naive-Vue',
                meta: {
                    label: 'NaiveUI文档（外链）',
                    icon: 'antd-FileExclamationOutlined',
                    link: 'EXTERNAL_LINK',
                    url: 'https://www.naiveui.com',
                },
            },
        ],
    },
];

export const RedirectNotFoundRoute: SystemRoute = {
    path: '/:catchAll(.*)',
    redirect: '/404',
    name: 'CatchAll',
    meta: {
        isShow: false,
    },
};
