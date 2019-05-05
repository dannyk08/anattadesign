<template slot="containerName">
  <div>
    <div class="carousel-container-slot">
      <slot>
        <EmployeeCardCarouselSlot
          :slotName="currentEmployee.id"
          :isCarousel="!!employees && employees.length > 3"
        >
          <EmployeeCard
            :key="childEmployee.id"
            v-for="(childEmployee, index) in employees"
            :employeeInfo="childEmployee.info"
            :showEmployees="false"
            @toggleEmployees="toggleEmployees(index)"
          />
        </EmployeeCardCarouselSlot>
      </slot>
    </div>
    <ad-carousel-container-slot
      v-if="employeeContainsEmployees"
      :containerName="currentEmployee.id"
      :employees="currentEmployee.employees"
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
      default() {
        return 0;
      }
    },
    employees: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentEmployeeIndex: null
    };
  },
  components: {
    EmployeeCardCarouselSlot,
    EmployeeCard
  },
  methods: {
    toggleEmployees(index) {
      this.currentEmployeeIndex = index;
    }
  },
  computed: {
    currentEmployee() {
      if (this.currentEmployeeIndex === null) {
        return {
          employees: [],
          id: null
        };
      }
      return this.employees[this.currentEmployeeIndex];
    },
    employeeContainsEmployees() {
      if (this.currentEmployeeIndex === null) return false;
      return (
        this.currentEmployee.employees &&
        !!this.currentEmployee.employees.length
      );
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

