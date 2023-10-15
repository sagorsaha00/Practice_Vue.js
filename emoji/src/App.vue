<template>
  <div id="app" class=" w-75 row d-flex justify-content-center">
    <div class="col-md-5 mt-3">
      <div class="card">
        <div class="card-header">Emoji Selector</div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="form-group">
           <emojiinput v-model="emoji" :Option="{position:'bottom', autoHide: false}" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emojiinput from '../src/Emojiinput.vue'
export default {
  name: "App",
  components:{
    emojiinput
  },
  data() {
    return {
      emoji: "",
    };
  },
  methods: {
    submit() {
      console.log("Emoji: ", this.emoji);
    },
  },
};
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
