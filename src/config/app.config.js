export const appConfig = Object.freeze({
    // 主题颜色
    appTheme: '#2d8cf0',
    // 存储key名
    prefixKey: 'Vue_GengYunPlan_Admin_',
    // token 名称
    TOKEN_CODE: 'access_token',
    // token存储时间
    DURATION: 6 * 60 * 60,
    // 请求超时时间，毫秒（默认2分钟）
    timeout: 2 * 6000,
    upload_Url:import.meta.env.VITE_BASE_URL
});
