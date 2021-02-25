<template>
  <div>
    <h1>List</h1>
    <div class="row">
      <div class="input-field col s3">
        <select ref="select" class="col s3" v-model="filter">
          <option value="" disabled selected>Choose option</option>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <label>Filter status</label>
      </div>
    </div>
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
          v-for="(task,idx) of displayTasks"
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

    <!-- <div class="row" v-else>
      <div class="col s12 m5">
        <div class="card-panel teal">
          <span class="white-text">No tasks</span>
        </div>
      </div>
    </div> -->
    <h4 v-else>No tasks</h4>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      filter: null,
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    displayTasks() {
      return this.tasks.filter(t => {
        if (!this.filter || this.filter === "all") {
          return true
        }
        return t.status === this.filter
      })
    },
  },
  mounted() {
    M.FormSelect.init(this.$refs.select)
  },
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