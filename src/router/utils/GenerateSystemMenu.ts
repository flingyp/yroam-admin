import { cloneDeep } from 'lodash';
import { MenuOption } from 'naive-ui';
import { RouteRecordRaw } from 'vue-router';

import { renderIcon } from '@/components';

/**
 * 生成菜单方法
 * @param routes
 * @returns
 */
export const generateSystemMenu = (routes: RouteRecordRaw[]): MenuOption[] => {
  const menus: MenuOption[] = [];
  routes.forEach((route) => {
    if (route.meta?.isShow === undefined || route.meta.isShow === true) {
      const menu: MenuOption = {};
      let handleRoute = cloneDeep(route);
      if (handleRoute.children && handleRoute.children.length > 1) {
        menu.children = generateSystemMenu(handleRoute.children);
      } else if (handleRoute.children && handleRoute.children.length === 1) {
        // 处理单一路由
        // eslint-disable-next-line prefer-destructuring
        handleRoute = handleRoute.children[0];
      }
      menu.label = handleRoute.meta?.label;
      menu.key = handleRoute.name as string;

      if (!handleRoute.meta?.icon) {
        menu.icon = renderIcon('Person', 'ionicons5');
      } else {
        const [source, iconLabel] = handleRoute.meta.icon.split('-');
        menu.icon = renderIcon(iconLabel, source);
      }

      // 外链地址
      if (route.meta?.link === 'EXTERNAL_LINK' && route.meta.url) {
        menu.link = route.meta.link;
        menu.url = route.meta.url;
      }

      menus.push(menu);
    }
  });
  return menus;
};
