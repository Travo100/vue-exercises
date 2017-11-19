new Vue({
  el: '#app',
  data: {
    value: 0,
  },
  computed: {
    result() {
      return this.value < 37 ? 'not there yet' : 'done';
    },
  },
  watch: {
    result() {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    },
  },
});
