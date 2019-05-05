<template>
  <div class="employee" :class="{'is-node': isNode}">
    <EmployeeCard
      @toggleEmployees="toggleEmployees()"
      :showEmployees="showEmployees"
      :employeeInfo="employee.info"
    />
    <EmployeeCarouselSlot
      :isCarousel="!!employee.employees && !!employee.employees.length"
      :slotName="{id}"
      v-if="employee.employees.length && showEmployees"
    >
      <ad-employee
        :isNode="true"
        v-for="employee in employee.employees"
        :key="employee.id"
        :employee="employee"
        :id="employee.id"
      />
    </EmployeeCarouselSlot>
  </div>
</template>

<script>
import EmployeeCard from "./EmployeeCard.vue";
import EmployeeCarouselSlot from "./EmployeeCarouselSlot.vue";

export default {
  name: "ad-employee",
  components: {
    EmployeeCarouselSlot,
    EmployeeCard
  },
  props: {
    isNode: {
      type: Boolean,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    employee: {
      type: Object,
      required: true,
      default() {
        return {
          employees: [],
          info: {}
        };
      }
    }
  },
  data() {
    return {
      showEmployees: false
    };
  },
  methods: {
    toggleEmployees() {
      if (this.employee.employees.length) {
        this.showEmployees = !this.showEmployees;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.employee {
  display: flex;
  flex-direction: column;
  align-items: center;

  &.is-node {
    padding-top: var(--node-highlight-height);
    padding-bottom: var(--node-highlight-height);
    position: relative;
    flex: 1;

    &::before {
      content: "";
      width: var(--node-border-height);
      height: var(--node-highlight-height);
      background: var(--gray-color-light);
      position: absolute;
      top: 0;
      z-index: -1;
      left: 50%;
      transform: translateX(-50%);
    }

    &::after {
      content: "";
      width: 100%;
      top: 0;
      height: var(--node-border-height);
      background: var(--gray-color-light);
      position: absolute;
    }

    &:first-of-type::after {
      width: 50%;
      left: 50%;
    }
    &:last-of-type::after {
      width: 50%;
      right: 50%;
    }
    &:only-of-type::after {
      width: 0;
    }
  }
}
</style>

