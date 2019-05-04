<template>
  <main>
    <h1>Company</h1>
    <Employee
      :isNode="false"
      v-for="employee in company.employees"
      :key="employee.id"
      :employee="employee"
    />
  </main>
</template>

<script>
import Employee from "./Employee.vue";

export default {
  name: "ad-company",
  props: {
    company: {
      type: Object,
      required: true
    }
  },
  components: {
    Employee
  }
};
</script>

