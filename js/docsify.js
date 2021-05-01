window.$docsify = {
    search: 'auto', // 默认值
    loadNavbar: true,
    loadSidebar: true,
    coverpage: true, //激活封面功能。如果为true，则会从中加载_coverpage.md。
    auto2top: true, //当路线改变时，滚动到屏幕的顶部。
    autoHeader: true,
    mergeNavbar: true,
    relativePath: true,
    maxLevel: 3,
    subMaxLevel: 1,
    name: 'Revenge Now 官方网站',
    repo: '',
    homepage: "index.md",
    themeColor: '#9900EE',
    el: '#app',
    basePath: "/docs/",
    loadFooter: true, // load from _footer.md
    loadFooter: '_footer.md', // Or load from _footer.md
    plugins: [
        EditOnGithubPlugin.create("//github.com/revengenowstudio/docs/blob/master/"),
        function(hook, vm) {
            hook.beforeEach(function(html) {
                return html +
                    '\n\n----  \n' +
                    '[![知识共享许可协议 CC-BY-NC-SA 4.0](//revengenowstudio.github.io/docs/img/License.png)](//creativecommons.org/licenses/by-nc-sa/4.0/)  ' +
                    '本文采用[CC-BY-NC-SA 4.0 国际许可协议](//creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。\n\n' +
                    '`Revenge Now 官方网站` Powered by [`docsify`](//docsify.js.org)  \n\n' +
                    '----';

            });
            hook.afterEach(function(html) {
                if (vm.route.path === '/') {
                    return html;
                }
                return html;
            });
        }
    ],
    count: {
        countable: true,
        fontsize: '0.9em',
        color: 'rgb(90,90,90)',
        language: 'chinese'
    },
    tabs: {
        persist: true, // default
        sync: true, // default
        theme: 'classic', // default
        tabComments: true, // default
        tabHeadings: true // default
    },
    share: {
        reddit: true,
        linkedin: true,
        facebook: true,
        twitter: true,
        whatsapp: true,
        telegram: true,
    },
    progress: {
        position: "top",
        color: "var(--theme-color,#42b983)",
        height: "3px",
    },
    nameLink: {
    '/en/': '/en/',
    '/': '/',
    },
    fallbackLanguages: ['en']
}
if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('/docs/js/sw.js')
}

if (!!window.ActiveXObject || "ActiveXObject" in window) {
    document.querySelector("div#app").innerHTML +=
        "<br>" +
        "加载失败<br>" +
        "Revenge Now 官方网站 不支持使用Internet Explorer<br>" +
        "请更换浏览器 "
};
