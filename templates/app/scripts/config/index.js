export const DEBUG = true; // 仅限本地调试使用
export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';

export const SERVER_BASE_URL = isProd ? '/app/' : '/app/';
export const breakpoint = 960;
