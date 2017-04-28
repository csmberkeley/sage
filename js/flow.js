const flow = new Vue({
  el: '.flow-container',
  computed: {
    currPoint: function() {
      return this.points[this.currPointId];
    }
  },
  methods: {
    flowNext: function(option) {
      if (!option) {
        /* set up for going back */
        option = {next: 1};
      }
      if (option.next) {
        this.frontFlipping = !this.frontFlipping;
        const self = this;
        setTimeout(function() {
          self.currPointId = option.next;
          self.useFront = !self.useFront;
        }, 400);
      } else if (option.category) {
        this.globalState.currCategory = option.category;
        this.globalState.currSearch = '';
        this.globalState.showTips = true;
        this.globalState.showSearch = false;
        setTimeout(function() {$('html,body').animate({scrollTop: $('.tipList').offset().top - 100}); }, 200);
      }
    },
  },
  data: {
    globalState,
    currPointId: 1,
    frontFlipping: false,
    hiding: false,
    useFront: true,
    points: {
      1: {
        text: 'Is there a situational problem with your section or students?',
        options: [
          {
            text: 'Yes',
            next: 2,
          },
          {
            text: 'No',
            subtext: 'I’m just looking for advice',
            next: 3
          }
        ]
      },
      2: {
        text: 'What problem are you facing?',
        options: [
          {
            text: 'Silent Section',
            category: 'silent'
          },
          {
            text: 'Logistical Issue',
            category: 'logistic'
          },
          {
            text: 'Students with different levels of understanding',
            category: 'difference'
          }
        ]
      },
      3: {
        text: 'What advice you looking for?',
        options: [
          {
            text: 'The structure of a section',
            category: 'structure'
          },
          {
            text: 'Setting the section atmosphere',
            category: 'atmosphere'
          },
          {
            text: 'First day tips',
            category: 'firstday'
          },
          {
            text: 'Asking students good questions',
            category: 'questions'
          }
        ]
      },
    }
  }
});
