# vue3-scrolling-number
一个仅支持 vue3 的滚动数字组件

## 效果

![img](./public/scroll-number.gif)


## 安装
```
npm install vue3-scrolling-number
```
或者
```
pnpm add vue3-scrolling-number
```

## 使用
```
import Vue3ScrollingNumber from 'vue3-scrolling-number/src/components/Vue3ScrollNumber.vue'
 ```
```
 <Vue3ScrollingNumber
      style="font-size: 55px;"
      :from="21"
      :to="value"
    />
```