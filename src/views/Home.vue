<style lang="scss">
.nav-container {
  margin: 0 auto;
}
.navbar-brand {
  width: 180px;
  min-height: 60px;
  background-color: FFFFFF;
}
.icon-group {
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
}
</style>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="nav-container container-fluid px-3">
        <a class="navbar-brand" href="#">
          <img src="@/assets/img/logo1.png" alt="" />
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
          <ul class="d-flex icon-group">
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
                ><font-awesome-icon :icon="['fas', 'shopping-cart']"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
</script>
