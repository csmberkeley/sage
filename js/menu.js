const menu = new Vue({
  el: '.menu',
  methods: {
    toggleMenu: function() {
      this.showMenu = !this.showMenu
    }
  },
  computed: {
    toggleLabel: function() {
      if (this.showMenu) {
        return 'X';
      }
      return 'Jump to ...';
    }
  },
  data: {
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
