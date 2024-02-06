import Vue3ScrollNumber from './Vue3ScrollNumber.vue'

// 按需引入
export { Vue3ScrollNumber }

const component = [Vue3ScrollNumber]

const Vue3ScrollingNumber = {
  install(App) {
    component.forEach((item) => {
      App.component(item.name, Vue3ScrollNumber)
    })
  }
}

export default Vue3ScrollingNumber
