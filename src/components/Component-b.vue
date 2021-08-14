<template>
  <div>{{ text }}</div>
</template>

<script>
export default {
  data() {
    return {
      text: "aaaa",
    };
  },
  created() {
    this.emitter.on("getData", (msg) => {
      this.text = msg;
      console.log("getdata componentb");
    });
  },
};
</script>

<style>
</style>
