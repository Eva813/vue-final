<style lang="scss" scoped>
@import "~@/assets/all.scss";
.inner-bread {
  background-color: #f7f7f7;
  padding: 10px 0;
  font-size: 13px;
  color: #999;
  $breadcrumb-divider: quote(">");
  max-width: 100%;
}
</style>

<template>
  <div class="inner-bread">
    <div class="container">
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">全部商品</a></li>
          <li class="breadcrumb-item active" aria-current="page">美食生活</li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

