<template>
  <main class="company">
    <h1 class="company__name">Client Company</h1>
    <EmployeeCarouselSlot
      :isCarousel="!!company.employees && !!company.employees.length"
      :slotName="carouselSlotName"
    >
      <Employee
        :isNode="false"
        v-for="employee in company.employees"
        :key="employee.id"
        :employee="employee"
        :id="employee.id"
      />
    </EmployeeCarouselSlot>
  </main>
</template>

<script>
import Employee from "./Employee.vue";
import EmployeeCarouselSlot from "./EmployeeCarouselSlot.vue";

export default {
  name: "ad-company",
  props: {
    company: {
      type: Object,
      required: true
    },
    carouselSlotName: {
      type: Object,
      default() {
        return {
          name: "carouselSlotName"
        };
      }
    }
  },
  components: {
    EmployeeCarouselSlot,
    Employee
  }
};
</script>

<style lang="scss" scoped>
.company {
  display: flex;
  flex-direction: column;

  &__name {
    text-align: center;
  }
}
</style>

