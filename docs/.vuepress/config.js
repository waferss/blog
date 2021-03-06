module.exports = {
  base: '/',
  lang: 'zh-CN',
  title: 'Blog of the waferss
  description: "It's just a blog",
  keys: '个人博客', // repo: 'https://github.com/waferss/blog',
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@static': '/static',
      },
    },
  },
  themeConfig: {
    logo: '/2021.jpg',
    nav: [
      { text: '首页', ariaLabel: '首页', link: '/' },
      { text: '文章', ariaLabel: '文章', link: '/blog/' },
      {
        text: 'Github',
        ariaLabel: 'Github',
        link: 'https://github.com/waferss',
      },
    ],
    sidebar: {
      '/blog/': [
        {
          title: 'About',
          path: '/blog/',
        },
      ],
    },
    smoothScroll: true,
    sidebarDepth: 2,
    collapsable: true,
    lastUpdated: 'Last Updated',
    prevLinks: true,
    nextLinks: true,
  }
};
