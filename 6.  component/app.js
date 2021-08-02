const app = Vue.createApp({
  data() {
    return {
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
    completeTodo(todo) {
      todo.done = true;
    },
    undoTodo(todo) {
      todo.done = false;
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

    <button
    v-if="!todo.done"
      class="btn btn-success"
      @click="completeTodo(todo)"
    >
      Done
    </button>
    <button v-else class="btn btn-danger" @click="undoTodo(todo)">
      Not Done
    </button>
  </div>
  `,
});

app.mount("#app");
