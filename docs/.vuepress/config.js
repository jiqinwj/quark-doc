module.exports = ({
    dest: '../../quarkdoc',
    title: 'Quark 文档',
    description: 'quark documents',
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
        repo: 'https://github.com/quarkcms/quark-doc.git',
        repoLabel: 'GitHub',
        editLinks: true,
        smoothScroll: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
            {
                text: '指南',
                link: '/guide/'
            },
        ],
        sidebar: {
            '/guide/' : [
                {
                    title: '指南',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '',
                        'getting-started'
                    ]
                },
                {
                    title: '深入',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '',
                        'getting-started'
                    ]
                },
            ]
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/last-updated', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/medium-zoom', true],
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>'
        }],
        ['container', {
            type: 'upgrade',
            before: info => `<UpgradePath title="${info}">`,
            after: '</UpgradePath>'
        }]
    ]
})