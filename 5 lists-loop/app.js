Vue.createApp({
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
}).mount("#app");
