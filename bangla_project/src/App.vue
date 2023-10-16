<template> 
<div id="app">
 
<navbar @search="search"> </navbar>
<div class="row">
   <div class="col-sm-9">
 <invantory @newItemadded="addCartItem" :items="items"/>
   <div class="col-sm-3">

 <cart @itemRemoved="removeItem" :items="cart"/>
    
  
 </div>
</div>
</div>
</div>

</template>

<script>

import navbar from './navbar.vue'
import cart from './cart.vue'
import invantory from './invantory.vue'
import data from './data'
export default{
  name:'App',
  components:{
    navbar,
    cart,
    invantory
  },
  data() {
    return{
      items: [],
      cart:[{
        id:1,
        title:'test',
        pricy:10.30,
        photo:'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
      }],
    }
  },
  mounted(){
    this.items = data
  },
  methods: {
    search(keyword) {
      this.items = data.filter(item => {
       return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
       })
    },

    addCartItem(item) {
      this.cart.push(item)
    },
    removeItem(index) {
      this.cart.splice(index,1)
    }
  }
   
}

</script>
 
<style>
 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- <style src="bootstrap/dist/css/bootstrap.css"></style> --> 