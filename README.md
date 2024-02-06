# vue3-scrolling-number
一个仅支持 vue3 的滚动数字组件, 也是少有的任何时候都顺着一个方向滚动的数字组件.组件会自动记住上次的数字(即 from),不需要开发者处理 from 的动态值.

## 效果

![img](https://raw.githubusercontent.com/niboac/vue3-scroll-number/main/public/scroll-number.gif)


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
import Vue3ScrollingNumber from 'vue3-scrolling-number'
import 'vue3-scrolling-number/dist/style.css'

 
 <Vue3ScrollingNumber
      style="font-size: 55px;"
      :from="21"
      :to="value"
    />
```