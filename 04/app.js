const classNames = {
  highlight: 'highlight',
  shrink: 'shrink',
};
new Vue({
  el: '#exercise',
  data: {
    color: '',
    color2: '',
    effectClass: '',
    isWideInput: 'false',
    p5input: {
      width: 100,
      height: 100,
      border: 2,
      color: 'blue',
    },
    progBarStyle: { width: '1px' },
  },
  computed: {
    isWide() {
      return this.isWideInput.toLowerCase() === 'true';
    },
    p5style() {
      return {
        width: `${this.p5input.width}px`,
        height: `${this.p5input.height}px`,
        border: `${this.p5input.border}px solid black`,
        backgroundColor: this.p5input.color,
      };
    },
  },
  methods: {
    startEffect() {
      const { highlight, shrink } = classNames;
      this.effectClass = highlight;
      setInterval(() => {
        this.effectClass = this.effectClass === highlight ? shrink : highlight;
      }, 1500);
    },
    startProgress() {
      const max = 100;
      let width = 1;
      const timerId = setInterval(() => {
        width += 10;
        this.progBarStyle.width = `${width}px`;
        if (width >= max) clearInterval(timerId);
      }, 100);
    },
  },
});
