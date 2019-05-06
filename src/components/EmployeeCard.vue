<template>
  <section class="employee-card">
    <div
      class="employee-card__info"
      :class="{'active': showEmployees ,'is-node': isNode}"
      @click="toggleEmployees()"
    >
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
      this.$emit("toggleEmployees");
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
