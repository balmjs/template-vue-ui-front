<template>
  <ui-layout-view
    :top-app-bar-attr-or-prop="{
      fixed: true
    }"
    drawer-below-top-app-bar
    :use-drawer="useDrawer"
  >
    <template #top-app-bar-title>
      <div class="title">
        <router-link :to="{ name: ROUTE_NAME.home }">网站标题</router-link>
      </div>
    </template>

    <template #top-app-bar-toolbar>
      <div>
        <router-link :to="{ name: ROUTE_NAME.login }">登录</router-link>
      </div>
    </template>

    <template #drawer-title>移动端菜单</template>
    <template #drawer-content>
      <div v-for="(menuItem, menuIndex) in $store.menu" :key="menuIndex">
        <ui-item class="menu-item">
          <ui-item-text-content>
            {{ menuItem.title }}
          </ui-item-text-content>
        </ui-item>
        <ui-nav>
          <template v-for="(submenuItem, submenuIndex) in menuItem.submenu">
            <router-link
              v-slot="{ navigate, href, isActive }"
              custom
              :to="{ name: submenuItem.name }"
              :key="submenuIndex"
            >
              <ui-nav-item
                class="submenu-item"
                :href="href"
                :active="isActiveMenu(submenuItem, isActive)"
                @click.stop="navigate"
              >
                <ui-item-text-content>{{
                  submenuItem.title
                }}</ui-item-text-content>
              </ui-nav-item>
            </router-link>
          </template>
        </ui-nav>
      </div>
    </template>

    <div class="main-content">
      <template v-if="!useDrawer">
        <div>桌面端菜单</div>
        <div class="flex">
          <div
            v-for="(menuItem, menuIndex) in $store.menu"
            :key="menuIndex"
            class="flex flex-column"
          >
            <ui-item class="menu-item">
              <ui-item-text-content>
                {{ menuItem.title }}
              </ui-item-text-content>
            </ui-item>
            <ui-nav>
              <template v-for="(submenuItem, submenuIndex) in menuItem.submenu">
                <router-link
                  v-slot="{ navigate, href, isActive }"
                  custom
                  :to="{ name: submenuItem.name }"
                  :key="submenuIndex"
                >
                  <ui-nav-item
                    class="submenu-item"
                    :href="href"
                    :active="isActiveMenu(submenuItem, isActive)"
                    @click.stop="navigate"
                  >
                    <ui-item-text-content>{{
                      submenuItem.title
                    }}</ui-item-text-content>
                  </ui-nav-item>
                </router-link>
              </template>
            </ui-nav>
          </div>
        </div>
      </template>

      <router-view></router-view>
    </div>

    <page-loading v-if="$store.pageLoading" />
  </ui-layout-view>
</template>

<script>
import { ROUTE_NAME } from '@/routes/config';
import { breakpoint } from '@/config';

export default {
  data() {
    return {
      ROUTE_NAME,
      useDrawer: false
    };
  },
  beforeMount() {
    this.$bus.on('redirect', (url, replace = false) => {
      if (replace) {
        this.$router.replace(url);
      } else {
        this.$router.push(url);
      }
    });

    this.$bus.on('on-request', () => {
      this.$store.pageLoading = true;
    });

    this.$bus.on('on-response', () => {
      this.$store.pageLoading = false;
    });

    this.$bus.on('on-error', (message) => {
      this.$alert(message);
    });

    this.$bus.on('need-login', ({ message, data }) => {
      this.$store.clearUserAccount();

      if (this.$route.name !== ROUTE_NAME.login) {
        this.$alert(message);
        this.$router.push({
          name: ROUTE_NAME.login,
          query: { callback: location.href } // 回跳
        });
      }
    });

    this.watchScreen();
    window.addEventListener('balmResize', this.watchScreen);

    this.$store.getMenu();
  },
  beforeDestroy() {
    window.removeEventListener('balmResize', this.watchScreen);
  },
  methods: {
    watchScreen() {
      this.useDrawer = window.innerWidth < breakpoint;
    },
    isActiveMenu(submenuItem, isActive) {
      const currentMenu = submenuItem.name;
      const isActivePage =
        currentMenu.replace(/\.list/, '.detail') === this.$route.name;
      return isActive || isActivePage;
    }
  }
};
</script>
