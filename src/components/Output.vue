<template>
  <div>
    <h1>Binary Value: {{binaryValue}}</h1>
    <h1>Decimal Value: {{decimalValue}}</h1>
  </div>
</template>
<script>
  export default {
    computed: {
      binaryValue() {
        return this.$store.getters.getBinary;
      },
      decimalValue() {
        return this.$store.getters.getDecimal;
      },
    },
  };
</script>
