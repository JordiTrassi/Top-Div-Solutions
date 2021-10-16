<template>
  <div>
    <h2>Yo soy la Pagina del Blog</h2>
    <h3>Tendré un componente</h3>
    <BlogCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlogCard from "../components/BlogCard.vue";

export default defineComponent({
  name: "BlogPage",
  components: {
    BlogCard,
  },
});
</script>

<style scoped lang="Scss">
</style>
