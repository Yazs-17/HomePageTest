### Vue中的template标签有什么用？

template主要是作为一个占用符去使用，

Vue2：作为一个占位符去使用或者是在组件中传递一个插槽内容，无论什么情况，template在compiler后会被去除；

Vue3：用法同Vue2，但是在不使用v-if、v-else-if 、v-else、v-for的时候，Vue不会进行处理，会直接渲染成一个HTML原生的template标签。
