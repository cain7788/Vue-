// 1.Vue.component方法创建组件，该方法有两个参数，
// 第一个参数是组件名，第二个参数是组件的配置,必须要指定template


// 这个是商品列表页面的全局组件
Vue.component("component-a", {
    template: "<p>这是全局组件</p>"
})




// 这个是购物车页面的全局组件
Vue.component("component-b", {
    template: "<p>这是全局组件</p>"
})