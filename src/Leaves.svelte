<script>
  import Leaf from './Leaf.svelte'

  // export let startX;
  // export let startY;
  export let branch;
  export let branchWidth;
  export let branchLength;
  export let angle;

  function toAngleX(distance){return Math.sin((180+angle) * (Math.PI/180)) * distance}
  function toAngleY(distance){return Math.cos((180+angle) * (Math.PI/180)) * distance}

  let leaves = []

  const step = branchLength/(Math.floor(branch.numberOfFires)+1)
  for(let i=0;i<Math.ceil((branch.numberOfFires)+1);i++){
    leaves.push({
      'x':toAngleX((i+1)*step),
      'y':toAngleY((i+1)*step)
    })
  }

</script>

{#each leaves as leaf}
  <Leaf x={leaf.x} y={leaf.y} {angle} {branch} />
{/each}


<style>
</style>
