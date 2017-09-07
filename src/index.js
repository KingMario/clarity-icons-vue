import ClrIconVue from './ClrIconVue'
require('clarity-icons/clarity-icons.min.css')

const install = (Vue) => {
  if (Vue) {
    Vue.component('ClrIconVue', ClrIconVue)
  }
}

install(global.Vue)

export default {
  install
}
