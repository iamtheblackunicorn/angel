<!--
THE ANGELDUST DUKE'S PORTFOLIO by Alexander Abraham,
a.k.a. "The Black Unicorn", a.k.a. "Angekdust Duke".
Licensed under the MIT license.
-->

<!--
This section holds the canvas
element that holds our actual
3D model.
-->
<template>
<br/>
</template>

<!--
This section holds the actual
three.js content.
We have two seperate functions to handle
the model for different screen sizes.
-->
<script>
// Import the three.js library.
import * as THREE from 'three';

// The URL to the matcap URL.
const textureUrl = 'https://blckunicorn.art/assets/matcaps/1.png';

// The function to display the model
// for desktops.
function desktopModel(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight);
    camera.position.z = 3;
    camera.position.x = -1;
    camera.position.y = 0.3;
    scene.add(camera);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(textureUrl);
    const geometry = new THREE.TorusKnotGeometry(0.5,0.2);
    const material = new THREE.MeshMatcapMaterial({matcap: texture});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = 0.5;
    scene.add(mesh);
    const renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.append(renderer.domElement);
    const cursor = {x:0, y:0};
    const tick = () => {
        window.requestAnimationFrame(tick);
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.01;
        renderer.render(scene, camera);
    }
    tick();
}

// The function to display the model
// for other screen sizes.
function responsiveModel(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight);
    camera.position.z = 4;
    camera.position.x = 0.17;
    camera.position.y = 0.6;
    scene.add(camera);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(textureUrl);
    const geometry = new THREE.TorusKnotGeometry(0.5,0.2);
    const material = new THREE.MeshMatcapMaterial({matcap: texture});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = 0.5;
    scene.add(mesh);
    const renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.append(renderer.domElement);
    const cursor = {x:0, y:0};
    const tick = () => {
        window.requestAnimationFrame(tick);
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.01;
        renderer.render(scene, camera);
    }
    tick();
}

// Calling the respective functions
// based on the screen size.
function main(){
    console.log(window.innerWidth);
    if (window.innerWidth <= 800){
        responsiveModel();
    }
    else {
        desktopModel();
    }
}

// Using and running our model
// responsively.
main();

// Naming and registering the
// component.
export default {
    name: 'ModelCog'
};

</script>
