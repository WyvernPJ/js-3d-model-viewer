  var modelPlayer = this.Js3dModelViewer
  var nameElement = document.getElementById('name')
  var loadingElement = document.getElementById('loading')
  var viewerElement = document.getElementById('viewer')
  var scene = modelPlayer.prepareScene(viewerElement, {
    grid: false,
    background: 'rgb(80, 80, 80)'
  })
  

  viewerElement.addEventListener('loading', function (event) {
    if (event.detail.loaded === 0) {
      nameElement.innerHTML = 'Đã tải...'
    } 
    var progress = Math.floor(100 * event.detail.loaded / event.detail.total)
    loadingElement.innerHTML = progress + '%'
  })

  modelPlayer.loadGlb(
	scene,
	'./assets/dna.glb',
	function () {
		nameElement.innerHTML = 'DNA'
		loadingElement.innerHTML = ''
  })

  var fullScreenButton = document.getElementById('fullscreen-button')
  fullScreenButton.addEventListener('click', function () {
    modelPlayer.goFullScreen(viewerElement)
  })

  var sample1Button = document.getElementById('sample-1-button');
  sample1Button.addEventListener('click', function () {
    modelPlayer.clearScene(scene)
    modelPlayer.resetCamera(scene)
    modelPlayer.hide(scene)
    nameElement.innerHTML = 'DNA'
    modelPlayer.loadGlb(
      scene, 
      './assets/dna.glb',
      function () {
        nameElement.innerHTML = 'DNA'
        loadingElement.innerHTML = ''
    })
  })
  function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }