const app = Vue.createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  computed: {
    // fullName() {
    //   return `${this.firstName} ${this.lastName}`;
    // },
    // fullName: {
    //   get() {},
    //   set() {},
    // },
  },
  methods: {},
});

app.mount("#app");
