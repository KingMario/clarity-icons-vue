# Clarity Icons Vue Component

## A Simple Vue Port of Clarify Icons

[Clarity Icons](https://vmware.github.io/clarity/documentation/iconography) 
is a simple yet powerful Iconography of Clarity Design System by VMware.

Clarity presents pixel-perfect and scalable SVG-based icons. This new icon system 
gives you complete control over the color, orientation, and size. Additionally, 
you can access and customize any SVG graphic element inside the icon through 
standard CSS.

## Usage

### Direct &lt;script> Include

```html
<div class="app">
  <div style="background-color: #414957; text-align: right;">
    <clr-icon-vue shape="clarityLogo"></clr-icon-vue>
    <span style="color: #ccc;">Read More (Don't Click)</span>
    <clr-icon-vue shape="caret left" flip="vertical" :size="12" class="is-inverse"></clr-icon-vue>
  </div>
  <clr-icon-vue shape="cog" :size="24" flip="horizontal" class="is-info has-badge"></clr-icon-vue>
  <clr-icon-vue shape="document down" :size="64" class="is-highlight has-alert"></clr-icon-vue>
</app>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/clarity-icons-vue/dist/ClrIconVue.min.js"></script>
<script>
  clarityIconAddShapes(clarityIconOptionalShapes.EssentialShapes) // add built-in shape set
  clarityIconAddShapes({ // add additional shape
    clarityLogo: `
<svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>logo</title>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="logo" transform="translate(0.000000, 4.500000)">
      <g id="large" transform="translate(0.000000, 0.044118)">
        <polyline id="Fill-3" fill="#0095D3" points="24.7018129 0.0388840336 35.979641 6.71768066 35.9614589 20.2811697 24.7018129 26.9417748 18.0173463 22.9707846 29.6688177 16.4295126 29.6688177 10.5321277 24.9216504 7.92742184 18.0321077 3.99030785"></polyline>
        <polyline id="Fill-4" fill="#F38B00" points="11.3313965 0.0388840336 0.0535685039 6.71768066 0.0717505512 20.2811697 11.3313965 26.9417748 18.0166889 22.970061 7.35448694 16.4295126 7.35448694 10.5321277 18.0324642 3.98991663"></polyline>
        <polyline id="Fill-5" fill="#004B70" points="18.017374 22.9708988 11.4990488 18.9719838 18.0212495 15.1272387 24.9510827 19.0786297"></polyline>
        <polyline id="Fill-6" fill="#98441E" points="18.0314053 3.98921729 11.5267517 7.97364692 18.0439938 11.8578324 24.9058951 7.91831944"></polyline>
      </g>
    </g>
  </g>
</svg>`
  })

  var vm = new Vue({
    el: '.app'
  })
</script>
```

### NPM

```
npm i -S clarity-icons-vue
```

```javascript
import Vue from 'vue'
import clarityIconsVue from 'clarity-icons-vue'

clarityIconsVue.install(Vue)
clarityIconsVue.addShapes(clarityIconsVue.EssentialShapes)
```

Now you are ready to use `<clr-icon-vue>` tag in your Vue template.

### License

[MIT](http://opensource.org/licenses/MIT)

### Credits

[Project Clarity](https://vmware.github.io/clarity)
