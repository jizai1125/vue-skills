# vue-skills
>记录vue的一些组件、技巧、优化操作

## 1. 全局组件注册动态注册
  > filePath:  `src/globalComponent.js`
  >
  > globalComp、globalComponent.js 利用webpack的 `require.context` 方法

## 2. 路由分区及动态添加路由
  > filePath:  `src/router/index.js`
  >
  > 利用webpack的 `require.context` 方法进行动态加载

## 3. 自定义指令权限
  > filePath:  `src/directives/permission.js`
  >
  > v-permission

## 4. hookEvent 生命周期钩子事件
> filePath:  `src/components/hookEvent.vue`
>
>  `this.$on('hook:created', () => {})`
> 可以利用 hookEvent 在外部给组件的生命周期里加入一些操作 

  ```vue
  <template>
  <comp @hook:created="handle"></comp>
  </template>
  ```

### 5. 切换路由，取消未响应的请求

> filePath: `axiosCancelRequest.js、store/index.js、utils/request.js`

### 6. mixin 监听页面大小变化

> filePath `mixins/autoResize.js`

### 7. 长列表渲染（虚拟列表）

> filePath: `components/virtualList`