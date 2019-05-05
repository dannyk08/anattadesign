<template>
  <Company :company="company"/>
</template>

<script>
import Company from "./components/Company.vue";
import companyEmployees from "./companyEmployees";

export default {
  name: "anatta-design-app",
  components: {
    Company
  },
  data() {
    return {
      // needs to be reset
      company: companyEmployees.employees[0]
    };
  }
};
</script>

<style lang="scss" scoped>
.anatta-design-app {
  text-align: center;
  margin-top: 60px;
}
</style>

<style lang="scss">
$white: white;
$gray: gray;
$green: #008f88;

$variables-map: (
  white-color: $white,
  gray-color: $gray,
  gray-color-light: lighten($gray, 10%),
  gray-color-lighter: lighten($gray, 25%),
  green-color: $green,
  green-color-light: lighten($green, 10%),
  green-color-lighter: lighten($green, 25%),
  node-highlight-height: 2rem,
  node-border-height: 1px,
  node-header-background-color: $green,
  node-card-info-min-height: 12.5rem
);

:root {
  @each $key, $value in $variables-map {
    --#{$key}: #{$value};
  }
}
</style>
