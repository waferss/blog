/** @format */

module.exports = {
  base: '/',
  lang: 'zh-CN',
  title: 'Blog of the chickenAndFish',
  description: "It's just a blog",
  keys: '个人博客',
  // repo: 'https://github.com/chickenAndFish/blog.git',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  markdown: {
    lineNumbers: true, // 代码块是否加行号
  },
  // webpack路径别名配置
  configureWebpack: {
    resolve: {
      alias: {
        '@static': '/static',
      },
    },
  },
  // 主题配置
  themeConfig: {
    logo: '/CAF.png',
    // 导航栏
    nav: [
      { text: '首页', ariaLabel: '首页', link: '/' },
      { text: '随笔', ariaLabel: '随笔', link: '/essay/' },
      { text: 'HTML', ariaLabel: 'HTML', link: '/html/' },
      { text: 'CSS', ariaLabel: 'CSS', link: '/css/' },
      { text: 'JS', ariaLabel: 'JS', link: '/js/' },
      {
        text: '框架',
        ariaLabel: '框架',
        items: [
          { text: 'Vue', ariaLabel: 'Vue', link: '/vue/' },
          { text: 'React', ariaLabel: 'React', link: '/react/' },
        ],
      },
      {
        text: '其它',
        ariaLabel: '其它',
        link: '/other/',
      },
      {
        text: 'Github',
        ariaLabel: 'Github',
        link: 'https://github.com/chickenAndFish',
      },
    ],
    // 侧边栏
    sidebar: {
      '/essay/': [
        {
          title: '随笔',
          path: '/essay/',
        },
      ],
      '/html/': [
        {
          title: 'About',
          path: '/html/',
        },
      ],
      '/css/': [
        {
          title: 'About',
          path: '/css/',
        },
      ],
      '/js/': [
        {
          title: 'About',
          path: '/js/',
        },
        {
          title: 'JS 高级程序设计（第三版）',
          path: '/js/pro-js-for-web-dev-3rd/',
          children: [],
        },
      ],
      '/vue/': [
        {
          title: 'About',
          path: '/vue/',
        },
      ],
      '/react/': [
        {
          title: 'About',
          path: '/react/',
        },
      ],
      '/other/': [
        {
          title: 'About',
          path: '/other/',
        },
        {
          title: 'Vuepress 相关问题',
          path: '/other/vuepress-about/',
          children: [
            {
              title: 'Vuepress 侧边栏 sidebar',
              path: '/other/vuepress-about/sidebar-problems',
            },
          ],
        },
        {
          title: 'About',
          path: '/other/about',
        },
        {
          title: 'Contact',
          path: '/other/contact',
        },
      ],
    },
    smoothScroll: true, // 页面滚动
    sidebarDepth: 2, // 侧边栏显示 2 级
    collapsable: true, // 使侧边栏不为展开状态
    lastUpdated: 'Last Updated', // 最后更新时间
    // 上/下一篇
    prevLinks: true,
    nextLinks: true,
  },
  // 插件
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
      '@vuepress/blog',
    ],
  ],
};
