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
        '@assets': '/docs/assets',
      },
    },
  },
  // 主题配置
  themeConfig: {
    logo: '/CAF.png',
    nav: [
      { text: '首页', link: '/', ariaLabel: '首页' },
      { text: '文章', link: '/guide/', ariaLabel: '文章' },
      {
        text: '了解更多',
        ariaLabel: '了解更多',
        items: [
          { text: 'jiandyu', link: '/' },
          { text: 'more', link: '/' },
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
  sidebarDepth: 2, // 侧边栏显示2级
  lastUpdated: 'Last Updated', // 最后更新时间
  smoothScroll: true, // 页面滚动
};
