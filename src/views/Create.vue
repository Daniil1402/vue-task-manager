<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create new task</h1>
      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input 
            id="title" 
            type="text" 
            class="validate" 
            data-length="20" 
            required
            v-model="title"
            maxlength="20"
          >
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
          <span class="character-counter" style="float: right; font-size: 12px;">{{title.length}}/20</span>
        </div>
        <div class="input-field">
          <input id="email" type="email" class="validate" required v-model="email">
          <label for="email">Email</label>
          <span class="helper-text" data-error="Wrong" data-success="Right"></span>
        </div>
        <div class="input-field">
          <textarea id="description" class="materialize-textarea" required v-model="description"></textarea>
          <label for="description">Textarea</label>
        </div>
        <button class="btn-large waves-effect waves-light" type="submit" name="action">CREATE TASK
          <!-- <i class="small material-icons">add_circle_outline</i> -->
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Create',
  components: {
  },
  data() {
    return {
      title: "",
      email: "",
      description: "",
    }
  },
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        email: this.email,
        description: this.description,
        id: Date.now(),
        status: "active",
      }
      console.log(task)
    },
  },
}
</script>
