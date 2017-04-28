const tipList = new Vue({
  el: '.tipList',
  methods: {
    filteredTips: function() {
      if (this.globalState.currCategory.length > 0) {
        return _.filter(this.globalState.tips, {
          category: this.globalState.currCategory
        });
      } else if (this.globalState.currSearch.length > 0) {
        /* precondition: currSearch already lowercase */
        const self = this;
        return _.filter(this.globalState.tips, function(tip) {
          return tip.text.indexOf(self.globalState.currSearch) !== -1;
        });
      } else {
        return this.globalState.tips;
      }
    }
  },
  data: {
    globalState
  }
});
