<template>
  <input
   
                type="email"
                class="form-control"
                placeholder="E-mail"
                :value="modalValue"
                @input="update($event)"
                :class="{
                  'is-valid':
                  modalValue.length >= 4 && modalValue.length > 0,
                  'is-invalid':
                  modalValue.length < 4 && modalValue.length > 0,
                }"
              />
    </template>

    <script>
// import { toValue } from 'vue';

export default {
    name:'Emailinput',
   props:['modalValue'],
   methods:{
    update($event) {
        this.$emit('update:modalValue', $event.target.value)
    }
   }
}

</script>