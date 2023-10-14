 <template>
 
     <Header />
 
 

  <router-view > 
  <!-- <transition name="fade" mode="out-in">
         <component :is="Component"> </component>
  </transition> -->

 </router-view>
 
 <AppPlayer/>
   
  
  
 <auth/>
  
 </template>

 <script>
import Header from "./components/Header.vue"
import About from "./views/About.vue"
import Home from "./views/Home.vue"
import Auth from "./components/Auth.vue"
import { mapWritableState } from "pinia";
import useUserStore from "./stores/user";
import {auth} from "./includes/firebase";
import AppPlayer from './components/player.vue'
export default {
  name:'App',
  components:{
    Header,
    Auth,
    Home,
    About,
    AppPlayer
  },
  computed:{
    ...mapWritableState(useUserStore,["userLoggedIn"])
  },
  created() {
     if(auth.currentUser) {
      this.userLoggedIn = true;
     }
  }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active{
  transition: all .5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
}
</style>