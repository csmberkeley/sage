const flow = new Vue({
  el: '.flow-container',
  computed: {
    currPoint: function() {
      return this.points[this.currPointId];
    }
  },
  methods: {
    flowNext: function(next) {
      if (next) {
        this.frontFlipping = !this.frontFlipping;
        const self = this;
        setTimeout(function() {
          self.currPointId = next;
          self.useFront = !self.useFront;
        }, 400);
      }
    }
  },
  data: {
    currPointId: 1,
    frontFlipping: false,
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
            text: 'Silent Section'
          },
          {
            text: 'Logistical Issue'
          },
          {
            text: 'Students with different levels of understanding'
          }
        ]
      },
      3: {
        text: 'What advice you looking for?',
        options: [
          {
            text: 'The structure of a section'
          },
          {
            text: 'Setting the section atmosphere',
          },
          {
            text: 'First day tips'
          },
          {
            text: 'Asking students good questions'
          }
        ]
      },
    }
  }
});
