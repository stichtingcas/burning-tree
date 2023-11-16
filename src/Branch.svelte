<script>

  import Branch from './Branch.svelte'
  import Leaves from './Leaves.svelte'

  export let startX;
  export let startY;
  export let lastBranchWidth;
  export let branches;
  export let branchNumber;
  export let w;
  export let h;
  export let previousAngle

  // const scale = (number, [inMin, inMax], [outMin, outMax]) => {
  //     // if you need an integer value use Math.floor or Math.ceil here
  //     return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
  // }

  const spread = {
    '1': 0,
    '2': 100,
    '3': 80
  }
  function getLength(depth, fires){
    if(fires === null){
      return 30;
    }else if(depth === 1){
      return h/3
    }else if(depth === 2){
      return Math.random() * h/3 + 40
    }else if(depth === 3){
      return Math.random() * h/4 + 40 + (fires/10)
    }else{
      return 0
    }
  }


  const branch = branches[branchNumber]
  // const branchWidth = (lastBranchWidth / branches.length)
  const branchWidth = (branch.numberOfFires + 1) / 50
  const branchLength = getLength(branches[0].depth, branch.numberOfFires)
  const label = branch.label
  // const maximumDegree = scale(branches[0].depth, [1,10], [20, spread[branches[0].depth]])
  const maximumDegree = spread[branches[0].depth]
  const step = 2*maximumDegree / branches.length
  const min = maximumDegree - step * (branchNumber)
  const max = maximumDegree - step * (branchNumber+1)
  const angle = (Math.floor(Math.random() * (max - min + 1) + min) + previousAngle) * 0.8
  

  function transformLine(startX, endX, startY, endY){
    let linePath = ''

    function transformToArcs(minusPlus){
      let currentY = 0;
      while(currentY < endY){
        let randomY = (endY - currentY < 100)
          ? endY - currentY
          : Math.random() * 100;
        let randomX = Math.random() * 10;
        currentY += randomY
        randomY *= minusPlus

        const newXY = toAngle(randomX, randomY)
        randomX = newXY.newX
        randomY = newXY.newY

        const xAxisRotation = -angle
        const largeArcFlag = 0
        const sweepFlag = 1
        // const sweepFlag = (Math.random() > 0.5)
        //   ? 1
        //   : 0;
        const rx = 20 / branches[0].depth
        const ry = 60
        // const rx = 0.2
        // const ry = 1
        const arc = "a " + rx + " " + ry + " " + xAxisRotation + " " + largeArcFlag + " " + sweepFlag + " " + randomX + " " + randomY + " "
        linePath += arc
      }
    }

    transformToArcs(-1)
    linePath += 'l ' + branchWidth + ' 0 '
    transformToArcs(1)

    return linePath
  }

  function toAngle(x, y){
    const newY = Math.cos(angle * (Math.PI/180)) * y
    const newX = Math.sin(angle * (Math.PI/180)) * y

    return { newX, newY }
  }

  const textXY = (branches[0].depth === 3)
    ? toAngle(10*branchWidth, branchLength + 10)
    : toAngle(10*branchWidth, branchLength/2)
  let textX = textXY.newX
  let textY = textXY.newY
  let textAngle = (angle > 0)
    ? 90 - angle
    : 270 - angle;
  if(branches[0].depth === 3){
    textAngle = (angle > 0)
      ? textAngle - 90
      : textAngle + 90
  }

  const branchEndXY = toAngle(branchWidth, branchLength)
  let branchEndX = branchEndXY.newX
  let branchEndY = branchEndXY.newY

  let branchStartX = 0;
  for(let i=0;i<branchNumber;i++){
    // branchStartX = (i+1) * branchWidth 
    branchStartX += (branches[i].numberOfFires + 1) / 50
  };

  const fillURL = (branches[0].depth === 1)
    ? 'trunk'
    : (angle > 10) 
      ? 'barkRight'
      : (angle < -10)
        ? 'barkLeft'
        : 'barkUp'

</script>
<!-- #7b4402 -->
<g transform='translate({startX+branchStartX},{startY})' stroke='#272105' fill='#272105' pointer-events='null'>
  <path fill='url(#{fillURL})' d='M0 0 {transformLine(0,0,0,branchLength)} z'/>
  {#each branch.Branches as newBranch, i}
    <Branch lastBranchWidth={branchWidth} branches={branch.Branches} branchNumber={i} startX={-branchEndX} startY={-branchEndY} {w} {h} previousAngle={angle} />
  {/each}
  {#if branch.Branches.length === 0}
    <Leaves {branch} {branchLength} {branchWidth} {angle} />
  {/if}
  <text fill='white' stroke='black' stroke-width='1.5' font-size={10 + branchWidth/20} dy="0.32em"
    transform='translate({-textX + branchWidth/2}, {-textY}) rotate({textAngle})'
    text-anchor='middle' pointer-events='null'>
    {label.replaceAll('_', ' ')}
  </text>
  <text fill='white' stroke='none' font-size={10 + branchWidth/20} dy="0.32em"
    transform='translate({-textX + branchWidth/2}, {-textY}) rotate({textAngle})'
    text-anchor='middle' pointer-events='none'>
    {label.replaceAll('_', ' ')}
  </text>
</g>


<style>

</style>
