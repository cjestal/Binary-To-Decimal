<template>
  <div id="app" class="ui container">
    <bin-output></bin-output>
    <CardList></CardList>
  </div>
</template>

<script>
import CardList from './components/CardList';
import Output from './components/Output';

export default {
  name: 'app',
  components: {
    CardList,
    'bin-output': Output,
  },
};
</script>

<style>
  #app {
    padding-top: 5%;
  }
</style>
