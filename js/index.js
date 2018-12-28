var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

 //controls = new THREE.OrbitControls(camera, renderer.domElement)


//create the shpae
var geometry = new THREE.BoxGeometry(2,2,2);
var cubeMaterials = [
    new THREE.MeshPhongMaterial( { ambient: 0x4a8d5f, color: 0xffe77f, specular: 0x555555, shininess: 80 } ),
    new THREE.MeshPhongMaterial( { ambient: 0x4a8d5f, color: 0xffe77f, specular: 0x555555, shininess: 80 } ),
    new THREE.MeshPhongMaterial( { ambient: 0x4a8d5f, color: 0xffe77f, specular: 0x555555, shininess: 80 } ),
    new THREE.MeshPhongMaterial( { ambient: 0x4a8d5f, color: 0xffe77f, specular: 0x555555, shininess: 80 } ),
    new THREE.MeshPhongMaterial( { ambient: 0x4a8d5f, color: 0xffe77f, specular: 0x555555, shininess: 80 } ),
    new THREE.MeshPhongMaterial( { ambient: 0x4a8d5f, color: 0xffe77f, specular: 0x555555, shininess: 80 } )

]

//light
var light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 50, 50, 50 ).normalize();
scene.add(light);

//backgorund color
renderer.setClearColor (0x75b2a6, 1);


//create material color or image texture
var material = new THREE.MeshFaceMaterial(cubeMaterials);
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

//game logic
var update = function(){
        cube.rotation.x += 0.003;
        cube.rotation.y += 0.003;
}

var render = function(){
    renderer.render(scene, camera);
}

var GameLoop = function(){
    requestAnimationFrame(GameLoop);
    update();
    render();
};
GameLoop();


//jquery manipulation
$(document).ready(function(){
    $("#insta").click(function(){
        window.location='http://thexxnightandday.com/'
    });
  });

//Srolling animation code
window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('.artists', {
    duration: 2000,
    origin:'top',
    distance:'300px'
  });

sr.reveal('.about', {
    duration: 2000,
    origin:'left',
    distance:'300px',
    viewFactor: 0.2
  });

  sr.reveal('#firstTickets', {
    duration: 2000,
    origin:'left',
    distance:'300px',
    viewFactor: 0.2
  });

  sr.reveal('#secondTickets', {
    duration: 2000,
    origin:'right',
    distance:'300px',
    viewFactor: 0.2
  });

  sr.reveal('#thirdTickets', {
    duration: 2000,
    origin:'left',
    distance:'300px',
    viewFactor: 0.2
  });

  sr.reveal('#fourthTickets', {
    duration: 2000,
    origin:'right',
    distance:'300px',
    viewFactor: 0.2
  });

  sr.reveal('#feed', {
    duration: 2000,
    origin:'bottom',
    distance:'300px',
    viewFactor: 0.2
  });