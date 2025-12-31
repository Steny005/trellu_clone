import App from './App.svelte';
import { supabase } from './supabaseClient';

const app = new App({
	target: document.body,

});

console.log('Supabase client:', supabase);

// GSAP animation
gsap.to(".box", { x: 200, duration: 1 });
gsap.to(".circle",{y:150, duration:1, delay:0.5});
export default app;