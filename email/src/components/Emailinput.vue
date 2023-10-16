<template>
  <input
   
                type="email"
                class="form-control"
                placeholder="E-mail"
                :value="modelValue"
                @input="update($event)"
                :class="{
                  'is-valid':validemail(modelValue),
                  'is-invalid': !validemail(modelValue),
                   
                }"
              />
    </template>

    <script>
// import { toValue } from 'vue';
import validemail from '../valid-email'
export default {
    name:'EmailInput',
   props:['modelValue'],
   methods:{
    update($event) {
        this.$emit('update:modelValue', $event.target.value)
    },
    validemail
   }
}

</script>