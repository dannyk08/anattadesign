<template>
  <div class="employee" :class="{'is-node': isNode}">
    <section class="employee__info" :class="{'active': showEmployees}" @click="togggleEmployees()">
      <header class="employee__info-header">
        <h4>Employee{{employee.id}}</h4>
      </header>
    </section>
    <main v-if="employee.employees.length && showEmployees" class="employee__employees">
      <ad-employee
        :isNode="true"
        v-for="employee in employee.employees"
        :key="employee.id"
        :employee="employee"
      />
    </main>
  </div>
</template>

<script>
export default {
  name: "ad-employee",
  props: {
    isNode: {
      type: Boolean,
      required: true
    },
    employee: {
      type: Object,
      required: true,
      default() {
        return {
          employees: []
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
    togggleEmployees() {
      if (this.employee.employees.length) {
        this.showEmployees = !this.showEmployees;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$node-highlight-color: gray;
$node-highlight-height: 2rem;
$node-border-height: 1px;

.employee {
  display: flex;
  flex-direction: column;
  align-items: center;

  &.is-node {
    padding-top: $node-highlight-height;
    position: relative;
    flex: 1;

    &::before {
      content: "";
      width: $node-border-height;
      height: $node-highlight-height;
      background: $node-highlight-color;
      position: absolute;
      top: 0;
      z-index: -1;
      transform: translateX(-50%);
    }

    &::after {
      content: "";
      width: 100%;
      top: 0;
      height: 1px;
      background: $node-highlight-color;
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
  }

  &__info {
    max-width: 10rem;
    border: $node-border-height solid $node-highlight-color;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;

    &.active::after {
      content: "";
      width: $node-border-height;
      height: $node-highlight-height;
      background: $node-highlight-color;
      position: absolute;
      bottom: calc(-#{$node-highlight-height} - #{$node-border-height});
      z-index: -1;
      left: 50%;
      transform: translateX(-50%);
    }

    &.active &-header {
      background: lightgreen;
    }
  }
  &__employees {
    display: flex;
    overflow-x: auto;
    width: 100%;
    justify-content: space-around;
    margin-top: $node-highlight-height;
  }
}
</style>

