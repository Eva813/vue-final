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
  @include desk-below {
    @media (max-width: 1023px) {
      display: none;
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
  .title-part {
    display: block;
    position: relative;
  }
  h2 {
    float: left;
    font-size: 20px;
    padding: 15px 0 25px;
    line-height: 1.24;
    color: #333;
    @include pad {
      @media (max-width: 768px) {
        float: none;
        padding-bottom: 8px;
      }
    }
  }
}

.product-list-select {
  display: flex;
  position: absolute;
  float: right;
  // min-width: 350px;
  right: 0px;
  z-index: 2;
  min-width: 200px;

  @include pad {
    @media (max-width: 768px) {
      display: flex;
      float: none;
      font-size: 13px;
      position: unset;
      margin-bottom: 15px;
      z-index: 2;
    }
  }

  .sort-section {
    @include pad {
      @media (max-width: 768px) {
        width: 100%;
        margin-right: 5%;
      }
    }
  }
  .limit-section {
    @include pad {
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  .first {
    position: relative;
    transition: transform 0.4s;
    border-bottom: 1px solid #333;

    .title-span {
      display: block;
      width: 100px;
      padding-left: 10px;
    }
    .icon-sapn {
      display: inline-block;
      position: absolute;

      top: 50%;
      right: 7px;
      transform: translateY(-50%);
      font-size: 10px;
      cursor: pointer;
    }

    .icon.rotate {
      transform: rotate(-180deg);
    }
  }
  a {
    width: 90%;
    color: #333;
    font-size: 16px;
    padding-left: 10px;

    border-left: 3px solid transparent;
    transition: transform 0.4s;
    &:hover {
      background-color: lighten($primary, 20%);
    }
  }
  .inner-catagory {
    background: #fff;
    border-left: 1px solid #888;
    border-right: 1px solid #888;
    border-bottom: 1px solid #888;
    position: static;
    //display: none;

    @include pad {
      @media (max-width: 768px) {
        z-index: 2;
        position: absolute;
        width: 100%;
      }
    }
    li {
      line-height: 35px;
      border-bottom: none;
    }
    a {
      width: 100%;
      font-size: 15px;
      color: rgb(85, 82, 82);
    }
  }
}

.sort-section-list,
.limit-section-list {
  margin-left: 10px;
  width: 170px;
  @include pad {
    @media (max-width: 768px) {
      width: 100%;
      position: relative;
    }
  }
}
.product-section {
  z-index: -1;
}

.navbar-breadcrumb {
  margin-top: 90px;
  @include desk-below {
    @media (max-width: 1023px) {
      margin-top: 60px;
    }
  }
}
//////

.card-btn {
  @include desk-below {
    @media (max-width: 1023px) {
      display: none;
    }
  }
}
.btn-mobile-cart {
  display: none;
  @include desk-below {
    @media (max-width: 1023px) {
      display: block;
      color: darken($primary, 5%);
      background-color: #f7f7f7;
      border-color: #f7f7f7;
    }
  }
}
.product-item {
  max-width: 340px;
  margin-bottom: 15px;
  .card-top {
    max-width: 340px;

    &:hover .card-btn {
      margin-top: -175px;
    }
  }
}
////cart-panel-container
.cart-panel {
  background-color: #fff;
  display: block;
  position: absolute;
  right: 5% !important;
  top: 179px;
  width: 300px;
  color: #333;
  z-index: 4;
  // overflow: visible;
  border: 1px solid #f7f7f7;
  transition: 0.5s;

  .cart-items {
    max-height: calc(100vh-267px);
    overflow: auto;
    position: relative;
  }
  .cart-item {
    position: relative;
    padding: 15px 15px 92px 15px;
    &:before {
      content: "";
      top: -1px;
      width: 92%;
      position: absolute;
      border-top-width: 1px;
      border-top-style: solid;
      color: rgb(211, 211, 211);
    }
  }
  .cart-item-img {
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 10px;
  }
  .cart-item-content {
    float: left;
    .cart-item-title {
      color: #888;
      font-size: 13px;
      padding-bottom: 2px;
    }
  }
  .price-detail {
    position: absolute;
    bottom: 10px;
    font-size: 14px;
  }
  .price-x {
    margin: 0 3px;
  }
  .remove {
    color: #858585;
    width: 16px;
    position: absolute;
    text-align: left;
    right: 12px;
    bottom: 11px;
  }
  .cart-check-btn {
    padding: 15px;
    .btn {
      width: 100%;
      margin-bottom: 10px;
      padding: 6px 12px;
      background-color: $primary;
      color: #fff;
      border-radius: 3px;
    }
  }
}
.cart-panel .classNone:before {
  content: "";
  top: -1px;
  width: 92%;
  position: absolute;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: transparent;
}
//cart-panel animations
.Panel-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.Panel-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.Panel-enter-active {
  transition: all 0.3 ease;
}
.Panel-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.Panel-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.Panel-leave-active {
  transition: all 0.3 ease;
}
</style>


<template>
  <header>
    <Navbar v-bind:parentSpanNumbers="spanNumbers"></Navbar>

    <Breadcrumb class="navbar-breadcrumb"></Breadcrumb>
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
      <div class="title-part clearfix">
        <h2>美食生活</h2>
        <div class="product-list-select clearfix">
          <div class="sort-section">
            <ul class="sort-section-list">
              <li>
                <div class="first d-flex">
                  <span class="title-span">商品排序</span>
                  <span class="icon-sapn" @click="handDomShow('isShowOrder')">
                    <font-awesome-icon
                      class="icon"
                      :icon="['fas', 'chevron-down']"
                      :class="{ rotate: isTransformOrder }"
                      @click="handDomShow('isTransformOrder')"
                    />
                  </span>
                </div>
                <ul v-show="isShowOrder" class="inner-catagory">
                  <li v-for="item in sortProduct">
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="limit-section">
            <ul class="limit-section-list">
              <li>
                <div class="first d-flex">
                  <span class="title-span">每頁顯示</span>
                  <span class="icon-sapn" @click="handDomShow('isShowLimit')">
                    <font-awesome-icon
                      class="icon"
                      :icon="['fas', 'chevron-down']"
                      :class="{ rotate: isTransformLimit }"
                      @click="handDomShow('isTransformLimit')"
                    />
                  </span>
                </div>
                <ul v-show="isShowLimit" class="inner-catagory">
                  <li v-for="item in limitProduct">
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row row-cols-lg-3 row-cols-md-2 row-cols-2 product-section">
        <div class="product-item gap-1" v-for="item in food" :key="item.title">
          <div class="card product-card">
            <div class="card-top">
              <a class="card-img-link" href="#">
                <img :src="item.src" class="card-img-top" alt="product-img" />
              </a>
              <div
                class="btn card-btn"
                @click="addToCart(item), triggerPanel(), goto('cartPanel')"
              >
                加入購物車
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title text-center fw-normal">{{ item.title }}</h5>
              <p class="card-text text-center fw-bold">
                <span>NT$</span> {{ item.price }}
              </p>
            </div>
            <span class="btn btn-mobile-cart">
              <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <transition name="Panel">
    <div class="cart-panel" v-show="showPanel" ref="cartPanel">
      <div class="cart-items">
        <div
          class="cart-item-container"
          v-for="(item, index) in shoppingCart"
          :key="item.productId"
        >
          <!-- //使第一筆的資料，沒有上方的線條 -->
          <div :class="['cart-item', getCartClass(item)]" :id="item.productId">
            <a href="" target="_blank" class="product-link">
              <img class="cart-item-img" :src="item.src" alt="product-img" />
            </a>
            <div class="cart-item-content">
              <div class="cart-item-title">
                {{ item.title }}
              </div>
              <div class="price-detail">
                <span>{{ item.inCart }}</span>
                <span class="price-x">x</span>
                <span>NT{{ item.price }}</span>
              </div>
            </div>
            <div class="remove">
              <a href=""
                ><font-awesome-icon
                  class="del-icon"
                  :icon="['fas', 'trash-alt']"
                  @click="deleteBtn(index)"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-check-btn button">
        <router-link
          class="btn"
          :to="{ name: '購物車頁面', params: { shoppingCart } }"
          >訂單結帳</router-link
        >
      </div>
    </div>
  </transition>

  <Pagination></Pagination>

 

  <footer>
    <Footer></Footer>
  </footer>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "FoodPage",
  components: {
    Navbar,
    Breadcrumb,
    Pagination,
    Footer,
  },

  data() {
    return {
      isShow: false,
      isTransformFood: false,
      isTransformBeauty: false,
      isTransformPet: false,
      isTransformOrder: false,
      isTransformLimit: false,

      isShowBeauty: false,
      isShowFood: false,
      isShowPet: false,
      isShowOrder: false,
      isShowLimit: false,
      showPanel: false,
      firstNone: true,
      food: [
        {
          title: "酵素旅行包(20入/盒)",
          price: 1380,
          src: require("@/assets/img/food/food1-1.png"),
          inCart: 0,
          productId: 1,
        },
        {
          title: "圓圓母湯 (20瓶/箱)",
          price: 1560,
          src: require("@/assets/img/food/food2-1.png"),
          inCart: 0,
          productId: 2,
        },
        {
          title: "POPOLAの酵",
          price: 1550,
          src: require("@/assets/img/food/food3-1.png"),
          inCart: 0,
          productId: 3,
        },
        {
          title: "吶吶的桃花朵朵紅茶包",
          price: 168,
          src: require("@/assets/img/food/food4-1.png"),
          inCart: 0,
          productId: 4,
        },
        {
          title: "旅行包(6入/盒)",
          price: 1688,
          src: require("@/assets/img/food/food1-2.png"),
          inCart: 0,
          productId: 5,
        },
        {
          title: "酵素旅包(7入/盒)",
          price: 1688,
          src: require("@/assets/img/food/food1-2.png"),
          inCart: 0,
          productId: 6,
        },
        {
          title: "酵旅行包(8入/盒)",
          price: 1688,
          src: require("@/assets/img/food/food1-2.png"),
          inCart: 0,
          productId: 7,
        },
        {
          title: "素旅行包(9入/盒)",
          price: 1688,
          src: require("@/assets/img/food/food1-2.png"),
          inCart: 0,
          productId: 8,
        },
      ],

      sortProduct: [
        "上架時間：由新到舊",
        "上架時間：由舊到新",
        "價格：由高至低",
        "價格：由低至高",
      ],
      limitProduct: ["每頁顯示24個", "每頁顯示48個", "每頁顯示72個"],
      selected: "",
      spanNumbers: 0,
      displayCartItems: [],
      shoppingCart: [],
      text: "這有一段話",
    };
  },
  methods: {
    handDomShow(key) {
      this[key] = !this[key];
    },
    addToCart(foods) {
      // let alreadyIndex = this.food.findIndex(function (item, index) {
      //   return item.title === foods.title;
      // });
      this.cartNumbers(foods);
      this.totalPrice(foods);
      // this.pushData();
    },
    cartNumbers(theFood) {
      // console.log("the product clicked is", theFood);
      let productNumbers = localStorage.getItem("cartNumbers");
      //取得的productNumbers 型別是string，所以要轉為數字
      productNumbers = parseInt(productNumbers);
      //要判斷我的localStorage是否已經有資料存在
      if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        this.spanNumbers = productNumbers + 1;
      } else {
        localStorage.setItem("cartNumbers", 1);
        this.spanNumbers = 1;
      }
      this.setItems(theFood);
    },
    setItems(theFood) {
      const cacheCarID = []; // 暫存 ID 放置處
      // 一開始先將 carData 中的 ID 全部撈出來
      this.shoppingCart.forEach((item) => {
        cacheCarID.push(item.productId);
      });
      // 接下來使用 indexOf 尋找傳進來的參數 ID 是否有在該陣列中
      // 若不存在則會回傳 -1 並加入到陣列儲存在 localStorage
      // 若存在則會回傳 0 並改走 else
      if (cacheCarID.indexOf(theFood.productId) === -1) {
        const cartContent = {
          productId: theFood.productId, // 產品 ID
          inCart: 1, // 產品數量，預設一筆
          title: theFood.title, // 產品標題
          price: theFood.price, // 產品銷售金額
          src: theFood.src,
        };
        // 將數量推回陣列中
        this.shoppingCart.push(cartContent);
        // 重新寫入 localStorage
        localStorage.setItem(
          "productsInCart",
          JSON.stringify(this.shoppingCart)
        );
      } else {
        let cache = {}; // 產品暫存處
        this.shoppingCart.forEach((item, keys) => {
          // 只找相同的產品內容
          if (item.productId === theFood.productId) {
            let { inCart } = item; // 取出已存在 localStorage 購物車的資料並加數量增加
            cache = {
              productId: theFood.productId, // 產品 ID
              inCart: (inCart += 1), // 產品當前數量，針對數量增加數量
              title: theFood.title, // 產品標題
              price: theFood.price, // 產品原始金額
              src: theFood.src,
            };
            // 移除現有 localStorage 購物車的資料，否則 localStorage 會重複加入
            this.shoppingCart.splice(keys, 1);
          }
        });
        // 將數量已經增加的資料推回陣列中
        this.shoppingCart.push(cache); // 不建議放在 forEach 內，否則迴圈會重複執行導致變成加二
        localStorage.setItem(
          "productsInCart",
          JSON.stringify(this.shoppingCart)
        );
      }
      console.log(this.shoppingCart);
    },
    totalPrice(theFoodPrice) {
      let cartPrice = localStorage.getItem("totalPrice");
      //console.log("the price is", cartPrice);

      if (cartPrice != null) {
        cartPrice = parseInt(cartPrice);
        localStorage.setItem("totalPrice", cartPrice + theFoodPrice.price);
      } else {
        localStorage.setItem("totalPrice", theFoodPrice.price);
      }
    },
    // pushData() {
    //   console.log("send foodpage data");
    //   this.emitter.emit("getData", this.text);
    // },
    triggerPanel() {
      this.showPanel = true;
      setTimeout(() => (this.showPanel = false), 4000);
    },
    getCartClass(item) {
      // fm
      let cart = JSON.parse(localStorage.getItem("productsInCart")) || [];
      //抓出第一筆資料的id
      let firstItemId = Object.values(cart)[0].productId;
      //所傳入的item就是所有點擊的item的資料
      if (item.productId === firstItemId) {
        return { classNone: this.firstNone };
      }
    },
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
  watch: {},
  computed: {},
  mounted() {
    //讓數字在更新之後，仍然存取到資料
    this.spanNumbers = JSON.parse(localStorage.getItem("cartNumbers")) || 0;
    // this.shoppingCart =
    //   JSON.parse(localStorage.getItem("productsInCart")) || [];
  },
};
</script>

