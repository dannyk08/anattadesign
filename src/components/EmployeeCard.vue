<template>
  <section class="employee__info" :class="{'active': showEmployees}" @click="toggleEmployees()">
    <header class="employee__info-header">
      <h4>{{employeeInfo.department}}</h4>
    </header>
    <main class="employee__info-main">
      <h4 class="employee__info-main--name">{{employeeInfo.name}}</h4>
      <p class="employee__info-main--title">{{employeeInfo.title}}</p>
    </main>
  </section>
</template>


<script>
export default {
  name: "ad-employee-card",
  props: {
    showEmployees: {
      type: Boolean,
      required: true
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
// TODO: should make these global css vars
$node-highlight-color: gray;
$node-highlight-color-lighter: lighten(gray, 10%);
$node-highlight-height: 2rem;
$node-border-height: 1px;
$node-header-background-color: #008f88;

.employee__info {
  min-width: 15rem;
  min-height: 15rem;
  border: $node-border-height solid $node-highlight-color;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 1rem;
  margin-right: 1rem;
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
    background: $node-header-background-color;
    color: white;
    border-bottom-color: $node-header-background-color;
  }

  &-main,
  &-header {
    text-align: center;
    border-bottom: 1px solid $node-highlight-color;
  }

  &-main {
    min-height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &-main--title {
    margin-top: -1rem;
    color: $node-highlight-color-lighter;
  }
}
</style>
