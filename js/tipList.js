const tipList = new Vue({
  el: '.tipList',
  methods: {
    filteredTips: function() {
      if (this.globalState.currCategory.length > 0) {
        this.foundNone = false;
        return _.filter(this.globalState.tips, {
          category: this.globalState.currCategory
        });
      } else if (this.globalState.currSearch.length > 0) {
        /* precondition: currSearch already lowercase */
        const self = this;
        const found = _.filter(this.globalState.tips, function(tip) {
          return tip.text.indexOf(self.globalState.currSearch) !== -1;
        });
        if (found.length === 0) {
          this.foundNone = true;
        }
        return found;
      } else {
        this.foundNone = false;
        return this.globalState.tips;
      }
    }
  },
  data: {
    globalState,
    foundNone: false
  }
});
