<template>
    <button type="button" @click="onClickAge">update Age</button>
     <p>He is {{ age }} Years Old</p>   


     <p>{{ ageDoubled  }}</p>
    
</template>
<script>
export default{
    name:"user",
    props:{
        age: {
            type: Number,
            // required:true,
            // default:20
            validator(value) {
               return value < 130
            }
        }
    },
    computed:{
      ageDoubled() {
        return this.age * 2
      }
    },
    methods:{
        onClickAge() {
            this.$emit('age-change', 3)
        }
    }
}

</script>