module.exports = {
    title: 'JouavDeveloper',
    description: '',
    base: '/DeveloperDoc/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/docs/guide' },                      // 根路径
            { text: 'Guide', link: '/docs/guide/' },
            { text: 'Api', link: '/docs/test/' },
            { text: 'External', link: 'https://google.com' }, // 外部链接
            // 显示下拉列表
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/docs/zh/' },
                    { text: 'English', link: '/docs/' }
                ]
            }
            // 下拉列表显示分组
            // {
            //     text: '高级',
            //     items: [
            //         {
            //             text: '算法',
            //             items: [
            //                 { text: '冒泡', link: '/language/chinese' },
            //                 { text: '快速', link: '/language/japanese' }
            //             ]
            //         },
            //         {
            //             text: '设计模式',
            //             items: [
            //                 { text: '工厂', link: '/language/chinese' },
            //                 { text: '单例', link: '/language/chinese' },
            //             ]
            //         },
            //     ]
            // }
        ],
        sidebar: 'auto',
        sidebarDepth: 2
    }
}