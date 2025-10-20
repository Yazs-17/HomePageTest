### Vue渲染模板时，如何保留模板中的HTML注释

1. 只有Vue2 有的comments；
2. v-pre（完全跳过该元素编译）
3. 特殊注释语法（`<!--[COMMENTS] your comments --`）

