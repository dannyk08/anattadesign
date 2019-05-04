<template>
  <Company :company="company"/>
</template>

<script>
import Company from "./components/Company.vue";
import companyEmployees from "./companyEmployees";

export default {
  name: "anatta-design-app",
  components: {
    Company
  },
  data() {
    return {
      company: companyEmployees
    };
  }
};
</script>

<style>
.anatta-design-app {
  text-align: center;
  margin-top: 60px;
}
</style>
