<template>
  <section class="employee-card">
    <div
      class="employee-card__info"
      :class="{'active': showEmployees ,'is-node': isNode}"
      @click="toggleEmployees()"
    >
      <header class="employee-card__info-header">
        <h5>{{employee.info.department}}</h5>
      </header>
      <main class="employee-card__info-main">
        <h5 class="employee-card__info-main--name">{{employee.info.name}}</h5>
        <p class="employee-card__info-main--title">{{employee.info.title}}</p>
      </main>
      <footer class="employee-card__info-footer">
        <div class="employee-card__info-footer-icon">
          <span>
            <font-awesome-icon icon="network-wired"/>
          </span>
          <span>{{getTotalEmployees}}</span>
        </div>
        <div class="employee-card__info-footer-icon">
          <span>
            <font-awesome-icon icon="user"/>
          </span>
          <span>{{totalReporting}}</span>
        </div>
        <div v-if="getTotalEmployees" class="employee-card__info-footer-icon">
          <span>
            <font-awesome-icon icon="plus-circle"/>
          </span>
        </div>
      </footer>
    </div>
  </section>
</template>


<script>
export default {
  name: "ad-employee-card",
  props: {
    showEmployees: {
      type: Boolean,
      required: true,
      default() {
        return false;
      }
    },
    employee: {
      type: Object,
      required: true,
      default() {
        return {
          info: {},
          employees: []
        };
      }
    },
    isNode: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  methods: {
    toggleEmployees() {
      if (this.getTotalEmployees) {
        this.$emit("toggleEmployees");
      }
    }
  },
  computed: {
    getTotalEmployees() {
      return this.employee.employees.length;
    },
    totalReporting() {
      function totalReportingEmployeesReducer(prev, next) {
        return prev + totalReport(next);
      }

      function totalReport(employee) {
        return employee.employees.reduce(
          totalReportingEmployeesReducer,
          employee.employees.length
        );
      }

      return totalReport(this.employee);
    }
  }
};
</script>

<style lang="scss" scoped>
$card-sibling-margin: 1rem;

.employee-card {
  display: flex;
  justify-content: center;
  padding-top: var(--node-highlight-height);
  padding-bottom: calc(var(--node-highlight-height) * 2);
  min-height: calc(
    var(--node-card-info-min-height) + calc(var(--node-highlight-height) * 2)
  );
  position: relative;
  z-index: 0;

  &::after,
  &::before {
    content: "";
    width: calc(var(--node-card-min-width) / 2 + #{$card-sibling-margin});
    top: 0;
    height: var(--node-border-height);
    background: var(--gray-color-light);
    position: absolute;
    z-index: 1;
  }

  &::before {
    right: calc(var(--node-card-min-width) / 2 + #{$card-sibling-margin});
  }
  &:after {
    left: calc(var(--node-card-min-width) / 2 + #{$card-sibling-margin});
  }

  &:first-of-type::before,
  &:last-of-type::after,
  &:only-of-type::before,
  &:only-of-type::after {
    width: 0;
  }

  &__info {
    min-width: var(--node-card-min-width);
    max-width: var(--node-card-min-width);
    min-height: var(--node-card-info-min-height);
    max-height: var(--node-card-info-min-height);
    border: var(--node-border-height) solid var(--gray-color-lighter);
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: $card-sibling-margin;
    margin-right: $card-sibling-margin;
    box-shadow: 0rem 1rem 1rem -1.5rem var(--gray-color-lighter),
      0rem 0.25rem 1rem -0.5rem var(--gray-color);
    z-index: 1;
    border-radius: calc(var(--node-border-height) * 2);

    &.active::after {
      content: "";
      width: var(--node-border-height);
      height: var(--node-highlight-height);
      height: calc(var(--node-highlight-height) * 2);
      background: var(--gray-color-light);
      position: absolute;
      bottom: calc(
        -2 * calc(var(--node-highlight-height) -
              calc(-1 / 2 * var(--node-border-height)))
      );
      z-index: -1;
      left: 50%;
      transform: translateX(-50%);
    }

    &.active &-header {
      background: var(--node-header-background-color);
      color: var(--white-color);
      border-bottom-color: var(--node-header-background-color);
    }

    &.is-node {
      &::before {
        content: "";
        width: var(--node-border-height);
        height: var(--node-highlight-height);
        background: var(--gray-color-light);
        position: absolute;
        top: calc(-1 * var(--node-highlight-height));
        z-index: -1;
        left: 50%;
        transform: translateX(-50%);
      }
      &:only-of-type::before {
        height: calc(var(--node-highlight-height) + var(--node-border-height));
        top: calc(
          -1 * var(--node-highlight-height) - var(--node-border-height)
        );
      }
    }

    &-main,
    &-header {
      text-align: center;
      border-bottom: 1px solid var(--gray-color-lighter);
    }

    &-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
    }

    &-main--title {
      margin-top: -0.5rem;
      color: var(--gray-color-light);
    }

    &-footer {
      min-height: 4.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-footer-icon {
      display: flex;
      flex-direction: column;
      min-width: 3rem;
      min-height: 3rem;
      justify-content: space-evenly;
      align-items: center;
    }
  }
}
</style>
