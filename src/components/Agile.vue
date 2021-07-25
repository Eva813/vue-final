<template>
  <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
    <div
      class="slide"
      v-for="(slide, index) in slides"
      :key="index + slide.name"
      :class="`slide--${index}`"
    >
      <img class="main-img" :src="slide.img" />
    </div>
  </agile>
  <agile
    class="thumbnails"
    ref="thumbnails"
    :options="options2"
    :as-nav-for="asNavFor2"
  >
    <div
      class="slide slide--thumbniail"
      v-for="(slide, index) in slides"
      :key="index + slide.name"
      :class="`slide--${index}`"
      @click="$refs.thumbnails.goTo(index)"
    >
      <img class="thumbnail-img" :src="slide.img" />
    </div>
    <!-- <template slot="prevButton"
      ><font-awesome-icon :icon="['fas', 'chevron-left']"
    /></template>
    <template slot="nextButton"
      ><font-awesome-icon :icon="['fas', 'chevron-right']"
    /></template> -->
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  components: {
    agile: VueAgile,
  },
  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false,
      },

      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            },
          },

          {
            breakpoint: 1000,
            settings: {
              //將button打開會有誤
              navButtons: false,
            },
          },
        ],
      },

      slides: [
        {
          name: "1",
          img: require("@/assets/img/banner1.png"),
        },
        {
          name: "2",
          img: require("@/assets/img/banner2.png"),
        },
        {
          name: "3",
          img: require("@/assets/img/banner3.png"),
        },
        {
          name: "4",
          img: require("@/assets/img/banner4.png"),
        },
        {
          name: "5",
          img: require("@/assets/img/banner5.png"),
        },
      ],
    };
  },
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/all.scss";
.main {
  margin-bottom: 20px;
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}
.thumbnails .agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.thumbnails .agile__nav-button--prev {
  left: -45px;
}
.thumbnails .agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 540px;
  justify-content: center;
}
.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
.slide img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
}
</style>
