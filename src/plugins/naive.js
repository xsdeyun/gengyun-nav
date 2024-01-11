import { computed } from 'vue';
import * as NaiveUI from 'naive-ui'
import { lighten } from '../utils'
import { appConfig } from '../config/app.config';
// NaiveUI 全局方法注册
const configProviderPropsRef = computed(() => {
    const appTheme = appConfig.appTheme;
    return {
        themeOverrides: {
            common: {
                primaryColor: appTheme,
                primaryColorHover: lighten(appTheme, 6),
                primaryColorPressed: lighten(appTheme, 6),
            },
            LoadingBar: {
                colorLoading: appTheme,
            },
        }
    }

});

const { message, dialog, notification, loadingBar } = NaiveUI.createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
    {
        configProviderProps: configProviderPropsRef,
    }
);
window['$message'] = message;
window['$dialog'] = dialog;
window['$notification'] = notification;
window['$loading'] = loadingBar;


const Naive = NaiveUI.create({
    components: [
        NaiveUI.NMessageProvider,
        NaiveUI.NDialogProvider,
        NaiveUI.NLoadingBarProvider,
        NaiveUI.NNotificationProvider,
        NaiveUI.NIcon,
        NaiveUI.NInput,
        NaiveUI.NInputGroup,
        NaiveUI.NButton,
        NaiveUI.NForm,
        NaiveUI.NFormItem,
        NaiveUI.NInputNumber,
        NaiveUI.NSpace,
        NaiveUI.NLayout,
        NaiveUI.NLayoutSider,
        NaiveUI.NLayoutHeader,
        NaiveUI.NLayoutContent,
        NaiveUI.NLayoutFooter,
        NaiveUI.NConfigProvider,
        NaiveUI.NMenu,
        NaiveUI.NDialog,
        NaiveUI.NCard,
        NaiveUI.NPopover,
        NaiveUI.NModal,
        NaiveUI.NTabs,
        NaiveUI.NTab,
        NaiveUI.NCarousel,
        NaiveUI.NAffix,
        NaiveUI.NGrid,
        NaiveUI.NGridItem,
        NaiveUI.NEllipsis,
        NaiveUI.NPerformantEllipsis,
        NaiveUI.NTooltip,
        NaiveUI.NBackTop,
        NaiveUI.NSpin,
        NaiveUI.NImage,
        NaiveUI.NTag,
        NaiveUI.NScrollbar,
        NaiveUI.NDrawer,
        NaiveUI.NDrawerContent,
        NaiveUI.NDivider,
        NaiveUI.NSkeleton,
        NaiveUI.NRadio,
        NaiveUI.NSplit
    ]
})
export function setupNaive(app) {
    app.use(Naive);
}