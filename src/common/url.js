

export default {

    // 获取公告内容
    getBand: {
        method: 'get',
        url: `/band.json`
        // url: '/queryAnnounce'  测试成功
    },

    //登陆
    getLogin: {
        method: 'get',
        url: '/login.json'
        // 测试失败
        // method: 'post',
        // url: '/login'
    },
    //登出
    getLoginOut: {
        method: 'get',
        url: '/loginOut.json'

    },

    //注册
    getRegister: {
        method: 'get',
        url: '/register.json'
        // method: 'post',
        // url: '/register'
    },


    //获取学生的已选任务
    getStuMission: {
        method: 'get',
        url: '/stuMission.json'
    },

    //获取学生任务的每项展开
    getStuDetail: {
        method: 'get',
        url: '/detailMission.json'
    },

    //学生删除他的已选任务
    DeleteStuMission: {
        method: 'get',
        url: '/deleteStudent.json'

    },
    // 不知道什么功能
    getWork: {
        method: 'get',
        url: '/work.json'
    },

    //teacherCourse 板块
    getCourse: {
        method: 'get',
        url: '/course.json'
    },

    getTeaCouDetail: {
        method: 'get',
        url: '/detailMission.json'
    },

    addTeaCourse: {
        method: 'get',
        url: '/detailMission.json' //暂时的接口
    },

    //teaMission 板块

    getTeaMission: {
        method: 'get',
        url: '/teaMission.json'
    },

    getTeaMisDetail: {
        method: 'get',
        url: '/detailMission.json'
    },

    deleteTeaMission: {
        method: 'get',
        url: '/detailMission.json'
    },

    //visitorMission:
    getVisMission: {
        method: 'get',
        url: '/mission.json'
    },

    getVisDetMission: {
        method: 'get',
        url: '/detailMission.json'
    },

    getResource: {
        method: 'get',
        url: '/resource.json'
    },
    getSoftware: {
        method: 'get',
        url: '/software.json'
    }
}

