### Vue3如何watch props

### 🧩 先看答案代码

```js
watch(
  () => props.modelValue,
  value => {
    isVisible.value = value;
  }
);
```

------

### 🧠 1. `watch` 的基本语法

在 Vue 3 中，`watch` 的标准形式是：

```js
watch(source, callback)
```

其中：

- `source`：要“监听”的数据源；
- `callback(newValue, oldValue)`：当数据源变化时执行的回调。

------

### 💡 2. 为什么写成 `() => props.modelValue`？

因为：

- 在 `setup()` 里，`props` **不是响应式 ref**；
- 而是一个**普通对象的只读代理**；
- 直接写 `watch(props.modelValue)` 是 **无效的**。

> ⚠️ Vue 会警告你：“watch only accepts a getter function when watching props”。

------

### ✅ 3. Getter 写法解释

`() => props.modelValue` 是一个“getter 函数”：

- 它返回你想观察的具体值；
- Vue 会**自动追踪**这个 getter 内部访问到的响应式依赖；
- 一旦依赖变化（`props.modelValue` 改变），`watch` 回调就会触发。

------

### 🔍 举个例子：

```js
watch(
  () => props.modelValue,   // ← getter：告诉 Vue 要监听哪个值
  (newVal, oldVal) => {     // ← 当 modelValue 变化时触发
    console.log('modelValue 变了：', newVal)
  }
)
```

相当于告诉 Vue：

> “请在每次执行 `() => props.modelValue` 时追踪依赖，一旦这个值变了，就执行后面的函数。”

------

### 🧮 4. 对比不同写法

| 写法                                | 是否正确 | 说明                        |
| ----------------------------------- | -------- | --------------------------- |
| `watch(props.modelValue, cb)`       | ❌        | props 不是 ref，无法追踪    |
| `watch(() => props.modelValue, cb)` | ✅        | getter 函数，Vue 能追踪依赖 |
| `watch(refVar, cb)`                 | ✅        | 如果是 ref 就不需要 getter  |

------

### 🪄 5. 例子解释

```js
watch(
  () => props.modelValue,    // 监听父组件传下来的 modelValue
  value => {
    isVisible.value = value; // 同步更新内部状态
  }
);
```

意思是：

> 当父组件更新 `v-model` 绑定的值时，自动同步到子组件内部的 `isVisible`。

这种写法是大厂在封装组件时的标准写法，比如自定义 `<Dialog v-model="show" />` 时。

