<style lang="scss" scoped>
@import "~@/assets/all.scss";
nav {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.98);
  position: fixed;
  top: 0;
  width: 100%; /* Full width */
  z-index: 5;
  > .container-fluid {
    justify-content: flex-start;
    @include desk-below {
      @media (max-width: 1023px) {
        justify-content: space-between;
      }
    }
  }
  @include desk-below {
    @media (max-width: 1023px) {
      max-height: 60px;
    }
  }
  @include pad {
    @media (max-width: 768px) {
      padding: 0;
    }
  }
}
.nav-container {
  margin: 0 auto;
}
.navbar-brand {
  width: 180px;
  min-height: 60px;
  background-color: FFFFFF;
}
.icon-group {
  display: flex;
  margin-right: 15px;
  &-item {
    font-size: 16px;
    margin: 0 10px;
  }

  .search-box {
    .input:after {
      display: block;
      content: "";
      border-bottom: solid 3px #019fb6;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      transform-origin: right;
    }

    .search-box-input {
      display: block;
      &:placeholder-shown {
        opacity: 0;
        transition: opacity 270ms ease-in-out;
      }
    }
    &:hover .input::after {
      transform: scaleX(1);
    }
    &:hover .search-box-input:placeholder-shown {
      opacity: 1;
      font-style: italic;
    }
  }
  @include desk-below {
    @media (max-width: 1023px) {
      display: none;
    }
  }
  @include pad {
    @media (max-width: 768px) {
      display: none;
    }
  }
}
.Cart-count {
  background-color: #c74060;
  color: #fff;
  position: absolute;
  z-index: 3;
  font-size: 11px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  border-radius: 10px;
  right: 13px;
  top: 25px;
  text-indent: -1px;
}
////漢堡選單
.hamburger {
  position: relative;
  width: 30px;
  height: 4px;
  background: #000;
  border-radius: 10px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
}
.hamburger:before,
.hamburger:after {
  content: "";
  position: absolute;
  height: 4px;
  right: 0;
  background: #000;
  border-radius: 10px;
  transition: all 0.3s;
}
.hamburger:before {
  top: -10px;
  width: 20px;
}
.hamburger:after {
  top: 10px;
  width: 25px;
}
.toggle-menu {
  // checkbox
  position: absolute;
  width: 40px;
  height: 100%;
  // 要比漢堡高一層，點擊才順暢
  z-index: 6;
  cursor: pointer;
  opacity: 0;
}
.hamburger,
.toggle-menu {
  display: none;
  @include desk-below {
    @media (max-width: 1023px) {
      display: block;
    }
  }
  @include pad {
    @media (max-width: 768px) {
      display: block;
    }
  }
}
.icon-nav input:checked ~ .hamburger {
  background: transparent;
}
.icon-nav input:checked ~ .hamburger:before {
  top: 0;
  transform: rotate(-45deg);
  width: 30px;
}
.icon-nav input:checked ~ .hamburger:after {
  top: 0;
  transform: rotate(45deg);
  width: 30px;
}

.navbar-expand .navbar-nav {
  justify-content: flex-start;
  flex-direction: row;
  @include desk-below {
    @media (max-width: 1023px) {
      display: none;
      // justify-content: start;
      // flex-direction: column;
      // align-items: center;
      // position: fixed;
      // top: 0;
      // // 使整個區塊隱藏
      // right: -300px;
      // background: #fff;
      // width: 300px;
      // height: 100%;
      // z-index: 5;
      // padding-top: 65px;
    }
  }

  li {
    @include desk-below {
      @media (max-width: 1023px) {
        width: 100%;
      }
    }
  }
  li a {
    @include desk-below {
      @media (max-width: 1023px) {
        padding: 30px;
        font-size: 20px;
      }
    }
  }
}

////
.menuPanel {
  position: fixed;
  z-index: 5;
  padding-top: 5px;
  background-color: #fff;
  box-shadow: -20px 0 40px rgba(0, 0, 0, 0.3);
  left: 0;
  top: 0;

  @media (max-width: 1023px) {
  }
}
.aside-menu {
  overflow: scroll;
  padding: 15px 0;
  margin-right: 16px;
  width: 300px;
  height: 100vh;
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
      // border-left-color: $primary;
    }
    &:hover {
      background: rgba(247, 243, 243, 0.9);
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
      // border-left-color: $primary;
    }
  }
  @include desk-below {
    @media (max-width: 1023px) {
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
</style>

<template>
  <nav class="navbar navbar-out navbar-expand navbar-light bg-white">
    <div class="nav-container container-fluid px-3">
      <a class="navbar-brand" href="#">
        <img src="@/assets/img/logo_transparent2.png" alt="" />
      </a>
      <div class="icon-nav d-flex align-items-center">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                to="/foodpage"
                >🐷 開鍋祭，開鍋囉~</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                所有商品
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link
                    @click.prevent="pushNavId"
                    id="food"
                    class="dropdown-item"
                    to="/foodpage"
                    >美食生活</router-link
                  >
                </li>
                <li>
                  <router-link
                    id="beauty"
                    class="dropdown-item dropend"
                    to="/foodpage"
                    >美妝保養
                  </router-link>
                </li>
                <li>
                  <router-link id="pet" class="dropdown-item" to="/foodpage"
                    >毛孩愛用</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/columnpage"
                >POPOLA營養師專欄</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/memberpage"
                >會員福利</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/announcepage"
                >《防疫期間物流變更公告》</router-link
              >
            </li>
          </ul>
        </div>
        <!-- 漢堡選單 -->
        <input
          type="checkbox"
          class="toggle-menu"
          @click="handDomShow('isShowMenu')"
        />
        <div class="hamburger"></div>
        <!-- 漢堡選單 END -->
      </div>
    </div>
    <ul class="icon-group">
      <!-- 搜尋 -->
      <li class="icon-group-item">
        <div class="search-box d-flex">
          <div class="input">
            <input type="text" class="search-box-input" placeholder="search" />
          </div>
          <a href="#" class="search-box-btn link-dark">
            <font-awesome-icon :icon="['fas', 'search']" />
          </a>
        </div>
      </li>
      <li class="icon-group-item">
        <a href="#" class="link-dark"
          ><font-awesome-icon :icon="['fas', 'comments']"
        /></a>
      </li>
      <li class="icon-group-item">
        <router-link href="#" class="link-dark" to="/signin"
          ><font-awesome-icon :icon="['fas', 'user']"
        /></router-link>
      </li>
      <li class="icon-group-item">
        <router-link href="#" to="/shoppingcart" class="link-dark"
          ><font-awesome-icon :icon="['fas', 'shopping-cart']" />
          <span class="Cart-count primary-color" style="display: inline">{{
            parentSpanNumbers
          }}</span></router-link
        >
      </li>
    </ul>
  </nav>

  <div class="menuPanel aside-menu" v-show="isShowMenu">
    <ul class="catagory">
      <li>
        <div class="first d-flex">
          <router-link id="hotpot" href="#" to="/foodpage"
            >🐷 開鍋祭，開鍋囉~
          </router-link>
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
          <li>
            <router-link id="frozen-food" href="#" to="/foodpage"
              >冷凍食品</router-link
            >
          </li>
          <li>
            <router-link id="bakery" href="#" to="/foodpage"
              >POPOLA BAKE</router-link
            >
          </li>
          <li>
            <router-link id="kitchen" href="#" to="/foodpage"
              >廚房用品</router-link
            >
          </li>
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
          <li>
            <router-link id="daily-care" href="#" to="/foodpage"
              >保養系列</router-link
            >
          </li>
          <li>
            <router-link id="life" href="#" to="/foodpage"
              >日常生活</router-link
            >
          </li>
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
          <li>
            <router-link id="dog-food" href="#" to="/foodpage"
              >狗狗食品</router-link
            >
          </li>
          <li>
            <router-link id="dog-care" href="#" to="/foodpage"
              >狗狗保健品</router-link
            >
          </li>
          <li>
            <router-link id="elderly-care" href="#" to="/foodpage"
              >老犬照護</router-link
            >
          </li>
          <li>
            <router-link id="cat-care" href="#" to="/foodpage"
              >貓貓食品</router-link
            >
          </li>
          <li>
            <router-link id="cat-usage" href="#" to="/foodpage"
              >貓貓用品</router-link
            >
          </li>
        </ul>
      </li>
      <li>
        <div class="first d-flex">
          <router-link href="#" to="/columnpage">營養師專欄 </router-link>
        </div>
      </li>
      <li>
        <div class="first d-flex">
          <router-link href="#" to="/memberpage">會員福利 </router-link>
        </div>
      </li>
      <li>
        <div class="first d-flex">
          <router-link href="#" to="/announcepage"
            >《防疫期間物流變更公告》
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    parentSpanNumbers: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      headerFixed: true,
      isShow: false,
      isTransformFood: true,
      isTransformBeauty: false,
      isTransformPet: false,
      isTransformOrder: false,
      isTransformLimit: false,

      isShowBeauty: false,
      isShowFood: true,
      isShowPet: false,
      isShowOrder: false,
      isShowLimit: false,
      isShowMenu: false,
      NavId: "food",
    };
  },
  methods: {
    handDomShow(key) {
      this[key] = !this[key];
    },
    handleScroll() {
      // 得到页面滚动的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 判断页面滚动的距离是否大于吸顶元素的位置
      this.headerFixed = scrollTop > this.offsetTop - this.offsetHeight * 2;
    },
    pushNavId(e) {
      console.log(e.target.id);
      this.emitter.emit("getNavId", this.NavId);
    },
  },
  mounted() {},
  destroyed() {},
};
</script>

