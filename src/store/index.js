import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '主页', // 文本内容
            },
            {
                text: '信息收集',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 'lastedpub',
                        text: '最新发布',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'mywrite',
                        text: '我填写的',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'history',
                        text: '历史汇总',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ],
            },
            {
                text: '通知管理',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 'myinfom',
                        text: '我的通知',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ],
            },
            {
                text: '意见征集',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 't1',
                        text: '所有征集',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        type: 'ios-grid',
                        name: 'msg',
                        text: '我填写的',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ],
            },
            {
                text: '监考管理',
                type: 'ios-paper',
                children: [
                    {
                        text: '系统管理',
                        type: 'ios-paper',
                        children: [
                            {
                                type: 'ios-grid',
                                name: 'msg',
                                text: '教师信息',
                            },
                            {
                                type: 'ios-grid',
                                name: 'courseplan',
                                text: '任务安排',
                            },
                            {
                                type: 'ios-grid',
                                name: 'addcourseplan',
                                text: '添加安排',
                            },
                            {
                                type: 'ios-grid',
                                name: 'coursemission',
                                text: '教学任务',
                            },
                        ],
                    },
                    {
                        text: '监考管理',
                        type: 'ios-paper',
                        children: [
                            {
                                type: 'ios-grid',
                                name: 'msg',
                                text: '监考安排',
                            },
                            {
                                text: '安排调整',
                                name: 'password',
                                type: 'ios-grid',
                            },
                        ],
                    },

                ],
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
    },
})

export default store
