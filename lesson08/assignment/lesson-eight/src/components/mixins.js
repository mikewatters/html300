export default {
  created: function() {
    console.log('this is working')
  },
  data() {
    return {
      isHidden: false,
      myVal: true
    }
  },
  methods: {
    toggleShowHide() {
      this.isHidden = !this.isHidden;
    },
    myMethod() {
      console.log("and this is working");
      var element = document.getElementById("black-border");
      element.classList.toggle("red-border");
    }
  }
}
