<template>
  <main class="company">
    <h1 class="company__name">{{company.name}}</h1>

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
          name: "",
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
  flex: 1;

  &__name {
    text-align: center;
  }
}
</style>

