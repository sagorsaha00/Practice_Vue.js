 <template>
  -->
<p>hey</p>
 <hello :age="age"/>
 <user :age="age" @age-change="updateAge"/>
 </template>

 <script>
import user from './components/user.vue'
 import hello from './components/hello.vue'
export default {
  name:'App',
  components:{
    hello,
    user
  },
  data() {
     return{
      age : 20
     }
  },
  
  methods:{
    updateAge(num) {
      this.age += num
    }
  }
 
}

</script>