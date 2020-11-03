<!-- @format -->

# Vuepress 侧边栏 sidebar

::: tip 
Vuepress 侧边栏 **sidebar** 配置上有不少问题，官方文档写得很好，但把各种配置分开写了，自己所需要的效果必须要几样结合起来才能配置成功，故作记录。
:::

## 官方文档已有部分

官方文档上写过的东西我就不复制粘贴了，直接贴个跳转链接：[Vuepress 侧边栏配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F)

## 自己所需的效果

我想要每个不同的页面都有自己的侧边栏，官方文档中的 **侧边栏分组** 代码示例会使所有页面共享同一组侧边栏，不适合我的需求。

而官方文档中的 **多个侧边栏** 代码示例则无法分组以及配置 `title` 、 `path` 、 `collapsable` 、 `sidebarDepth` 以及 `children` 等。

而且我还想着利用 `children` 使同组的文章能够有上/下一篇链接，所以单用这两个中的任意一个无法实现我的需求。

<br />

但将这两个结合起来就能实现我的需求，我叫它分组式多侧边栏。:v:

<s> (其实和 Vuepress 官方文档的效果差不多 :sweat_smile:) </s>

## sidebar 结构

首先，需要先按照官方文档多个侧边栏，将页面文件组织成符合规定的目录结构。

直接贴上官方文档链接：[Vuepress sidebar 多个侧边栏](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%A4%9A%E4%B8%AA%E4%BE%A7%E8%BE%B9%E6%A0%8F)

接下来直接上代码

---

```js
// 配置文件路径: /docs/.vuepress/config.js

// 注: 路径都为绝对路径，文件打包后 docs 文件夹大致对应为 dist 文件夹

sidebar: {

  // --- page-1 页面 start ---
  '/page-1/': [

    // -- page 页面 page-1.md 文件 start --
    {
      title: '标题', // 必要的
      path: '/page-1/', // 可选的, 标题的跳转链接, 应为绝对路径且必须存在
      collapsable: true, // 可选的, 是否使侧边栏不为展开状态，默认值是 true
      sidebarDepth: 2, // 可选的, 侧边栏深度, 默认值是 1
      initialOpenGroupIndex: -1, // 可选的, 初始开放组索引, 默认值是 0
      /* children 与上面一脉相承, 即子组嵌套,
       * 注意 children 是数组, 不必有键值,直接嵌套对象就可以了
       */
      children: [
        {
          title: '我是标题',
          path: '/page-1/children1-page',
          /* path 其实可以随便写个 md 文件地址, README.md 默认只需写到 / 即可,
           * 非 README.md 需补上 md 文件名 ( 后缀 .md 可以不写，如该 path )
           */
        },
        {
          title: '我也是标题',
          path: '/page-1/children2-page.md', // 和上面大同小异, 补个 .md
        },
      ],
    },
    // -- page 页面 page-1.md 文件 end --

    /* 注意下面这个不是 page-1 页面的子类, 它和 /page-1/README.md 是同级的,
     * 只不过同在 page-1 页面下
     */
    {
      title: '我也是个标题',
      path: '/page-1/view/md-file.md',
      collapsable: false,
      children: [],
    },

    // 一个页面可以有多个同级 md 文件
    {...},
    {...},
    ...

  ],
  // --- page-1 页面 end ---

  // page-2 页面、page-3 页面 等直接大同小异的写吧
}
```

---

## 再来点我喜欢的辅料

::: details

```js
sidebar{
  // ...

  smoothScroll: true, // 页面滚动
  collapsable: true, // 使侧边栏不为展开状态
  sidebarDepth: 2, // 侧边栏显示 2 级, 深度为 2
  lastUpdated: 'Last Updated', // 最后更新时间
  // 上/下一篇
  prevLinks: true,
  nextLinks: true,
}
```

:::