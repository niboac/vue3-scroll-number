import Vue3ScrollNumber from './vue3-scrolling-number.vue'
import type { App } from 'vue'

// 按需引入

const components = [Vue3ScrollNumber]

export function install(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}

export { Vue3ScrollNumber }
