<template>
<div class="row">
  <div class="col-md-4 offset-md-4">
    <h1>SANDBOX FRONTEND 2</h1>
      <input type="text" class="rounded-pill" v-model="InputText">
      <button type="button" class="btn-primary rounded" value="+" @click="addTask(InputText)">+</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Input',
  data(){
    return {
      InputText: "",
    }
  },
  computed: {

  },
  created()  {

  },
  methods: {
    addTask(taskName) {
      this.$store.dispatch("todo/ADD_NOT_DONE", taskName);
    },
  },

}
</script>
