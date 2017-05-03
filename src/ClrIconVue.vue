<template>
  <span class="clr-icon" v-html="shapes[shapeSplit[0]]"
        :dir="!flip && (dir || shapeSplit[1])"
        :flip="flip"
        :style="{width: size + 'px', height: size + 'px'}"></span>
</template>

<script>
  export default {
    name: 'ClrIconVue',
    props: {
      shape: String,
      dir: String,
      flip: String,
      size: Number
    },
    data () {
      return {
        shapes: global.clarityIconShapes
      }
    },
    computed: {
      shapeSplit () {
        return this.shape.split(' ')
      }
    }
  }
</script>
