<template>
  <div class="ui column segment" @click="increment">
    <h1>{{value}}</h1>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    increment() {
      if (this.value === '1') {
        this.$store.commit('addOne');
      } else {
        this.$store.commit('addZero');
      }
    },
  },
};
</script>

