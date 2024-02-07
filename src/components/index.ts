import Vue3ScrollNumber from './vue3-scrolling-number.vue'
import type { App } from 'vue'

// 按需引入
export { Vue3ScrollNumber }

const component = [Vue3ScrollNumber]

const Vue3ScrollingNumber = {
  install(app: App) {
    component.forEach((item) => {
      app.component(item.name, Vue3ScrollNumber)
    })
  }
}

export default Vue3ScrollingNumber
