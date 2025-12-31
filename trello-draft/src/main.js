import App from './App.svelte';

const app = new App({
	target: document.body,

});

// GSAP animation
gsap.to(".box", { x: 200, duration: 1 });
gsap.to(".circle",{y:150, duration:1, delay:0.5});
export default app;