import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录', login: true},
        component: () => import('../components/Login.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404.vue'),
    },
    { path: '/', redirect: '/home' },
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
    home: {
        path: 'home',
        name: 'home',
        meta: { title: '主页' },
        component: () => import('../views/Home.vue'),
    },
    t1: {
        path: 't1',
        name: 't1',
        meta: { title: '表格' },
        component: () => import('../views/T1.vue'),
    },
    password: {
        path: 'password',
        name: 'password',
        meta: { title: '修改密码' },
        component: () => import('../views/Password.vue'),
    },
    msg: {
        path: 'msg',
        name: 'msg',
        meta: { title: '通知消息' },
        component: () => import('../views/Msg.vue'),
    },
    userinfo: {
        path: 'userinfo',
        name: 'userinfo',
        meta: { title: '用户信息' },
        component: () => import('../views/UserInfo.vue'),
    },
    lastedpub: {
        path: 'lastedpub',
        name: 'lastedpub',
        meta: { title: '最新发布' },
        component: () => import('../views/LastedPub.vue'),
    },
    mywrite: {
        path: 'mywrite',
        name: 'mywrite',
        meta: { title: '我填写的' },
        component: () => import('../views/MyWrite.vue'),
    },
    history: {
        path: 'history',
        name: 'history',
        meta: { title: '历史汇总' },
        component: () => import('../views/History.vue'),
    },
    myinfom: {
        path: 'myinfom',
        name: 'myinfom',
        meta: { title: '我的通知' },
        component: () => import('../views/MyInfom.vue'),
    },
    courseplan: {
        path: 'courseplan',
        name: 'courseplan',
        meta: { title: '任务安排' },
        component: () => import('../views/CoursePlan.vue'),
    },
    addcourseplan: {
        path: 'addcourseplan',
        name: 'addcourseplan',
        meta: { title: '新增安排' },
        component: () => import('../views/AddCoursePlan.vue'),
    },
    coursemission: {
        path: 'coursemission',
        name: 'coursemission',
        meta: { title: '教学任务' },
        component: () => import('../views/CourseMission.vue'),
    },
}

const createRouter = () => new Router({
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
