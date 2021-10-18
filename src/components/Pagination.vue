<style lang="scss" scoped>
</style>


<template>
  <div class="container">
    <div class="row">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a
              class="page__link"
              href="#"
              aria-label="Previous"
              @click.prevent="changePage(-1)"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page__link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page__link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page__link" href="#">3</a>
          </li>
          <li class="page-item">
            <a
              class="page__link"
              href="#"
              aria-label="Next"
              @click.prevent="changePage(1)"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageNumber: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentPage: 1,
      perPage: 4,
      list: [],
    };
  },
  methods: {
    filterItems() {
      let start = (this.currentPage - 1) * this.prePage;
      let end = this.currentPage * this.prePage;
      const resultItem = this.list.slice(start, end);
      return resultItem;
    },
    changePage(num) {
      console.log("num", num);
      this.currentPage = this.currentPage + num;
      // this.$emit("emitcurrentPage", this.currentPage);
      // this.$emit("emitperPage", this.perPage);
    },
    emitNum() {
      this.$emit("emitcurrentPage", this.currentPage);
      this.$emit("emitperPage", this.perPage);
    },
  },
};
</script>

