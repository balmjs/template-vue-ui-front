import { responseHandler } from '@mock-server/handler';

export function getDemoApis(server) {
  server.post('/system/menu', (schema, request) => {
    const data = JSON.parse(request.requestBody);

    return responseHandler([
      {
        title: '菜单1',
        name: 'menu1',
        submenu: [
          {
            icon: 'icon1',
            title: '首页',
            name: 'home'
          },
          {
            icon: 'icon2',
            title: '菜单1-1',
            name: 'menu1.list'
          }
        ]
      },
      {
        title: '菜单2',
        name: 'menu2',
        submenu: [
          {
            icon: 'icon3',
            title: '菜单2-1',
            name: 'menu2.home'
          },
          {
            icon: 'icon4',
            title: '菜单2-2',
            name: 'menu2.list'
          }
        ]
      }
    ]);
  });
}
