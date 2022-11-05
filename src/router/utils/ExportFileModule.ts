const SystemRouters = import.meta.glob('../../pages/**/*.vue');

/**
 * 获取指定目录下的所有组件
 * @param component
 * @returns
 */
export const globFileModule = (component: string) => {
    // 获取页面组件的相对路径
    const componentAbsolutePath = component.replace('@', '../../');

    return SystemRouters[componentAbsolutePath];
};
