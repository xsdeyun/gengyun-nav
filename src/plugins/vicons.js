import * as XIconsPlus from '@vicons/ionicons5'

export default {
    install(app) {
        Object.values(XIconsPlus).forEach(component => {
            app.component(component.name, component)
        })
    }
}
