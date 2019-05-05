<template>
  <main class="company">
    <h1 class="company__name">Client Company</h1>
    <div class="carousel-container">
      <EmployeeCardCarouselSlot
        :isCarousel="!!company.employees && company.employees.length > 3"
        :slotName="carouselSlotName"
      >
        <!-- <Employee
      :isNode="false"
      v-for="employee in company.employees"
      :key="employee.id"
      :employee="employee"
      :id="employee.id"
        />-->
        <!-- <EmployeeCards :slotName="carouselSlotName"/> -->
        <EmployeeCard
          :key="employee.id"
          v-for="(employee, index) in company.employees"
          :employeeInfo="employee.info"
          :showEmployees="false"
          @toggleEmployees="toggleEmployees(index)"
        />
      </EmployeeCardCarouselSlot>
    </div>

    <div
      class="carousel-container"
      v-if="clickedEmployee !== null && containsEmployees(company.employees[clickedEmployee])"
    >
      <EmployeeCardCarouselSlot
        :isCarousel="!!company.employees[clickedEmployee].employees && company.employees[clickedEmployee].employees.length > 3"
        :slotName="company.employees[clickedEmployee].id"
      >
        <EmployeeCard
          :key="childEmployee.id"
          v-for="childEmployee in company.employees[clickedEmployee].employees"
          :employeeInfo="childEmployee.info"
          :showEmployees="false"
          @toggleEmployees="toggleEmployees(childEmployee.id)"
        />
      </EmployeeCardCarouselSlot>
    </div>
  </main>
</template>

<script>
import EmployeeCardCarouselSlot from "./EmployeeCardCarouselSlot.vue";
import EmployeeCards from "./EmployeeCards.vue";
import EmployeeCard from "./EmployeeCard.vue";

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
    EmployeeCard
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

