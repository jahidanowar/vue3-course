const app = Vue.createApp({
  data() {
    return {
      emailAddress: "",
    };
  },
  methods: {},
  watch: {
    emailAddress(val, oldVal) {
      if (val == "jahid") {
        console.log("This is the Admin");
      }
    },
  },
});

app.mount("#app");
