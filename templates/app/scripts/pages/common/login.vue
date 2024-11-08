<template>
  <div class="page-login">
    <ui-form-view
      v-model="formData"
      :model-config="formConfig"
      :action-config="actionConfig"
      @action="onAction"
    >
      <template #after-item__ui-checkbox--rememberMe>
        <label for="remember-me">自动登录</label>
      </template>

      <template #after-form-view>
        <ui-alert v-if="message" state="error">{{ message }}</ui-alert>
      </template>
    </ui-form-view>
  </div>
</template>

<script>
const formConfig = [
  {
    label: '账号',
    component: 'ui-textfield',
    key: 'username',
    value: '',
    attrOrProp: {
      outlined: false,
      fullwidth: true,
      placeholder: '请输入您的账号'
    },
    validator: 'required'
  },
  {
    label: '密码',
    component: 'ui-textfield',
    key: 'password',
    value: '',
    attrOrProp: {
      outlined: false,
      fullwidth: true,
      inputType: 'password',
      placeholder: '请输入您的密码'
    },
    validator: 'required'
  },
  {
    component: 'ui-checkbox',
    key: 'rememberMe',
    value: false,
    attrOrProp: {
      inputId: 'remember-me'
    }
  }
];

const actionConfig = [
  {
    type: 'submit',
    text: '登 录',
    attrOrProp: {
      raised: true
    }
  }
];

export default {
  data() {
    return {
      actionConfig,
      formConfig,
      formData: {},
      message: ''
    };
  },
  async beforeMount() {
    try {
      // 检查权限
      await this.$store.me();
      this.$store.redirectToHome();
    } catch (e) {}
  },
  methods: {
    async onAction(_, { valid, message }) {
      this.message = message;

      if (valid) {
        const { callback } = this.$route.query;
        this.$store.login(this.formData, callback);
      }
    }
  }
};
</script>
