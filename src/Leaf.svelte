<script>
  import sakura from './assets/sakura.png'
  import fire1 from './assets/fire1.png'
  import fire2 from './assets/fire2.png'
  import fire3 from './assets/fire3.png'
  import fire4 from './assets/fire4.png'

  import { sample } from 'lodash'

  import { tooltipValues } from './stores.js'

  export let x;
  export let y;
  export let angle;
  export let branch;

  function mouseOver(e){
    tooltipValues.set({
    'visibility': 'visible',
    'x': e.clientX,
    'y': e.clientY,
    'country': branch.label
    // 'angle': angle
  })
  }

  function mouseOut(){
    tooltipValues.set({
      'visibility': 'hidden',
      'x': 0,
      'y': 0,
      'country': branch.label

    // 'angle': angle
    })
  }

</script>

<!-- <path fill='#e21a1c' stroke='#ffff33' stroke-width='0.5' opacity='0.7'
  on:mouseover={() => hover = true}
  on:mouseout={() => hover = false}
  d="
    M {x} {y}
    c-10 -2, -10 -20, 0 -30
    m 0 30
    c10 -2, 10 -20, 0 -30
  "
  transform='rotate({Math.random() * 90 - 45 + angle*-1} {x} {y})'
/> -->

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<image href={sample([fire1, fire2, fire3, fire4])} width={6 + Math.random()*15} height={6 + Math.random()*15} x={x-14+Math.random()*14} y={y-14+Math.random()*14}
  on:mouseover={(e) => mouseOver(e)}
  on:mouseout={() => mouseOut()}
  transform='rotate({Math.random() * 60 - 30} {x} {y})'
/>

<style>
  image{
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }
</style>
