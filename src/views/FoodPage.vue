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

.product-list-select {
  position: absolute;
  float: right;
  width: 350px;
  right: 218px;
  z-index: 999;
  width: 200px;

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
}
.product-section {
  z-index: -1;
}
//////
</style>


<template>
  <header>
    <Navbar v-bind:parentSpanNumbers="spanNumbers"></Navbar>

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
      <div class="title-part d-flex justify-content-between">
        <h2>美食生活</h2>
        <div class="product-list-select d-flex">
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
      <div class="row product-section row-cols-md-3">
        <div class="col gap-4" v-for="item in food" :key="item.title">
          <div class="card product-card">
            <div class="card-top">
              <a class="card-img-link" href="#">
                <img :src="item.src" class="card-img-top" alt="product-img" />
              </a>
              <div class="btn card-btn" @click="addToCart(item)">
                加入購物車
              </div>
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
  <Pagination></Pagination>

  <!-- <div class="container">
    {{ checkoutGroup }}
  </div> -->
  <a href="" @click="pushData">發送至另一個元件</a>
  <footer>
    <Footer></Footer>
  </footer>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";
import mitt from "mitt";

const emitter = mitt();
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
      cart: [],
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
      food: [
        {
          title: "酵素旅行包(20入/盒)",
          price: 1380,
          src: require("@/assets/img/food/food1-1.png"),
          inCart: 0,
        },
        {
          title: "圓圓母湯 (20瓶/箱)",
          price: 1560,
          src: require("@/assets/img/food/food2-1.png"),
          inCart: 0,
        },
        {
          title: "POPOLAの酵",
          price: 1550,
          src: require("@/assets/img/food/food3-1.png"),
          inCart: 0,
        },
        {
          title: "吶吶的桃花朵朵紅茶包",
          price: 168,
          src: require("@/assets/img/food/food4-1.png"),
          inCart: 0,
        },
        {
          title: "旅行包(6入/盒)",
          price: 1688,
          src: require("@/assets/img/food/food1-2.png"),
          inCart: 0,
        },
        {
          title: "酵素旅包(7入/盒)",
          price: 1688,
          src: require("@/assets/img/food/food1-2.png"),
          inCart: 0,
        },
        {
          title: "酵旅行包(8入/盒)",
          price: 1688,
          src: require("@/assets/img/food/food1-2.png"),
          inCart: 0,
        },
        {
          title: "素旅行包(9入/盒)",
          price: 1688,
          src: require("@/assets/img/food/food1-2.png"),
          inCart: 0,
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
      // console.log(alreadyIndex);
      this.cartNumbers(foods);
      this.totalPrice(foods);
      this.pushData();
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
      //點擊後，選到該品項
      //console.log("point to ", theFood);
      // 設定初始化。並先取得localstorage的資料，確認我們的本地是否有資料
      let cartItems = localStorage.getItem("productsInCart");
      //將取得的資料，轉換為js物件形式
      cartItems = JSON.parse(cartItems);
      //check localStorage 是否為null
      if (cartItems != null) {
        if (cartItems[theFood.title] == undefined) {
          cartItems = {
            ...cartItems,
            //物件名稱：內容
            [theFood.title]: theFood,
          };
        }
        cartItems[theFood.title].inCart += 1;
      } else {
        theFood.inCart = 1;
        //變數，存放於localStorage
        cartItems = {
          //物件名稱：內容
          [theFood.title]: theFood,
        };
      }

      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
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
    pushData() {
      emitter.emit("getData", this.displayCartItems);
    },
  },
  watch: {},
  computed: {},
  mounted() {
    //讓數字在更新之後，仍然存取到資料
    this.spanNumbers = JSON.parse(localStorage.getItem("cartNumbers")) || 0;
    this.displayCartItems =
      JSON.parse(localStorage.getItem("productsInCart")) || [];
    console.log(this.displayCartItems);
  },
};
</script>

