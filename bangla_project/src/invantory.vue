 
    <template>
    <div v-for="(item, index) in items" :key="index" class="card" style="width: 18rem;">
  <img :src="item.photo" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ item.title }}</h5>
    <p class="card-text">{{ item.pricy }} </p>
    <a @click="addToCart(item)" href="#" class="btn btn-primary"> +add</a>
  </div>
</div>

 
    </template>

    <script>
export default{
    name:'invantory',
    props:['items'],
    methods:{
        addToCart(item){
          this.$emit('newItemadded', item)
        }
    }
}
</script>