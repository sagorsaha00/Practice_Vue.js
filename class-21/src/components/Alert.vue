<template>
 <div v-if="!flag" class="color">name change !</div>
    </template>

<script>

import { computed } from 'vue';
export default {
    name:'Alert',
    props:['user'],
    setup(props) {
        const flag = computed(() => {
             return props.user.name === 'Sagor'
        })
        return {
            flag
        }
    }
}
</script>    
<style>
.color{
    color: red;
}
</style>