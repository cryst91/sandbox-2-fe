<template>
    <div>
        <div class="row">
            <div class="col-md-4 offset-md-4">
                To Do List:
            </div>
        </div>
        <div class="row" v-for="(todo, index) in listTodo">
            <div v-if="!todo.isDone" class="col-md-4 offset-md-4">
                <input type="checkbox"
                    :checked=false
                    @change="checkDone(index)">
                {{todo.name}}
                <input type="button" value="X" @click="deleteTask(index)"></button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 offset-md-4">
                Done:
            </div>
        </div>
        <div class="row" v-for="(todo, index) in listTodo">
            <div v-if="todo.isDone" class="col-md-4 offset-md-4">
              <input type="checkbox"
                    :checked=true
                    @change="checkNotDone(index)">
                {{todo.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data() {
    return {
    //     todos: [
    //         {
    //             name: "Belajar membuat REST API",
    //             isDone: false,
    //         },
    //         {
    //             name:"Belajar membuat FRONT END NUXT",
    //             isDone: true,
    //         }
    //     ]
    };
  },
  computed: {
      listTodo() {
          return this.$store.state.todo.todos;
      },
  },
  created() {
  },
  methods: {
      checkDone(index) {
      this.$store.dispatch("todo/SET_DONE", index);
      },
      checkNotDone(index) {
      this.$store.dispatch("todo/SET_NOT_DONE", index);
      },
      deleteTask(index) {
        console.log("test");
      this.$store.dispatch("todo/DELETE_TASK", index);


      }
  },
}
</script>

