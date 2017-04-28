const tipList = new Vue({
  el: '.tipList',
  methods: {
    filteredTips: function() {
      console.log(this.globalState.tips);
      return this.globalState.tips;
    }
  },
  data: {
    globalState: globalState
  }
});
