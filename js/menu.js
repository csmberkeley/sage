const titleToCategory = {
  'Silence': 'silent',
  'Logistics': 'logistic',
  'Imbalance': 'difference',
  'Structure': 'structure',
  'Atmosphere': 'atmosphere',
  'First day': 'firstday',
  'Asking Questions': 'questions'
};

const menu = new Vue({
  el: '.menu',
  methods: {
    toggleMenu: function() {
      this.showMenu = !this.showMenu
    },
    jump: function(sub) {
      this.globalState.currCategory = titleToCategory[sub];
      this.globalState.currSearch = '';
      this.globalState.showTips = true;
      this.globalState.showSearch = false;
      this.showMenu = false;
      setTimeout(function() {$('html,body').animate({scrollTop: $('.tipList').offset().top - 100}); }, 200);

    }
  },
  computed: {
    toggleLabel: function() {
      if (this.showMenu) {
        return '&times;';
      }
      return 'All categories...';
    }
  },
  data: {
    globalState,
    showMenu: false,
    categories: [
      {
        title: 'Situational advice',
        sub: ['Silence', 'Logistics', 'Imbalance']
      },
      {
        title: 'Running a section',
        sub: ['Structure', 'Atmosphere', 'First day', 'Asking Questions']
      }
    ]
  }
});
