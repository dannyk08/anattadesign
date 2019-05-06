<template slot="slotName">
  <section class="employee-card-carousel-slot" :class="{'should-rotate': isCarousel}">
    <div
      class="employee-card-carousel-slot__controls control-left"
      v-if="isCarousel"
      @click="shiftCarousel('left')"
    >
      <h3>&lt;</h3>
    </div>
    <main
      class="employee-card-carousel-slot__container"
      :ref="carouselContainerRef"
      :style="{
        'max-width': maxCarouselContainerWidth,
        'min-width': maxCarouselContainerWidth
      }"
    >
      <div
        class="employee-card-carousel-slot__container-slider"
        :style="{left: carouselShift + 'px'}"
        :ref="slotName"
      >
        <slot></slot>
      </div>
    </main>
    <div
      class="employee-card-carousel-slot__controls control-right"
      v-if="isCarousel"
      @click="shiftCarousel('right')"
    >
      <h3>&gt;</h3>
    </div>
  </section>
</template>

<script>
import uniqid from "uniqid";

const CONTAINER_REF = uniqid();
const INITIAL_SHIFT = 0;

export default {
  name: "ad-employee-card-carousel-slot",
  props: {
    cardsTotal: {
      type: Number,
      required: true
    },
    isCarousel: {
      type: Boolean,
      default: false,
      required: true
    },
    slotName: {
      type: String,
      default: () => "default"
    }
  },
  data() {
    return {
      carouselContainerRef: CONTAINER_REF,
      carouselShift: INITIAL_SHIFT,
      carouselContainerWidth: null,
      carouselWidth: null
    };
  },
  mounted() {
    this.carouselWidth = this.$refs[this.slotName].clientWidth;
    this.carouselContainerWidth = this.$refs[CONTAINER_REF].clientWidth;
  },
  computed: {
    rightShiftLimit() {
      return Math.round((this.carouselWidth / this.cardsTotal) * 3);
    },
    maxCarouselContainerWidth() {
      if (!this.isCarousel) return null;
      return Math.round((this.carouselWidth / this.cardsTotal) * 3) + "px";
    }
  },
  methods: {
    shiftCarousel(direction) {
      if (direction === "left") {
        if (this.carouselWidth + this.carouselShift < this.carouselWidth) {
          this.carouselShift = this.carouselShift + this.rightShiftLimit;
        }
      } else if (direction === "right") {
        if (this.carouselWidth + this.carouselShift > this.rightShiftLimit) {
          this.carouselShift = this.carouselShift - this.rightShiftLimit;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$control-square-dimension: 4rem;

.employee-card-carousel-slot {
  display: flex;
  width: 100%;
  position: relative;
  min-height: calc(
    var(--node-card-info-min-height) + calc(var(--node-highlight-height) * 2)
  );
  flex: 1;

  &.should-rotate &__container {
    background: transparentize(crimson, 0.875);
    overflow: hidden;
    justify-content: flex-start;
    position: relative;
    min-width: 75%;
    max-width: 75%;
    left: 50%;
    transform: translateX(-50%);
  }

  &.should-rotate &__container-slider {
    left: 0;
    position: absolute;
    transition: 0.5s ease-out;
  }

  &__container {
    display: flex;
    flex: 1;
  }

  &__container-slider {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  &__controls {
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    min-height: $control-square-dimension;
    min-width: $control-square-dimension;
    text-align: center;
    background: var(--white-color);
    border-radius: 50%;
    border: 1px solid var(--gray-color);
    cursor: pointer;
  }

  &__controls.control-left {
    left: $control-square-dimension;
  }

  &__controls.control-right {
    right: $control-square-dimension;
  }
}
</style>

