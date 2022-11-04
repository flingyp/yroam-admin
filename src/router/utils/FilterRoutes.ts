import { SystemRoute } from 'configs';

const filter = (AsyncRouters: SystemRoute[], Permissions: string[]) => {
  const FilterRouters: SystemRoute[] = [];
  AsyncRouters.forEach((_Router) => {
    if (_Router.children && _Router.children.length > 0) {
      _Router.children = filter(_Router.children, Permissions);
    }
    /**
     * 用户是否有权限根据 *:*:* 结构去判断
     * (* 代表任何权限， 一般第一个代表系统，第二个代表系统模块，第三个代表具体的模块业务)
     * 例如：sys:user:update： 解读为用户模块更新权限）
     */
    // 判断此路由是否有权限
    let IsHavePermission = false;
    const RouterPermissions = _Router.meta?.permissions || [];
    if (RouterPermissions.length === 0) {
      // 如果没有定义路由的权限， 默认可见
      IsHavePermission = true;
    } else {
      // 判断用户权限和路由定义的权限是否有一致的
      IsHavePermission = RouterPermissions.some((_RouterPermission) => {
        const PermissionArr = _RouterPermission.split(':');
        return Permissions.some((UserPermission) => {
          const UserPermissionArr = UserPermission.split(':');
          if (
            (PermissionArr[0] === UserPermissionArr[0] || UserPermissionArr[0] === '*')
            && (PermissionArr[1] === UserPermissionArr[1] || UserPermissionArr[1] === '*')
            && (PermissionArr[2] === UserPermissionArr[2] || UserPermissionArr[2] === '*')
          ) return true;
          return false;
        });
      });
    }
    if (IsHavePermission) {
      FilterRouters.push(_Router);
    }
  });
  return FilterRouters;
};

export const filterRoutes = (AsyncRouters: SystemRoute[], Permissions: string[]) => {
  const FilteredAsyncRouters = filter(AsyncRouters, Permissions);
  return FilteredAsyncRouters;
};
