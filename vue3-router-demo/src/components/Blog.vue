<template>
  <h1>Blog Page</h1>
  <p>{{ this.$route.params.id }}</p>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>
