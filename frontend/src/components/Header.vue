<template>
  <div>
    <h1>
      YO SOY EL HEADER y tengo un h1 que puedo poner en display: none para que
      no se vea pero que esté siempre presente y será el único en toda la página
      web.
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped lang="scss">
</style>
