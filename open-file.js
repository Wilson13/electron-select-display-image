const remote = require('electron').remote;
const dialog = remote.require('electron').dialog
const selectDirBtn = document.getElementById('image-btn')

selectDirBtn.addEventListener('click', function (event) {
  dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      {name: 'Images', extensions: ['jpg', 'png', 'gif']}
    ]
  }, function(path){
    document.getElementById('image-btn').innerHTML = `You selected: ${path}`;
    document.getElementById('display-image').src = `${path}`;
  })
})
