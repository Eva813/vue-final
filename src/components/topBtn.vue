<style lang="scss" scoped>
@import "~@/assets/all.scss";
#topBtn {
  width: 34px;
  height: 34px;
  display: block;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 10;
  border: 1px solid #e7e7e7;
  outline: none;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  transition: 0.4s;
  .upIcon {
    position: absolute;
    color: #838080;
    top: 9px;
    left: 11px;
    font-size: 13px;
    &:hover {
      color: $primary;
    }
  }
}
</style>

<template>
  <button id="topBtn" title="Go to top" @click="toTop()" v-show="isScrollTop">
    <font-awesome-icon class="upIcon" :icon="['fas', 'chevron-up']" />
  </button>
</template>

<script>
export default {
  name: "topBtn",
  props: {
    // 必要值
    inScrollTop: {
      type: Number,
      default: 0,
    },
    inIsScrollTop: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scrollTop: 0,
      isScrollTop: false,
    };
  },
  methods: {
    scrollFunction() {
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;

      if (this.scrollTop > 300) {
        this.isScrollTop = true;
      } else {
        this.isScrollTop = false;
      }
    },
    toTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollFunction, true);
  },
};
</script>

