<template>
  <div>
    <h2>Yo soy la LandingPage</h2>
    <h3>Uno de mis componentes es el Formulario de contacto</h3>
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactForm from "../components/ContactForm.vue";

export default defineComponent({
  name: "LandingPage",
  components: {
    ContactForm,
  },
});
</script>

<style scoped lang="Scss">
</style>
