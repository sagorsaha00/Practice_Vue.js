<template>
  <div id="app" class="d-flex justify-content-center" :class="hi">
    <div class=" col-md-6 mt-3">
      <div class="card">
        <div class="card-header">Newsletter</div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="mb-2">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                 :value="newsletterName"
                 @input="newsletterName = $event.target.value"
              />
            </div>
            <div class="form-group">
              <!-- <emailinput v-model="newsletterName" /> -->
              <emailinput v-model="newsletterEmail" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import emailinput from './components/Emailinput.vue'
export default {
  name: "App",
  components:{
     emailinput
  },
  data() {
    return {
      newsletterName: "",
      newsletterEmail: "",
    };
  },
  methods: {
    submit() {
      console.log("Newletter Submitted", {
        name: this.newsletterName,
        email: this.newsletterEmail,
      });
    },
  },
};
</script>

<style src="bootstrap/dist/css/bootstrap.css">
.hi{
  height: 300px;
  width:300px;
}
</style>
