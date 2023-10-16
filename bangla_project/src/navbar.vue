<template>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form @submit.prevent="search" class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

    </template>

    <script>
export default {
  name:'navbar',
  data() {
    return {
      keyword:''
    }
  },
  methods:{
    search() {
      this.$emit('search', this.keyword)
    }
  }

}
</script>
