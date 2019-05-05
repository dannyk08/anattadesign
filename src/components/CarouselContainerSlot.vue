<template slot="containerName">
  <div>
    <div class="carousel-container-slot">
      <slot>
        <EmployeeCardCarouselSlot
          :slotName="employee.id"
          :isCarousel="!!employee.employees && employee.employees.length > 3"
        >
          <EmployeeCard
            :key="childEmployee.id"
            v-for="(childEmployee, index) in employee.employees"
            :employeeInfo="childEmployee.info"
            :showEmployees="false"
            @toggleEmployees="toggleEmployees(index)"
          />
        </EmployeeCardCarouselSlot>
      </slot>
    </div>
    <ad-carousel-container-slot
      v-if="currentIndex !== null && containsEmployees(employee.employees[currentIndex])"
      :containerName="employee.employees[currentIndex].id"
      :employee="employee.employees[currentIndex]"
    />
  </div>
</template>

<script>
import EmployeeCardCarouselSlot from "./EmployeeCardCarouselSlot.vue";
import EmployeeCard from "./EmployeeCard.vue";

export default {
  name: "ad-carousel-container-slot",
  props: {
    containerName: {
      type: Number,
      required: true,
      default() {
        return 0;
      }
    },
    employee: {
      type: Object,
      required: true,
      default() {
        return {
          employees: [],
          id: null
        };
      }
    }
  },
  data() {
    return {
      currentIndex: null
    };
  },
  components: {
    EmployeeCardCarouselSlot,
    EmployeeCard
  },
  methods: {
    toggleEmployees(index) {
      this.currentIndex = index;
    },
    containsEmployees(employee = { employees: [] }) {
      return employee.employees && employee.employees.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-container-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

