const vm = Vue.createApp({
    data(){
        return{
            firstName:'John',
            lastName:'Doe',
            url:'https://google.com',
            raw_url :'<a v-bind:href="https://google.com"> Google </a>',
            age:20,
        }
    },
    methods: {
       
        increment(){
            this.age++;
        },
        updateLastName(msg , event){
            event.preventDefault();
            // console.log(msg);
            this.lastName = event.target.value
            }
    },
    computed :{
        fullName() {
            console.log('full name computed proparty is update');
            return `${this.firstName} ${this.lastName}`
        }
    },
    watch:{
        age(newVal,oldVal){
            setTimeout(() => {
                this.age = 20
            },3000)
        }
    }
 
}).mount('#app') 