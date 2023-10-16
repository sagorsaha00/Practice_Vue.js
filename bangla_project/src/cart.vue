 
    <template>
    <ul class="list-group">
      <li class="list-group-item">
         <span class="item-name">Name</span>
         <span class="item-price float-right">Price</span>
      </li>
    </ul>
          <hr> 
          <li v-for="(item,index) in items" :key="index" class="List-group-item">
           <span class="item-name"> {{ item.title }} </span>
           <button class="btn btn-sm btn-danger" @click="removeItem(index)">-</button>
           <span class="item-price float-right">{{ item.pricy }}</span>
          </li>
          <hr>
    <ul class="list-group-item">
         <span class="item-name">Total</span>
         <span class="item-price float-right">${{ totalPrice }}</span>
 
    </ul>

    </template>

    <script>

export default {
    name:'cart',
    props:['items'],
    computed:{
        totalPrice() {
            var total = 0;
            this.items.forEach(item => {
                total += (item.pricy) 
            });
            return total
        }
    },
    methods:{
        removeItem(index){
       this.$emit('itemRemoved', index)
        }
    }
}
</script>