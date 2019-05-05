<template>
  <main class="company">
    <h1 class="company__name">Client Company</h1>

    <CarouselContainerSlot :employees="company.employees"/>
  </main>
</template>

<script>
import CarouselContainerSlot from "./CarouselContainerSlot.vue";

export default {
  name: "ad-company",
  props: {
    company: {
      type: Object,
      required: true,
      default() {
        return {
          employees: []
        };
      }
    }
  },
  components: {
    CarouselContainerSlot
  }
};
</script>

<style lang="scss" scoped>
.company {
  display: flex;
  flex-direction: column;

  &__name {
    text-align: center;
  }
}
</style>

