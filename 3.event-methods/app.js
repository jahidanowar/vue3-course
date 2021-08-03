Vue.createApp({
  data() {
    return {
      counter: 1,
      name: "Bengal Coder",
    };
  },
  methods: {
    incrementNumber(number) {
      console.log(number);
      this.counter++;
    },
    logtext(e) {
      console.log(e);
    },
  },
}).mount("#app");
