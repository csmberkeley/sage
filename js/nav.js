const categoryToTitle = {
  'firstday': 'your first section',
  'structure': 'section structure',
  'atmosphere': 'section atmosphere',
  'silent': 'silent sections',
  'difference': 'differences in student learning',
  'questions': 'asking good questions',
  'logistic': 'logistics'
};

const search = new Vue({
  el: '.nav',
  methods: {
    runSearch: function() {
      this.globalState.showSearch = false;
      this.globalState.currSearch = this.keywords.toLowerCase();
      this.globalState.currCategory = '';
      this.globalState.showTips = true;
      setTimeout(function() {$('html,body').animate({scrollTop: $('.tipList').offset().top - 100}); }, 200);
    },
    resetGlobalState: function() {
      location.reload();
    }
  },
  computed: {
    tipLabel: function() {
      if (this.globalState.currCategory.length > 0) {
        return 'on ' + categoryToTitle[this.globalState.currCategory];
      } else if (this.globalState.currSearch.length > 0) {
        return 'related to \"' + this.globalState.currSearch + '\"';
      }
    }
  },
  data: {
    globalState,
    keywords: ''
  }
});
