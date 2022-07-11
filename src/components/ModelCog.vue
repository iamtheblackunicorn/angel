<!--
THE ANGELDUST DUKE'S PORTFOLIO by Alexander Abraham,
a.k.a. "The Black Unicorn", a.k.a. "Angekdust Duke".
Licensed under the MIT license.
-->

<!--
This section holds the actual
three.js content.
We have two seperate functions to handle
the model for different screen sizes.
-->
<script>

// Import the three.js library.
import * as THREE from 'three';

// Naming and registering the
// component.
export default {

    // Naming the component.
    name: 'ModelCog',

    // Initializing empty data for
    // the model to be handled.
    data () {
    },

    // Defining the component's methods.
    methods: {
        // The function to display the model
        // for desktops.
        desktopModel(){
            this.textureUrl = 'https://blckunicorn.art/assets/matcaps/1.png';
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight);
            this.camera.position.z = 3;
            this.camera.position.x = -1;
            this.camera.position.y = 0.3;
            this.scene.add(this.camera);
            this.textureLoader = new THREE.TextureLoader();
            this.texture = this.textureLoader.load(this.textureUrl);
            this.geometry = new THREE.TorusKnotGeometry(0.5,0.2);
            this.material = new THREE.MeshMatcapMaterial({matcap: this.texture});
            this.mesh = new THREE.Mesh(this.geometry, this.material);
            this.mesh.rotation.y = 0.5;
            this.scene.add(this.mesh);
            this.renderer = new THREE.WebGLRenderer({alpha:true});
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.append(this.renderer.domElement);
            const tick = () => {
            window.requestAnimationFrame(tick);
                this.mesh.rotation.y += 0.01;
                this.mesh.rotation.x += 0.01;
                this.renderer.render(this.scene, this.camera);
            }
            tick();
        },

        // The function to display the model
        // for other screen sizes.
        responsiveModel(){
            this.textureUrl = 'https://blckunicorn.art/assets/matcaps/1.png';
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight);
            this.camera.position.z = 4;
            this.camera.position.x = 0.17;
            this.camera.position.y = 0.6;
            this.scene.add(this.camera);
            this.textureLoader = new THREE.TextureLoader();
            this.texture = this.textureLoader.load(this.textureUrl);
            this.geometry = new THREE.TorusKnotGeometry(0.5,0.2);
            this.material = new THREE.MeshMatcapMaterial({matcap: this.texture});
            this.mesh = new THREE.Mesh(this.geometry, this.material);
            this.mesh.rotation.y = 0.5;
            this.scene.add(this.mesh);
            this.renderer = new THREE.WebGLRenderer({alpha:true});
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.append(this.renderer.domElement);
            const tick = () => {
            window.requestAnimationFrame(tick);
                this.mesh.rotation.y += 0.01;
                this.mesh.rotation.x += 0.01;
                this.renderer.render(this.scene, this.camera);
            }
            tick();
        },

        // Handles the adjustement for 
        // different screen sizes.
        windowHandler(){
            console.log(window.innerWidth);
            if (window.innerWidth <= 800){
                this.responsiveModel();
            }
            else {
                this.desktopModel();
            }
        }
    },

    // Calls the window handler
    // AFTER Vue has mounted everything.
    mounted (){
        this.windowHandler()
    }
};
</script>