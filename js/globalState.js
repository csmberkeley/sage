const globalState = {
  showFlow: true,
  showSearch: true,
  showTips: false,
  tips: [],
  currCategory: '',
  currSearch: ''
};

const req = new XMLHttpRequest();
req.addEventListener('load', function() {
  globalState.tips = JSON.parse(this.responseText);
});
req.open('get', 'js/tips.json', true);
req.send();
