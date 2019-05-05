<template>
  <section class="employee__info" :class="{'active': showEmployees}" @click="toggleEmployees()">
    <header class="employee__info-header">
      <h4>{{employeeInfo.name}}</h4>
    </header>
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
$node-highlight-height: 2rem;
$node-border-height: 1px;

.employee__info {
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
</style>
