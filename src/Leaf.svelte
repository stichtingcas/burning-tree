<script>
  import sakura from './assets/sakura.png'
  import fire1 from './assets/fire1.png'
  import fire2 from './assets/fire2.png'
  import fire3 from './assets/fire3.png'
  import fire4 from './assets/fire4.png'
  import fire5 from './assets/fire5_200x210.png'
  import fire6 from './assets/fire6_200x210.png'
  import fire7 from './assets/fire7_2_200x200.png'
  import fire8 from './assets/fire8_200x200.png'
  import fire9 from './assets/fire9_200x150.png'
  import fire10 from './assets/fire10_200x200.png'
  import fire11 from './assets/fire11.png'
  import fire12 from './assets/fire12.png'
  import fire13 from './assets/fire13.png'
  import smoke from './assets/smoke.png'
  import smoke3 from './assets/smoke3.png'

  import { sample } from 'lodash'

  import { tooltipValues } from './stores.js'

  export let x;
  export let y;
  export let angle;
  export let branch; 
  export let randomFire

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

  const fires = [fire5, fire7, fire10, fire12,fire5, fire7, fire10, fire12, smoke3]

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
<image href={(Math.random() > 0.5) ? fires[randomFire%fires.length] : sample(fires)} width={0 + Math.random()*90} height={0 + Math.random()*90} x={x-10+Math.random()*20} y={y-10+Math.random()*20}
  transform='rotate({Math.random() * 60 - 30} {x} {y})'
  style='filter: drop-shadow({Math.random()*1}px {Math.random()*2}px {Math.random()*1}px rgb(0 0 0 / {0.5+0.5*Math.random()}))'
/>

<!-- on:mouseover={(e) => mouseOver(e)}
on:mouseout={() => mouseOut()} -->
<style>
  /* image{
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  } */
</style>
