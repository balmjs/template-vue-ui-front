import { $routerModel } from '@yiban-shared/routes/config';
import Login from '@/pages/common/login';
import Home from '@/pages/common/home';

export default [
  $routerModel.createRoute('/login', 'login', Login),
  $routerModel.createRoute('/home', 'home', Home)
];
