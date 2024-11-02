<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";

const chartContainer = ref(null);

onMounted(() => {
  // Set up scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    chartContainer.value.clientWidth / chartContainer.value.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(
    chartContainer.value.clientWidth,
    chartContainer.value.clientHeight
  );
  chartContainer.value.appendChild(renderer.domElement);

  // Position the camera
  camera.position.z = 10;
  camera.position.y = 5;
  camera.lookAt(0, 0, 0);

  // Add a basic light source
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5).normalize();
  scene.add(light);

  // Sample data for the bar chart
  const data = [2, 5, 3, 7, 4]; // Adjust as needed
  const barWidth = 1;
  const barDepth = 1;
  const barSpacing = 1.5;

  // Create green bars based on data
  data.forEach((height, i) => {
    const geometry = new THREE.BoxGeometry(barWidth, height, barDepth);
    const material = new THREE.MeshLambertMaterial({ color: "green" });
    const bar = new THREE.Mesh(geometry, material);

    // Position each bar
    bar.position.x = i * barSpacing;
    bar.position.y = height / 2;
    scene.add(bar);
  });

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();

  // Handle resize
  window.addEventListener("resize", () => {
    renderer.setSize(
      chartContainer.value.clientWidth,
      chartContainer.value.clientHeight
    );
    camera.aspect =
      chartContainer.value.clientWidth / chartContainer.value.clientHeight;
    camera.updateProjectionMatrix();
  });
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
}
</style>
