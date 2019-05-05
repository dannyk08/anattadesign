<template slot="slotName">
  <section class="employee-carousel">
    <main class="employee-carousel__container" :class="{'should-rotate': isCarousel}">
      <slot></slot>
    </main>
  </section>
</template>

<script>
export default {
  name: "ad-employee-carousel-slot",
  props: {
    isCarousel: {
      type: Boolean,
      default: false,
      required: true
    },
    slotName: {
      default: "default"
    }
  }
};
</script>

<style lang="scss" scoped>
.employee-carousel {
  position: relative;
  display: flex;
  overflow-x: auto;
  width: 100%;
  justify-content: space-around;
  margin-top: var(--node-highlight-height);

  &__container {
    display: flex;

    .should-rotate {
      background: transparentize(crimson, 0.75);
    }
  }
}
</style>

