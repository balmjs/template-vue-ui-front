import { useBus } from '@balm-ui';
import { ROUTE_NAME } from '@/routes/config';
import { DEBUG } from '@/config';

const $bus = useBus();

export default {
  data() {
    return {
      isAuthenticated: false, // 登录权限
      user: {},
      menu: []
    };
  },
  methods: {
    async me() {
      if (!this.isAuthenticated) {
        const user = await this.$getModel('user', {}, { loading: true });

        this.user = user;
        this.isAuthenticated = true;
      }
    },
    redirectToHome(callbackUrl = false) {
      if (this.isAuthenticated) {
        callbackUrl
          ? (location.href = callbackUrl)
          : $bus.emit('redirect', { name: ROUTE_NAME.home }, true);
      }
    },
    async login({ username, password, rememberMe }, callbackUrl) {
      await this.$updateModel(
        'user',
        {
          username,
          password,
          rememberMe
        },
        { apiAction: 'login', loading: true }
      );

      await this.me();

      this.redirectToHome(callbackUrl);
    },
    clearUserAccount() {
      this.isAuthenticated = false;
      this.user = {};
    },
    async logout() {
      await this.$updateModel('user', {}, { apiAction: 'logout' });

      this.clearUserAccount();

      $bus.emit('redirect', { name: ROUTE_NAME.login });
    },
    async getMenu() {
      this.menu = await this.$store.$getModel(
        'system',
        {},
        { apiAction: 'menu', useMock: DEBUG }
      );
    }
  }
};
