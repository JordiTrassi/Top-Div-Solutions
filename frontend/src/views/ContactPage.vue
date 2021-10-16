<template>
  <div>
    <h2>Yo soy la Pagina de CONTACTO</h2>
    <h3>Tendré un componente</h3>
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactForm from "../components/ContactForm.vue";

export default defineComponent({
  name: "ContactPage",
  components: {
    ContactForm,
  },
});
</script>

<style scoped lang="Scss">
</style>
