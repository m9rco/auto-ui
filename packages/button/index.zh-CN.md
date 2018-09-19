---
imports: import Button from './index.jsx'
---

## Button 按钮

<Button>Hello</Button>

**按钮种类**

按钮分为 primary、danger 与 default3 种（注意：默认为 primary）

::: demo 这是描述这是**描述**，点三角可展开代码
```jsx
<Button type="primary">Primary Button</Button>

<Button type="danger" >Danger Button</Button>

<Button type="default">Default Button</Button>
```
:::

**小按钮**

```jsx
<Button mini>Mini type</Button>
```

**加载中**

```jsx
<Buttonloading>With loading</Buttonloading>
```

**不可用**

```jsx
<Button  disabled>Disabled</Button>
```

| 属性     | 说明                                   | 类型     | 默认值  |
| -------- | -------------------------------------- | -------- | ------- |
| type     | 按钮的种类，primary / danger / default | String   | primary |
| onClick  | 点击事件                               | Function | -       |
| mini     | 是否使用小按钮                         | Boolean  | false   |
| loading  | 是否为加载中状态                       | Boolean  | false   |
| disabled | 是否不可用                             | Boolean  | false   |