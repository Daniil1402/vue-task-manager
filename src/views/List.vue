<template>
  <div>
    <h1>List</h1>

    <hr>

    <table v-if="tasks.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Email</th>
          <th>Description</th>
          <th>Status</th>
          <th>Open</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(task,idx) of tasks"
          :key="task.id"
        >
          <td>{{idx + 1}}</td>
          <td>{{task.title}}</td>
          <td>{{task.email}}</td>
          <td class="descTd"><div class="description">{{task.description}}</div></td>
          <td>{{task.status}}</td>
          <td>
            <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">
              Open
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    
      <div class="row" v-else>
        <div class="col s12 m5">
          <div class="card-panel teal">
            <span class="white-text">No tasks</span>
          </div>
        </div>
      </div>
  </div>
  
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks
    }
  }
}
</script>

<style lang="sass" scoped>
  .description
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden

  .descTd
    max-width: 400px
</style>