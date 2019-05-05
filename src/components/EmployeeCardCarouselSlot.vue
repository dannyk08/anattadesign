<template slot="slotName">
  <section class="employee-card-carousel-slot" :class="{'should-rotate': isCarousel}">
    <main class="employee-card-carousel-slot__container">
      <slot></slot>
    </main>
  </section>
</template>

<script>
export default {
  name: "ad-employee-card-carousel-slot",
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
.employee-card-carousel-slot {
  display: flex;
  margin-top: var(--node-highlight-height);
  min-height: calc(
    var(--node-card-info-min-height) + calc(var(--node-highlight-height) * 2)
  );
  min-width: 90%;
  max-width: 90%;

  &.should-rotate {
    background: transparentize(crimson, 0.75);
    overflow: hidden;
  }

  &.should-rotate &__container {
    overflow: auto;
    justify-content: flex-start;
  }

  &__container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>

