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
