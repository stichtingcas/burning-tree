<script>
  import Branch from './Branch.svelte'
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  import bark from './assets/bark.jpeg'

  import * as testBranches from './assets/data/data3.json'

  export let w;
  export let h;


  // function fillBranch(branchWidth, depth){
  //   const branchesTest = []
  //   const min = 2
  //   const max = 3
  //   const noOfBranches = (Math.random() < 1/(depth/3))
  //     ? Math.floor(Math.random() * (max - min + 1) + min)
  //     : 0;
  //
  //   for(let i=0;i<noOfBranches;i++){
  //     branchesTest.push({
  //       'label':'World',
  //       'numberOfFires':branchWidth/noOfBranches,
  //       'branches':fillBranch(branchWidth/noOfBranches, depth+1),
  //       'depth':depth
  //     })
  //   }
  //   return branchesTest
  // }

  // const testBranches = fillBranch(100, 1)


  $: console.log(testBranches.Branches)


  onMount(() => {

    const svg = d3.select('svg')
    svg
      .call(d3.zoom().on("zoom", function (event, i) {
        svg.attr("transform", event.transform)
      }))
  })

</script>

<svg>
  <defs>
    <pattern id="bark" patternUnits="userSpaceOnUse" width="100" height="100">
      <image href={bark} x="0" y="0" width="100" height="100" preserveAspectRatio="none"/>
    </pattern>
  </defs>
  {#if testBranches.Branches && w > 0}
    <Branch lastBranchWidth={testBranches.numberOfFires/40} branches={[testBranches]} 
      branchNumber={0} 
      startX={w/2} startY={h-10} {w} {h}
      previousAngle={0} />
  {/if}
</svg>

<style>
  svg{
    width:100%;
    height:100%;
  }

</style>
