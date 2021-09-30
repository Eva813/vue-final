<style lang="scss" scoped>
@import "~@/assets/all.scss";
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
</template>

<script>
export default {
  props: ["innerpanel"],
  data() {
    return {
      firstNone: true,
      shoppingCart: [],
      showPanel: false,
    };
  },
  created() {
    this.emitter.on("getData", (data) => {
      this.shoppingCart = data;
    });
    this.emitter.on("getPanel", (panel) => {
      this.showPanel = panel;
      setTimeout(() => (this.showPanel = false), 4000);
    });
  },
  methods: {
    getCartClass(item) {
      //讓加入的第一筆資料，上方的線條消失
      let cart = JSON.parse(localStorage.getItem("productsInCart")) || [];
      //抓出第一筆資料的id
      let firstItemId = Object.values(cart)[0].productId;
      //所傳入的item就是所有點擊的item的資料
      if (item.productId === firstItemId) {
        return { classNone: this.firstNone };
      }
    },
  },
};
</script>

