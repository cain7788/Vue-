// 1.Vue.component方法创建组件，该方法有两个参数，
// 第一个参数是组件名，第二个参数是组件的配置,必须要指定template


// 这个是商品列表页面的全局组件
Vue.component("component-a", {
    data(){
        return {

        }
    },
    props:["goodsa"],
    methods:{
        handleAddCart(item){   
            var list = {...item}
            this.$emit("sendproduce",list)
        }
    },
    template: `
    <div  class="box1">
        <ul>
            <li class="lists"  v-for="(item,index) in goodsa">
                <p>型号：{{ item.type }}</p>
                <span style="color: red">￥：{{ item.price }}</span>
                <span style="margin-left: 100px;">件数：{{ item.count }}</span>
                <button class="buy" @click="handleAddCart(item)">加购</button>
            </li>
        </ul>
        <div style="text-align: center;margin-top: 10px;">喜欢可以先加入购物车~</div>
      </div>`,

})




// 这个是购物车页面的全局组件
Vue.component("component-b", {
    props:["produce"],
    data(){
        return {

        }
    },
    methods:{
        handleDelCart(index){
            console.log(index);
            let arr = this.produce
            this.produce.splice(index,1)
        },
        handleAddPro(item){
            item.count++
        },
        handleRedPro(item){
        if(item.count == 0){
            return
        }
        item.count--
        },

        
    },
    computed:{
        allPrice(index){
            // console.log(123);
            var prices = 0
            // var prices = this.priceSum
            this.produce.forEach(item=> {
              // prices+= +this.arr[index].allPrice
              prices += +item.price * +item.count
            });
            // this.priceSum = prices
            return prices
          }
        },
    
    filters:{
        toFixed(value){
          return Number(value).toFixed(2)
        }
      },
    template: `
    <div class="box2">
        <ul>
            <li class="lists"  v-for="(item,index) in produce">
            <p>型号：{{ item.type }}</p>
            <span style="color: red">￥：{{ item.price }}</span>
            <span style="margin-left: 60px;">
                件数：
                <button @click="handleRedPro(item)" class="btn">-</button>
                {{ item.count }}
                <button @click="handleAddPro(item)" class="btn">+</button>
            </span>
            <button class="buy" @click="handleDelCart">删除</button>
            </li>
        </ul>
        <div style="text-align: center;margin-top: 10px;">总计：{{ allPrice | toFixed}}</div>

    </div>`,
})