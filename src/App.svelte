<script>
	import { createWatercolorBackground } from './watercolorBackground.js'
	import Tree from './Tree.svelte'
  import Tooltip from './Tooltip.svelte';
  import background from './assets/background.jpeg'
  import { onMount } from 'svelte';
  import { select } from 'd3-selection';

	// createWatercolorBackground()

	console.log(background)

	let w = 0;
	let h = 0;

	// onMount(() => {
	// 	select('.container')
	// 		.style('background-image', "url(" + background + ")")
	// })

</script>


<div class='container' bind:clientWidth={w} bind:clientHeight={h} >
	<Tree {w} {h} />
	<Tooltip />
</div>


<style>
	.container{
		width:100%;
		height:100%;
		z-index: 10000;
		background-color: black;
		/* background-image: url("./assets/background.png"); */
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
