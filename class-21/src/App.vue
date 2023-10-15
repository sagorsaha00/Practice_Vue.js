<template>
  <div class="flex items-center justify-center gap-x-4">
    <button class="px-4 py-2 text-white bg-blue-600 focus:outline-none" @click="increment">
      Increment
    </button>
    {{ number }}
    {{ double }}
    <button class="px-4 py-2 text-white bg-red-600 focus:outline-none" @click="decrement">
      Decrement
    </button>

    <p>{{ name }}</p>


    <p>
      <input type="text" v-model="pharse">

    </p>
    <p>{{ reversedphrase }}</p>
    <AppAlert :user="user"/>
  </div>
</template>
<script>
import {
   reactive, toRefs,
} from 'vue';
import AppAlert from "../src/components/Alert.vue" 
import { useNumber } from '../src/hooks/number'
import { usePhrase } from '../src/hooks/phrase'
export default {
  name:'App',
  mixins:[mixin],
  data() {
    return {
      offset:0
    }
  },
  components:{
    AppAlert,
    useNumber,
    usePhrase
  },
  setup() {
  


    const user = reactive({
      name: 'Sagor',
      age: 20
    })
    setTimeout(() => {
      user.name = "Mr.jack"
    }, 3000)


    const { number, increment, double } = useNumber()

    const { pharse, reversedphrase,  } = usePhrase()

    return { number,pharse, reversedphrase, ...toRefs(user), increment, decrement,double,user };
  },
};
</script>