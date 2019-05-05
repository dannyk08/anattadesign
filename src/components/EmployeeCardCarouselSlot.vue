<template slot="slotName">
  <section class="employee-card-carousel" :class="{'should-rotate': isCarousel}">
    <main class="employee-card-carousel__container">
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
.employee-card-carousel {
  display: flex;
  // overflow-x: auto;
  // width: 100%;
  // justify-content: space-around;
  margin-top: var(--node-highlight-height);
  min-height: calc(
    var(--node-card-info-min-height) + calc(var(--node-highlight-height) * 2)
  );
  min-width: 90%;
  max-width: 90%;

  &.should-rotate {
    // position: relative;
    // just for highlighting
    background: transparentize(crimson, 0.75);
    overflow: hidden;
    // left: 1rem;
    // min-width: 50vw;
    // min-height: calc(
    //   var(--node-card-info-min-height) + calc(var(--node-highlight-height) * 2)
    // );
  }

  &.should-rotate &__container {
    overflow: auto;
    justify-content: flex-start;
    // position: absolute;
    // left: 0;
    // padding: 0 2rem;
    // right: 0;
    // background: transparentize(crimson, 0.75);
    // min-height: 100%;
  }

  &__container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>

