<style lang="scss" scoped>
//https://codepen.io/nicolaspavlotsky/pen/wqGgLO
.flip-card {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
}
.flip-card-front,
.flip-card-back {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  vertical-align: middle;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
}
.flip-card-front {
  background: hsla(0, 0%, 100%, 0.8);
  color: #fff;
  min-height: 190px;

  img {
    border-radius: 10px;
    height: 190px;
    width: 100%;
  }
}

.flip-card:hover .flip-card-front,
.flip-card:hover .flip-card-back {
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    border-radius: 10px;
    height: 190px;
    width: 100%;
  }
}

.inner {
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
}
.flip-card .flip-card-back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-card .flip-card-front {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-back {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-front {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-card-front .inner p {
  font-size: 2rem;
  //margin-bottom: 2rem;
  position: relative;
}
</style>

<template>
  <div class="container">
    <div class="row row-cols-md-4">
      <div class="col gap-3" v-for="item in productlink" :key="item.title">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front d-flex justify-content-center">
              <img :src="item.frontImg" alt="frontImg" />
              <div class="inner">
                <h1>{{ item.title }}</h1>
                <p>Join us</p>
              </div>
            </div>
            <div class="flip-card-back">
              <a href="#"> <img :src="item.img" alt="Avatar" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productlink"],
  data() {
    return {};
  },
};
</script>

