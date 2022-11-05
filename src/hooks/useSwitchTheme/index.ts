import { useSystemConfigStore } from '@store/index';
import { getLocalKey, setLocalKey } from '@utils/LocalStorage';
import { ThemeModeType } from 'configs';

// TODO: 需要完善，闭包的特性无法响应性的获取本地存储的值
export const useSwitchTheme = () => {
    const SystemConfigStore = useSystemConfigStore();

    // 获取HTML标签DOM节点
    const HtmlElement = document.querySelector('html')!;
    // 获取本地默认主题
    const getThemeMode = () => (getLocalKey('theme') as ThemeModeType) || 'LIGHT';
    // 设置主题
    const setThemeMode = (Theme: ThemeModeType) => {
        setLocalKey('theme', Theme);
        if (Theme === 'LIGHT') {
            HtmlElement.classList.remove('dark');
        } else {
            HtmlElement.classList.add('dark');
        }
        SystemConfigStore.ThemeMode = Theme;
    };

    return {
        getThemeMode,
        setThemeMode,
    };
};
