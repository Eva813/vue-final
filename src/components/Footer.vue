
<style lang="scss" scoped >
@import "~@/assets/all.scss";

.section-footer {
  h3,
  li {
    font-size: 14px;
    line-height: 1.5;
  }
  h3 {
    color: #333;
  }
  li,
  a {
    color: #494848;
  }
  .need-help {
    @include pad {
      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }
  .about-us {
    a:hover {
      color: #faaf48;
    }
  }
  .icon-list {
    img {
      height: 44px;
      width: auto;
    }
  }
  .contact-part {
    padding: 30px 0;
  }
  .pay-part {
    padding: 30px 0;
  }
  .need-help {
    @include pad {
      @media (max-width: 768px) {
        margin-bottom: 16px;
      }
    }
  }
  .about-us {
    @include pad {
      @media (max-width: 768px) {
        margin-bottom: 16px;
      }
    }
  }
  .copyright {
    margin-left: 117px;
  }
}
</style>
<template>
  <div class="section-footer">
    <div class="container contact-part border-top justify-content-between">
      <div class="row">
        <div class="col-lg-4 need-help justify-content-center">
          <h3 class="fw-bold">NEED HELP</h3>
          <ul>
            <li>(02)2297-0588</li>
            <li>線上客服</li>
            <li>-官網訂單訊息</li>
            <li>-POPOLA Facebook 粉絲專頁</li>
            <li>Mon-Fri(例假日除外) 9:30AM-6:00PM</li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-12 about-us text-center">
          <h3 class="fw-bold">ABOUT US</h3>
          <ul>
            <li><a href="#" target="_blank"> 購買方法</a></li>
            <li><a href="#" target="_blank">退換貨政策</a></li>
            <li><a href="#" target="_blank">常見Q &amp; A</a></li>
            <li><a href="#" target="_blank">SGS認證</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-12 text-center">
          <h3 class="fw-bold">FOLLOW</h3>
          <ul class="icon-list d-flex justify-content-center">
            <li>
              <a href="#"
                ><img src="@/assets/img/logo/fb-logo.png" alt="facebook-logo"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  src="@/assets/img/logo/ig-logo.png"
                  alt="instagram-logo"
                  srcset=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  src="@/assets/img/logo/youtube-logo.png"
                  alt="youtube-logo"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container pay-part">
      <div class="row">
        <div class="col">
          <ul class="pay-img d-flex justify-content-center">
            <li><img src="@/assets/img/card-img/card_linepay.png" alt="" /></li>
            <li><img src="@/assets/img/card-img/card_visa.png" alt="" /></li>
            <li><img src="@/assets/img/card-img/card_master.png" alt="" /></li>
            <li>
              <img src="@/assets/img/card-img/card_unionpay.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row bg-light text-center p-4">
      <div>
        <div class="copyright">
          2021 &copy; Eva Chan &emsp; &emsp;
          <span> 僅做為個人學習使用，非商業用途</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
