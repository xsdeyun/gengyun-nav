<template>
    <n-config-provider class="h-screen" :theme="store.AppTheme ? darkTheme : undefined" :theme-overrides="getThemeOverrides">
        <slot></slot>
    </n-config-provider>
</template>
<script>
import { appConfig } from '@/config/app.config';
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store'
import { lighten } from '@/utils'
import { darkTheme } from 'naive-ui'
export default defineComponent({
    setup() {
        const store = useAppStore();
        const getThemeOverrides = computed(() => {
            const appTheme = appConfig.appTheme;
            const lightenStr = lighten(appTheme, 6);
            return {
                common: {
                    primaryColor: appTheme,
                    primaryColorHover: lightenStr,
                    primaryColorPressed: lightenStr,
                    primaryColorSuppl: appTheme
                },
                LoadingBar: {
                    colorLoading: appTheme
                }
            };
        });
        return {
            store,
            getThemeOverrides,
            darkTheme
        }
    }
})
</script>