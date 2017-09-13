<template>
  <form action="?" class="search__form" @submit="onSearch">
    <input type="text" class="search__input"
      v-model="title">
    <button type="submit"
      class="search__button"
      :disabled="searching">Search</button>
  </form>
</template>

<script>
import search from '../services/search.js';

export default class RKS {
  data() {
    return {
      title: '',
      searching: false
    }
  },
  methods: {
    onSearch() {
      search(this.title)
        .then(data => {
          this.searching = false;
          // do something with the data
        });
    }
  }
}
</script>

<style lang="less" scoped>
.search__form {
  font-size: 16px;

  button {
    background-color: orange;
    color: white;
  }
}
</style>
