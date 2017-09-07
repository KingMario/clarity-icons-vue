let {CoreShapes} = require('clarity-icons/shapes/core-shapes')
let {CommerceShapes} = require('clarity-icons/shapes/commerce-shapes')
let {EssentialShapes} = require('clarity-icons/shapes/essential-shapes')
let {MediaShapes} = require('clarity-icons/shapes/media-shapes')
let {SocialShapes} = require('clarity-icons/shapes/social-shapes')
let {TravelShapes} = require('clarity-icons/shapes/travel-shapes')
let {TechnologyShapes} = require('clarity-icons/shapes/technology-shapes')

global.clarityIconShapes = {}

const addShapes = (shapes) => {
  global.clarityIconShapes = {
    ...global.clarityIconShapes,
    ...shapes
  }
}

global.clarityIconAddShapes = addShapes
const optionalShapes = global.clarityIconOptionalShapes = {
  CommerceShapes,
  EssentialShapes,
  MediaShapes,
  SocialShapes,
  TravelShapes,
  TechnologyShapes
}

addShapes(CoreShapes)

export {
  addShapes,
  optionalShapes
}
