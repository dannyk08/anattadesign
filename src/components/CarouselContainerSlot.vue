<template slot="nodeId">
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
            :showEmployees="!!mapEmployeeToggle[currentEmployeeIndex] && index === currentEmployeeIndex"
            :isNode="isNode"
            @toggleEmployees="toggleEmployees(index)"
          />
        </EmployeeCardCarouselSlot>
      </slot>
    </div>
    <ad-carousel-container-slot
      v-if="employeeContainsEmployees && !!mapEmployeeToggle[currentEmployeeIndex]"
      :nodeId="currentEmployee.id"
      :employees="currentEmployee.employees"
      :isNode="true"
    />
  </div>
</template>

<script>
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
      currentEmployeeIndex: null,
      mapEmployeeToggle: {}
    };
  },
  components: {
    EmployeeCardCarouselSlot,
    EmployeeCard
  },
  methods: {
    toggleEmployees(index) {
      this.currentEmployeeIndex = index;
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

