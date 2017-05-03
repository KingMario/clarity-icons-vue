import ClrIconVue from './ClrIconVue'
require('clarity-icons/clarity-icons.min.css')

let {CoreShapes} = require('clarity-icons/shapes/core-shapes')
let {EssentialShapes} = require('clarity-icons/shapes/essential-shapes')
let {SocialShapes} = require('clarity-icons/shapes/social-shapes')
let {TechnologyShapes} = require('clarity-icons/shapes/technology-shapes')

global.clarityIconShapes = []

const addShapes = (shapes) => {
  global.clarityIconShapes = {
    ...global.clarityIconShapes,
    ...shapes
  }
}

const install = (Vue) => {
  if (Vue) {
    Vue.component('ClrIconVue', ClrIconVue)
    global.clarityIconAddShapes = addShapes
    global.clarityIconOptionalShapes = {
      EssentialShapes,
      SocialShapes,
      TechnologyShapes
    }
  }
}

addShapes(CoreShapes)

install(global.Vue)

export default {
  install,
  addShapes,
  ClrIconVue,
  EssentialShapes,
  SocialShapes,
  TechnologyShapes
}
