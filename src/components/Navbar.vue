<style lang="scss" scoped>
@import "~@/assets/all.scss";
nav {
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.98);
  position: fixed;
  top: 0;
  width: 100%; /* Full width */
  z-index: 5;
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
.icon-nav input:checked ~ .navbar-nav {
  @include desk-below {
    @media (max-width: 1023px) {
      right: 0;
      box-shadow: -20px 0 40px rgba(0, 0, 0, 0.3);
    }
  }
}

.navbar-expand .navbar-nav {
  justify-content: flex-start;
  flex-direction: row;
  @include desk-below {
    @media (max-width: 1023px) {
      justify-content: start;
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 0;
      // 使整個區塊隱藏
      right: -300px;
      background: #fff;
      width: 300px;
      height: 100%;
      z-index: 5;
      padding-top: 65px;
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
</style>

<template>
  <nav class="navbar navbar-expand navbar-light bg-white">
    <div class="nav-container container-fluid px-3">
      <a class="navbar-brand" href="#">
        <img src="@/assets/img/logo1.png" alt="" />
      </a>
      <div class="icon-nav d-flex align-items-center">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- 漢堡選單 -->
          <input type="checkbox" class="toggle-menu" />
          <div class="hamburger"></div>
          <!-- 漢堡選單 END -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >🐷 開鍋祭，開鍋囉~</a
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
                <li><a class="dropdown-item" href="#">常溫飲食</a></li>
                <li>
                  <a class="dropdown-item dropend" href="#"
                    >美食生活<button
                      type="button"
                      class="
                        btn btn-secondary
                        dropdown-toggle dropdown-toggle-split
                      "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropright</span>
                    </button>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">美妝保健</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">POPOLA營養師專欄</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">會員福利</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">《防疫期間物流變更公告》</a>
            </li>
          </ul>
        </div>
        <ul class="icon-group">
          <!-- 搜尋 -->
          <li class="icon-group-item">
            <div class="search-box d-flex">
              <div class="input">
                <input
                  type="text"
                  class="search-box-input"
                  placeholder="search"
                />
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
            <a href="#" class="link-dark"
              ><font-awesome-icon :icon="['fas', 'user']"
            /></a>
          </li>
          <li class="icon-group-item">
            <a href="#" class="link-dark"
              ><font-awesome-icon :icon="['fas', 'shopping-cart']" />
              <span class="Cart-count primary-color" style="display: inline">{{
                parentSpanNumbers
              }}</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    parentSpanNumbers: {
      type: Number,
      default: 0,
    },
  },
};
</script>

