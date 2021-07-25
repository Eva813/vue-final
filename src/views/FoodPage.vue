<style lang="scss" scoped>
@import "~@/assets/all.scss";
.aside-menu {
  width: 300px;
  height: 100%;
  //background: #1b1b1b;
  ul {
    height: 100%;
    width: 100%;
  }
  li {
    line-height: 60px;
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
      font-size: 20px;
    }
    &:hover .icon {
      transform: rotate(-180deg);
      color: $primary;
    }
  }
  a {
    width: 90%;
    color: #333;
    font-size: 16px;
    padding-left: 20px;
    font-weight: 500;
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
    line-height: 40px;
    border-bottom: none;
  }
  a {
    font-size: 15px;
    color: #888;
    padding-left: 40px;
  }
}
</style>


<template>
  <header>
    <Navbar></Navbar>

    <Breadcrumb></Breadcrumb>
  </header>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="aside-menu">
          <ul class="catagory">
            <li>
              <a href="#">🐷 開鍋祭，開鍋囉~ </a>
            </li>
            <li>
              <div class="first d-flex">
                <a href="#">美食生活 </a>
                <span @click="handDomShow">
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'angle-down']"
                  />
                </span>
              </div>
              <ul v-show="isShow" class="inner-catagory">
                <li><a href="#">冷凍食品</a></li>
                <li><a href="#">POPOLA BAKE</a></li>
                <li><a href="#">廚房用品</a></li>
              </ul>
            </li>
            <li>
              <div class="first d-flex">
                <a href="#">美妝保養 </a>
                <span
                  ><font-awesome-icon
                    class="icon"
                    :icon="['fas', 'angle-down']"
                  />
                </span>
              </div>
              <ul class="inner-catagory">
                <li><a href="#">保養系列</a></li>
                <li><a href="#">美妝系列</a></li>
                <li><a href="#">日程生活</a></li>
              </ul>
            </li>
            <li>
              <div class="first d-flex">
                <a href="#">毛孩愛用 </a>
                <span>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'angle-down']"
                  />
                </span>
              </div>
              <ul class="inner-catagory">
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
  // data() {
  //   isShow : false;
  // },
  // methods: {
  //   handDomShow() {
  //     isShow.value = !isShow.value;
  //   },
  // },
};
</script>

