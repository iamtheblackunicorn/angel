const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight);
camera.position.z = 3;
camera.position.x = -1;
scene.add(camera);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("https://bruno-simon.com/prismic/matcaps/8.png");

const geometry = new THREE.TorusKnotGeometry(0.5,0.2);
const material = new THREE.MeshMatcapMaterial({matcap: texture});
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.y = 0.5;
scene.add(mesh);
const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

const cursor = {x:0, y:0};

window.addEventListener('mousemove', (_event) => {
  cursor.x = _event.clientX / window.innerWidth - 0.5;
  cursor.y = _event.clientY / window.innerHeight - 0.5;
});

const tick = () => {
  window.requestAnimationFrame(tick);
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

tick();