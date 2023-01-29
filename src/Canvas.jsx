import * as THREE from "three";
import { useEffect, useRef } from "react";
import spaceImg from "./assets/space.jpg";
import moonImg from "./assets/moon.jpg";
import torusImg from "./assets/donut2.jpeg";
import normalTorusImg from "./assets/donut3.jpg";
import avatarImg from "./assets/pasha.jpg";

const Canvas = () => {
	useEffect(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const bg = document.getElementById("bg");
		const renderer = new THREE.WebGLRenderer({
			canvas: bg,
		});
		// document.body.appendChild(renderer.domElement);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, 400);
		camera.position.setZ(30);

		//*---------- Pics ------------------------------

		const spaceTexture = new THREE.TextureLoader().load(spaceImg);
		const moonTexture = new THREE.TextureLoader().load(moonImg);
		const torusTexture = new THREE.TextureLoader().load(torusImg);
		const normalTorusTexture = new THREE.TextureLoader().load(
			normalTorusImg
		);
		const pashaTexture = new THREE.TextureLoader().load(avatarImg);

		//*-------------add bg picture--------
		scene.background = spaceTexture;

		//*----Add Torus-----------------------------
		const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
		const material = new THREE.MeshStandardMaterial({
			map: torusTexture,
			normalMap: normalTorusTexture,
		});

		const torus = new THREE.Mesh(geometry, material);

		scene.add(torus);

		//*-- Add light to the figure-----------------
		const pointLight = new THREE.PointLight(0xffffff);
		pointLight.position.set(5, 5, 5);

		const ambientLight = new THREE.AmbientLight(0xffffff);
		scene.add(pointLight, ambientLight);

		// const lightHelper = new THREE.PointLightHelper(pointLight);
		// const gridHelper = new THREE.GridHelper(200, 50);
		// scene.add(lightHelper, gridHelper);

		// const controls = new OrbitControls(camera, renderer.domElement);

		//*-------Star Logic ---------------------
		function addStar() {
			const geometry = new THREE.SphereGeometry(0.25, 24, 24);
			const material = new THREE.MeshStandardMaterial({
				color: 0xd7b52d,
			});
			const star = new THREE.Mesh(geometry, material);

			const [x, y, z] = Array(3)
				.fill()
				.map(() => THREE.MathUtils.randFloatSpread(100));

			star.position.set(x, y, z);
			scene.add(star);
		}

		Array(200).fill().forEach(addStar);

		//*------Avatar------------------------

		const pasha = new THREE.Mesh(
			new THREE.BoxGeometry(5, 5, 5),
			new THREE.MeshBasicMaterial({ map: pashaTexture })
		);
		pasha.position.set(-10, 10, 10);

		scene.add(pasha);
		const pasha1 = new THREE.Mesh(
			new THREE.BoxGeometry(5, 5, 5),
			new THREE.MeshBasicMaterial({ map: pashaTexture })
		);
		pasha.position.set(-10, -10, 10);

		scene.add(pasha1);

		//*-------Moon-------------------------

		const moon = new THREE.Mesh(
			new THREE.SphereGeometry(3, 32, 32),
			new THREE.MeshStandardMaterial({
				map: moonTexture,
			})
		);
		moon.position.set(10, 10, 10);
		scene.add(moon);

		//*-------start animation--------------
		function animate() {
			requestAnimationFrame(animate);

			torus.rotation.x += 0.01;
			torus.rotation.y += 0.003;
			torus.rotation.z += 0.01;

			pasha.rotation.x += -0.01;
			pasha.rotation.y += -0.005;
			pasha.rotation.z += -0.01;

			moon.rotation.x += -0.02;
			moon.rotation.y += -0.01;
			moon.rotation.z += -0.01;

			// controls.update();

			renderer.render(scene, camera);
		}

		animate();
	}, []);

	return (
		<section>
			<canvas id="bg"></canvas>
		</section>
	);
};

export default Canvas;
