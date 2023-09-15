let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor:'',
            size: '',
        }
    },
    computed:{
        circle_classes(){
            return {purple : this.isPurple}
        }
    }
}).mount('#app') 


 
const vm1 = Vue.createApp({
   data(){
    return {
        mode:1 
    }
   }

}).mount('#app1')

const vm2 = Vue.createApp({
    data(){
        return{
            birds:['pigeons','Easles','Doves','Parrots'],
            people:[
                {name:'john',age:20},
                {name :'Rick',age:18},
                {name:'Amy',Age:33}
            ]
        }
    }
}).mount('#app2')


let cm = Vue.createApp({
    data() {
        return {
            people :[
                {
                    name:'sagor',
                    message:'Hello World'
                },
                {
                    name:'Rick',
                    message:'I like pie'
                },
                {
                    name:'amy',
                    message:'skydiving in fun'
                }
            ]
        }
    },
    methods:{
        move(){
            const first = this.people.shift()
            this.people.push(first)
        }
    }
}).mount('#app3')

 