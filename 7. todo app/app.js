const app = Vue.createApp({
  data() {
    return {
      newTodoText: "",
      todos: [
        { text: "Buy milk", done: true },
        { text: "Buy eggs", done: false },
        { text: "Buy vegies", done: false },
        { text: "Study Physics", done: false },
        { text: "Practice Data Structure", done: false },
      ],
    };
  },
  methods: {
    formHandler() {
      this.todos.push({
        text: this.newTodoText,
        done: false,
      });
      this.newTodoText = "";
    },
    removeTodo(todo) {
      const found = this.todos.findIndex((i) => i === todo);
      this.todos.splice(found, 1);
    },
  },
});

app.component("todo", {
  props: ["todo"],
  methods: {
    completeTodo(todo) {
      todo.done = true;
    },
    undoTodo(todo) {
      todo.done = false;
    },
    deleteTodo(todo) {
      this.$emit("deleteTodo", todo);
    },
  },
  template: `
    <div
    class="
      mt-3
      py-3
      px-4
      rounded-3
      shadow
      d-flex
      justify-content-between
      align-items-center
    "
  >
    <p class="mb-0">{{todo.text}}</p>

    <div>
      <button
      v-if="todo.done"
        class="btn btn-success"
        @click="undoTodo(todo)"
      >
        <i class="bi bi-check2-square"></i>
      </button>

      <button v-else class="btn btn-warning" @click="completeTodo(todo)">
        <i class="bi bi-arrow-left-right"></i>
      </button>

      <button class="btn btn-danger mx-2" @click="deleteTodo(todo)"><i class="bi bi-trash"></i></button>
    </div>
  </div>
  `,
});

app.mount("#app");
