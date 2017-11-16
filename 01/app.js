new Vue({
  el: '#app',
  data: {
    name: 'John Desrosiers',
    age: 35,
    googleImg: "https://www.skisafari.com/sites/ss/files/vail-powder-skier-trees-credit-cody-downard.jpg",
  },
  methods: {
    randFloat: function getRandomFloat() {
      return Math.random();
    }
  }
});
