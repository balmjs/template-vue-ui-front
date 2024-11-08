import { isDev } from '@/config';

export default {
  methods: {
    async $getModelConfig(modelPath) {
      let config = [];

      try {
        const module = await import(`@/pages/${modelPath}`);
        config = module.default;
      } catch (err) {
        isDev && console.warn(err.toString());
      }

      return config;
    }
  }
};
