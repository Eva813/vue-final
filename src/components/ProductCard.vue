
<style lang="scss" scoped>
.product-card {
  border: 0;
}
</style>
<template>
  <div class="container d-flex mb-3 justify-content-around">
    <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1">
      <div
        class="col items-card"
        v-for="(item, key) in ifood.slice(0, 4)"
        :key="item.title"
      >
        <div class="card product-card align-items-center">
          <div class="card-top">
            <router-link class="card-img-link" to="/foodproduct">
              <img :src="item.src" class="card-img-top" alt="product-img" />
            </router-link>
            <div
              class="btn card-btn"
              @click="
                addToCart(item),
                  triggerPanel(),
                  pushData(),
                  putShopingCart(item, key)
              "
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
        </div>
      </div>
    </div>
  </div>
  <!-- <span class="btn-add-to-cart js-btn-add-to-cart mobile-cart visible-xs visible-sm  ">  <i class="fa fa-shopping-cart"></i>        </span> -->
</template>

<script>
export default {
  props: ["ifood"],
  data() {
    return {
      spanNumbers: 0,
      shoppingCart: [],
      showPanel: true,
    };
  },
  methods: {
    addToCart(foods) {
      this.cartNumbers(foods);
      this.totalPrice(foods);
    },
    cartNumbers(theFood) {
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
      //console.log(this.shoppingCart);
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
    triggerPanel() {
      this.showPanel = true;
      setTimeout(() => (this.showPanel = false), 4000);
    },
    pushData() {
      this.emitter.emit("getData", this.shoppingCart);
      // this.emitter.emit("go", this.goto());
      this.emitter.emit("getPanel", this.showPanel);
      console.log(this.showPanel);
    },
    goto() {
      // var element = this.$refs[refName];
      // console.log(element);
      // var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    putShopingCart(item, key) {
      //console.log(item);
      // url = "https://4511-1-169-71-198.ngrok.io/cart" + item.id;
      axios({
        method: "put",
        url: "https://eva-final-project.herokuapp.com/cart/" + item.id,
        //API要求的資料
        data: {
          item,
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
