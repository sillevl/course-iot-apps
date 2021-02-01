module.exports = {
  title: 'IoT Apps',
  description: 'IoT Apps course for the VIVES elektronics and ICT',
  dest: 'dist',
  plugins: [
    ['vuepress-plugin-zooming'],
    [
      // includes all files in `sourceDir`
      // ignore dotfiles and markdown
      'vuepress-plugin-public-files', {
        from: 'files',
        to: 'files',
      }
    ],
    ['vuepress-plugin-container', {
      type: 'quote',
      defaultTitle: '',
    }],
    ['vuepress-plugin-container', {
      type: 'right',
      defaultTitle: '',
    }],
    ['vuepress-plugin-container', {
      type: 'tip',
      defaultTitle: 'TIP',
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
      defaultTitle: 'WARNING',
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
      defaultTitle: 'WARNING',
    }],
    ['vuepress-plugin-container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n'
    }],
    ['vuepress-plugin-presentation-mode'],
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Toledo', link: 'https://p.cygnus.cc.kuleuven.be/webapps/blackboard/execute/announcement?method=search&context=course&course_id=_976919_1' },
      { text: 'ECTS', link: 'http://onderwijsaanbod.vives-noord.be/2020/syllabi/n/B3N079N.htm#activetab=doelstellingen_idp4064304' }
    ],
    repo: 'sillevl/course-iot-apps',
    docsDir: 'src',
    docsBranch: 'master',
    sidebarDepth: 1,
    sidebar: [
      // {
      //   title: 'JavaScript',   // required
      //   collapsable: true, // optional, defaults to true
      //   sidebarDepth: 0,    // optional, defaults to 1
      //   children: [
      //     '/chapters/01-javascript/nodejs/',
      //   ]
      // },
    ]
  },
}