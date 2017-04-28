const globalState = {
  showFlow: true,
  showResults: false,
  showCategory: false,
  tips: []
};

const req = new XMLHttpRequest();
req.addEventListener('load', function() {
  globalState.tips = JSON.parse(this.responseText);
});
req.open('get', 'js/tips.json', true);
req.send();
