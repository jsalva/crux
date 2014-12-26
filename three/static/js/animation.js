var scene, camera, renderer;
var geometry, material, mesh, texture;
var controls;
var MESH_LOCATION = "/static/mesh/pop.json";
var TEXTURE_LOCATION = "/static/mesh/pop_color.png"

function init() {

    scene = new THREE.Scene();


    camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 5.0, 2000 );
    camera.position.set(100,0,0)
    scene.add( camera );


    // Load in the mesh and add it to the scene.
    var loader = new THREE.JSONLoader();
    loader.load( MESH_LOCATION, function(geometry){
    texture = THREE.ImageUtils.loadTexture(TEXTURE_LOCATION, undefined ,function(texture) {
        var material = new THREE.MeshBasicMaterial({map: texture});
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0,5,4);
        scene.add(mesh);
        render();
      })
    });

    var container = document.getElementById('3DContainer');
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.damping = 0.2;
    //controls.userPanSpeed = 25.0;
    controls.addEventListener( 'change', render );

    renderer.setClearColorHex(0x000000, 1);//0x333F47

    // Create a light, set its position, and add it to the scene.
    var ambient = new THREE.AmbientLight(0x666666)
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-50,30,50);
    scene.add( light );

    window.addEventListener( 'resize', onWindowResize, false );
}

function render(){
  renderer.render( scene, camera );
}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	render();

}


function animate() {

    requestAnimationFrame( animate );
    controls.update()

}

$(document).ready(function(){
  init();
  animate();
})
