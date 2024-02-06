import { PropType, Component } from 'vue'

export interface Vue3ScollingNumberProps {
  from: PropType<number>
  to: PropType<number>
}
declare const vScollingNumber: Component<Vue3ScollingNumberProps>
export default vScollingNumber
