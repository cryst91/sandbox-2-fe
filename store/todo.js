export const state = () => {
  return {
      todos: [
          {
              name: "Belajar membuat REST API",
              isDone: false,
          },
          {
              name:"Belajar membuat FRONT END NUXT",
              isDone: true,
          }
      ]
  };
};

export const actions = {
  SET_DONE({ commit }, todo) {
    commit("SET_DONE_MUTATION", todo);
  },
  SET_NOT_DONE({ commit }, index) {
    commit("SET_NOT_DONE_MUTATION", index);
  },

  ADD_NOT_DONE({ commit }, name) {
    commit("ADD_NOT_DONE_MUTATION", name);
  },
  DELETE_TASK({ commit }, index) {
    commit("DELETE_TASK_MUTATION", index);
  }

};

export const mutations = {
  SET_DONE_MUTATION(state, index) {
    state.todos[index].isDone = true;
  },
  SET_NOT_DONE_MUTATION(state, index) {
    state.todos[index].isDone = false;
  },

  ADD_NOT_DONE_MUTATION(state, name) {
    state.todos.push({
      name: name,
      isDone: false,
    })
  },
  DELETE_TASK_MUTATION(state, index) {
    state.todos.splice(index,1)
  }
};
