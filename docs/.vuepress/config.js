/** @format */

module.exports = {
  base: '/',
  title: 'Blog of chickenAndFish',
  description: "It's just a blog",
  keys: '个人博客',
  repo: 'https://github.com/chickenAndFish/blog.git',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  markdown: {
    lineNumbers: true, // 代码块是否加行号
  },
  // webpack路径别名配置
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '/assets',
      },
    },
  },
  // 主题配置
  themeConfig: {
    logo: '/CAF.png',
    nav: [
      { text: '首页', link: '/', ariaLabel: '首页' },
      { text: '随笔', link: '/essay/', ariaLabel: '随笔' },
      { text: 'html', link: '/html/', ariaLabel: 'html' },
      { text: 'css', link: '/css/', ariaLabel: 'css' },
      { text: 'js', link: '/js/', ariaLabel: 'js' },
      {
        text: '框架',
        ariaLabel: '框架',
        items: [
          { text: 'vue', link: '/vue/' },
          { text: 'react', link: '/react/' },
        ],
      },
      {
        text: 'Github',
        ariaLabel: 'Github',
        link: 'https://github.com/chickenAndFish',
      },
    ],
  },
  sidebar: 'auto', // 侧边栏配置
  sidebarDepth: 2, // 侧边栏显示 2 级
  lastUpdated: 'Last Updated', // 最后更新时间
  smoothScroll: true, // 页面滚动
};
