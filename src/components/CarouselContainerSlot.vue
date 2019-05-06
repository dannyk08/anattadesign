<template slot="nodeId">
  <div>
    <div class="carousel-container-slot">
      <slot>
        <EmployeeCardCarouselSlot
          :slotName="cardCarouselName"
          :isCarousel="!!employees && employees.length > 3"
          :cardsTotal="employees && employees.length"
        >
          <EmployeeCard
            :key="childEmployee.id"
            v-for="(childEmployee, index) in employees"
            :employeeInfo="childEmployee.info"
            :showEmployees="!!mapEmployeeToggle[selectedEmployeeIndex] && index === selectedEmployeeIndex"
            :isNode="isNode"
            @toggleEmployees="toggleEmployees(index)"
          />
        </EmployeeCardCarouselSlot>
      </slot>
    </div>
    <ad-carousel-container-slot
      v-if="employeeContainsEmployees && !!mapEmployeeToggle[selectedEmployeeIndex]"
      :nodeId="selectedEmployee.id"
      :employees="selectedEmployee.employees"
      :isNode="true"
    />
  </div>
</template>

<script>
import uniqid from "uniqid";

import EmployeeCardCarouselSlot from "./EmployeeCardCarouselSlot.vue";
import EmployeeCard from "./EmployeeCard.vue";

export default {
  name: "ad-carousel-container-slot",
  props: {
    employees: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    nodeId: {
      type: Number,
      default() {
        return Date.now();
      }
    },
    isNode: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      selectedEmployeeIndex: null,
      mapEmployeeToggle: {},
      cardCarouselName: uniqid()
    };
  },
  components: {
    EmployeeCardCarouselSlot,
    EmployeeCard
  },
  methods: {
    toggleEmployees(index) {
      this.selectedEmployeeIndex = index;
      let nodeWithEmployees =
        this.employees[index] && this.employees[index].employees.length;
      if (nodeWithEmployees) {
        if (!(index in this.mapEmployeeToggle)) {
          this.$set(this.mapEmployeeToggle, index, true);
        } else {
          this.$set(
            this.mapEmployeeToggle,
            index,
            !this.mapEmployeeToggle[index]
          );
        }
      }
    }
  },
  computed: {
    selectedEmployee() {
      if (this.selectedEmployeeIndex === null) {
        return {
          employees: [],
          id: null
        };
      }
      return this.employees[this.selectedEmployeeIndex];
    },
    employeeContainsEmployees() {
      if (this.selectedEmployeeIndex === null) return false;
      return (
        this.selectedEmployee.employees &&
        !!this.selectedEmployee.employees.length
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

