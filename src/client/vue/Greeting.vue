<template>
  <div>
    <h1>{{ greeting }} {{noun}}!</h1>
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {
      greeting: 'Hello',
      noun: 'tom',
    };
  },
};

</script>
<style lang='scss'>
h1 {
  color: red;
}
</style>
