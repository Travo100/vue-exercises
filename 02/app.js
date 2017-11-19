new Vue({
  el: '#app',
  data: {
    value: '',
  },
  methods: {
    setValue: function setValueFromInput(event) {
      this.value = event.target.value;
    },
    showAlert: function showAlert() {
      alert('Get in the choppa!');
    },
  },
});
