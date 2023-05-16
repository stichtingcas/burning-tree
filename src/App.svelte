<script>
	import { createWatercolorBackground } from './watercolorBackground.js'
	import Tree from './Tree.svelte'
  import Tooltip from './Tooltip.svelte';

	// createWatercolorBackground()

	let w = 0;
	let h = 0;
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
	}
</style>
