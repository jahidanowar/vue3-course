const app = Vue.createApp({
  data() {
    return {
      hobbies: ["Coding", "Reading", "Running", "Fishing", "Hiking"],
      selectedHobbies: [],
    };
  },
  computed: {},
  methods: {
    addHobby(hobby) {
      if (this.selectedHobbies.indexOf(hobby) !== -1) {
        return this.removeHobby(hobby);
      }
      this.selectedHobbies.push(hobby);
    },
    removeHobby(hobby) {
      const index = this.selectedHobbies.indexOf(hobby);
      if (index > -1) {
        this.selectedHobbies.splice(index, 1);
      }
    },
  },
});

app.mount("#app");
