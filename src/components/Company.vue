<template>
  <main class="company">
    <h1 class="company__name">Client Company</h1>
    <CarouselContainerSlot :employee="company" :containerName="company.id">
      <!-- <EmployeeCardCarouselSlot
        :isCarousel="!!company.employees && company.employees.length > 3"
        :slotName="carouselSlotName"
      >
        <EmployeeCard
          :key="employee.id"
          v-for="(employee, index) in company.employees"
          :employeeInfo="employee.info"
          :showEmployees="false"
          @toggleEmployees="toggleEmployees(index)"
        />
      </EmployeeCardCarouselSlot>-->
    </CarouselContainerSlot>
  </main>
</template>

<script>
import EmployeeCardCarouselSlot from "./EmployeeCardCarouselSlot.vue";
import EmployeeCards from "./EmployeeCards.vue";
import EmployeeCard from "./EmployeeCard.vue";
import CarouselContainerSlot from "./CarouselContainerSlot.vue";

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
    EmployeeCardCarouselSlot,
    EmployeeCards,
    EmployeeCard,
    CarouselContainerSlot
  },
  data() {
    return {
      showEmployees: false,
      clickedEmployee: null
    };
  },
  methods: {
    containsEmployees(employee = { employees: [] }) {
      return employee.employees && !!employee.employees.length;
    },
    toggleEmployees(id) {
      // if (this.employee.employees.length) {
      // console.log({ event, clickedEmployee: this.clickedEmployee });
      this.clickedEmployee = id;
      this.showEmployees = !this.showEmployees;
      // }
    }
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
.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

