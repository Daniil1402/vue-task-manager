import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, {id, email, description}) {
      const tasks = state.tasks.concat()

      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]

      tasks[idx] = {...task, email, description}
      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id) {
      const idx = state.tasks.findIndex(t => t.id === id)
      state.tasks[idx].status = 'completed'
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(t => t.id != id)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task)
    },
    updateTask({commit}, task) {
      commit('updateTask', task)
    },
    completeTask({commit}, id) {
      commit('completeTask', id)
    },
    deleteTask({commit}, id) {
      commit('deleteTask', id)
    },
  },
  getters: {
    // tasks: function (state) {
    //   return state.tasks
    // },
    tasks: s => s.tasks,
    // taskById: function (state) {
    //   return function (id) {
    //     return state.tasks.find(function (task) {
    //       return task.id === id
    //     })
    //   }
    // }
    taskById: s => id => s.tasks.find(t => t.id === id)
  },
})
