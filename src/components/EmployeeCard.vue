<template>
  <section class="employee-card">
    <div class="employee-card__info" :class="{'active': showEmployees}" @click="toggleEmployees()">
      <header class="employee-card__info-header">
        <h5>{{employeeInfo.department}}</h5>
      </header>
      <main class="employee-card__info-main">
        <h5 class="employee-card__info-main--name">{{employeeInfo.name}}</h5>
        <p class="employee-card__info-main--title">{{employeeInfo.title}}</p>
      </main>
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
    employeeInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleEmployees() {
      this.$emit("toggleEmployees");
    }
  }
};
</script>

<style lang="scss" scoped>
.employee-card {
  display: flex;
  justify-content: center;

  &__info {
    min-width: 17.5rem;
    max-width: 17.5rem;
    min-height: var(--node-card-info-min-height);
    max-height: var(--node-card-info-min-height);
    border: var(--node-border-height) solid var(--gray-color-lighter);
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 1rem;
    margin-right: 1rem;
    box-shadow: 0rem 1rem 1rem -1.5rem var(--gray-color-lighter),
      0rem 0.25rem 1rem -0.5rem var(--gray-color);
    z-index: 1;

    &.active::after {
      content: "";
      width: var(--node-border-height);
      height: var(--node-highlight-height);
      background: var(--gray-color-light);
      position: absolute;
      bottom: calc(
        -1 * calc(var(--node-highlight-height) -
              calc(-1 * var(--node-border-height)))
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

    &-main,
    &-header {
      text-align: center;
      border-bottom: 1px solid var(--gray-color-lighter);
    }

    &-main {
      min-height: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &-main--title {
      margin-top: -0.5rem;
      color: var(--gray-color-light);
    }
  }
}
</style>
