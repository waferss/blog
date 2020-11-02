/** @format */

module.exports = {
  base: '/',
  lang: 'zh-CN',
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
      { text: '首页', ariaLabel: '首页', link: '/' },
      { text: '随笔', ariaLabel: '随笔', link: '/essay/' },
      { text: 'html', ariaLabel: 'html', link: '/html/' },
      { text: 'css', ariaLabel: 'css', link: '/css/' },
      { text: 'js', ariaLabel: 'js', link: '/js/' },
      {
        text: '框架',
        ariaLabel: '框架',
        items: [
          { text: 'vue', link: '/vue/' },
          { text: 'react', link: '/react/' },
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
  },
  // 侧边栏配置
  sidebar: 'auto',
  sidebar: {
    '/essay/': [''],
    '/html/': [''],
    '/css/': [''],
    '/js/': ['', 'JSAdvancedProgramming3'],
    '/vue/': [''],
    '/react/': [''],
    '/other/': [''],
    // fallback
    '/': ['', 'contact', 'about'],
  },
  sidebarDepth: 2, // 侧边栏显示 2 级
  lastUpdated: 'Last Updated', // 最后更新时间
  smoothScroll: true, // 页面滚动
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
