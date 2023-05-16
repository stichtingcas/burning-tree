<script>

  import { tooltipValues } from './stores.js'

</script>

{#if $tooltipValues.visibility === 'visible'}
  <div class='tooltip'
    style="left:{$tooltipValues.x}px; top:{$tooltipValues.y}px">
    <p>
      <strong>Land:</strong> {$tooltipValues.country}<br>
      <strong>Periode:</strong> 19/06/2021-23/06/2021<br>
      <strong>Grootte afgebrand gebied:</strong> 10 ha
    </p>
  </div>
{/if}

<style>
  .tooltip{
    position: fixed;
    background-color: white;
    z-index: 1000;
    text-align: center;
    padding:10px;
    width:fit-content;
    height:37px;
    border: 1px black solid;
    padding-top: 0px;
    font-size:12px;
    border-radius: 5%;
  }
  p{
    margin: 0 auto !important;

  }
</style>
