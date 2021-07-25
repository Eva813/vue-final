<style lang="scss" scoped>
@import "~@/assets/all.scss";
.aside-menu {
  padding: 15px 0;
  margin-right: 16px;
  width: 300px;
  height: 100%;
  //background: #1b1b1b;
  ul {
    height: 100%;
    width: 100%;
  }
  li {
    line-height: 55px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    cursor: pointer;
  }
  .first {
    position: relative;
    transition: transform 0.4s;
    span {
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      font-size: 10px;
    }
    &:hover .icon {
      // transform: rotate(-180deg);
      color: $primary;
    }
    &:hover a {
      color: $primary;
      border-left-color: $primary;
    }
    &:hover {
      background: rgb(247, 243, 243);
    }
    .icon.rotate {
      transform: rotate(-180deg);
    }
  }
  a {
    width: 90%;
    color: #333;
    font-size: 16px;
    padding-left: 20px;

    border-left: 3px solid transparent;
    transition: transform 0.4s;
    &:hover {
      color: $primary;
      border-left-color: $primary;
    }
  }
}
.inner-catagory {
  position: static;
  //display: none;
  li {
    line-height: 35px;
    border-bottom: none;
  }
  a {
    font-size: 15px;
    color: #888;
    padding-left: 40px;
  }
}

.product-list-section {
  padding: 15px 0;
  h2 {
    font-size: 20px;
    padding: 15px 0 25px;
    color: #333;
  }
}
</style>


<template>
  <header>
    <Navbar></Navbar>

    <Breadcrumb></Breadcrumb>
  </header>
  <div class="container d-flex">
    <div class="row">
      <div class="col-3">
        <div class="aside-menu">
          <ul class="catagory">
            <li>
              <div class="first d-flex">
                <a href="#">🐷 開鍋祭，開鍋囉~ </a>
              </div>
            </li>
            <li>
              <div class="first d-flex">
                <a href="#">美食生活 </a>
                <span @click="handDomShow('isShowFood')">
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'chevron-down']"
                    :class="{ rotate: isTransformFood }"
                    @click="handDomShow('isTransformFood')"
                  />
                </span>
              </div>
              <ul v-show="isShowFood" class="inner-catagory">
                <li><a href="#">冷凍食品</a></li>
                <li><a href="#">POPOLA BAKE</a></li>
                <li><a href="#">廚房用品</a></li>
              </ul>
            </li>
            <li>
              <div class="first d-flex">
                <a href="#">美妝保養 </a>
                <span @click="handDomShow('isShowBeauty')"
                  ><font-awesome-icon
                    class="icon"
                    :icon="['fas', 'chevron-down']"
                    :class="{ rotate: isTransformBeauty }"
                    @click="handDomShow('isTransformBeauty')"
                  />
                </span>
              </div>
              <ul v-show="isShowBeauty" class="inner-catagory">
                <li><a href="#">保養系列</a></li>
                <li><a href="#">美妝系列</a></li>
                <li><a href="#">日程生活</a></li>
              </ul>
            </li>
            <li>
              <div class="first d-flex">
                <a href="#">毛孩愛用 </a>
                <span @click="handDomShow('isShowPet')">
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'chevron-down']"
                    :class="{ rotate: isTransformPet }"
                    @click="handDomShow('isTransformPet')"
                  />
                </span>
              </div>
              <ul v-show="isShowPet" class="inner-catagory">
                <li><a href="#">狗狗食品</a></li>
                <li><a href="#">狗狗用品</a></li>
                <li><a href="#">老犬照護</a></li>
                <li><a href="#">貓貓食品</a></li>
                <li><a href="#">貓貓用品</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="product-list-section">
      <h2>美食生活</h2>
      <div class="row row-cols-md-3">
        <div class="col gap-4" v-for="item in food" :key="item.title">
          <div class="card product-card">
            <div class="card-top">
              <a class="card-img-link" href="#">
                <img :src="item.src" class="card-img-top" alt="product-img" />
              </a>
              <a href="#" class="btn card-btn">加入購物車</a>
            </div>
            <div class="card-body">
              <h5 class="card-title text-center fw-normal">{{ item.title }}</h5>
              <p class="card-text text-center fw-bold">
                <span>NT$</span> {{ item.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
export default {
  name: "FoodPage",
  components: {
    Navbar,
    Breadcrumb,
  },
  props: ["ifood"],
  data() {
    return {
      isShow: false,
      isTransformFood: false,
      isTransformBeauty: false,
      isTransformPet: false,

      isShowBeauty: false,
      isShowFood: false,
      isShowPet: false,
      food: [
        {
          title: "酵素旅行包(20入/盒)",
          price: 1380,
          src: require("@/assets/img/food/food1-1.png"),
        },
        {
          title: "圓圓母湯 (20瓶/箱)",
          price: 1560,
          src: require("@/assets/img/food/food2-1.png"),
        },
        {
          title: "POPOLAの酵",
          price: 1550,
          src: require("@/assets/img/food/food3-1.png"),
        },
        {
          title: "吶吶的桃花朵朵紅茶包",
          price: 168,
          src: require("@/assets/img/food/food4-1.png"),
        },
        // {
        //   title: "酵素旅行包(5入/盒)",
        //   price: 1688,
        //   src: require("@/assets/img/food/food1-2.png"),
        // },
      ],
    };
  },
  methods: {
    handDomShow(key) {
      this[key] = !this[key];
    },
  },
};
</script>

