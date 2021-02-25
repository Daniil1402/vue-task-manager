<template>
  <div class="row">
    <div class="col s6 offset-s3" v-if="task">
      <h1>{{task.title}}</h1>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input id="email" type="email" class="validate" required v-model="email">
          <label for="email">Email</label>
          <span class="helper-text" data-error="Wrong" data-success="Right"></span>
        </div>
        <div class="input-field">
          <textarea id="description" class="materialize-textarea" required v-model="description"></textarea>
          <label for="description">Description</label>
        </div>
        <div v-if="task.status !== 'completed'">
          <button class="btn-large waves-effect waves-light" type="submit" style="margin-right: 2rem">SAVE
          <!-- <i class="small material-icons">add_circle_outline</i> -->
          </button>
          <button class="btn-large waves-effect waves-light red darken-1" type="button" @click="completeTask">COMPLETE TASK
            <!-- <i class="small material-icons">add_circle_outline</i> -->
          </button>
        </div>
        <div v-else>
          <button class="btn-large waves-effect waves-light red darken-1" type="button" @click="deleteTask">DELETE TASK
            <!-- <i class="small material-icons">add_circle_outline</i> -->
          </button>
        </div>
      </form>
    </div>
    <h4 v-else>Task not found</h4>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id)
    }
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
      
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        email: this.email,
        description: this.description
      })
      this.$router.push('/list')
    },
    completeTask() {
      this.$store.dispatch('completeTask', this.task.id)
      this.$router.push('/list')
    },
    deleteTask() {
      this.$store.dispatch('deleteTask', this.task.id)
      this.$router.push('/list')
    },
  },
  mounted() {
    this.email = this.task.email;
    this.description = this.task.description;
    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  },
}
</script>

<style>

</style>