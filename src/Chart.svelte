<script>
  export let jp_props;
  import { onMount, beforeUpdate } from "svelte";
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  let all_charts = {};
   onMount(() => {
     console.log("in Chart.onMount");
     console.log("options")
     console.log(jp_props.chart_options);

     let canvasID = jp_props.canvas_id;
     var ctx = document.getElementById(canvasID).getContext('2d');
     var chart = new Chart(ctx, {
       type: jp_props.chart_type,
       data: jp_props.chart_data,
       options: jp_props.chart_options
     });
     all_charts[jp_props.chart_name] = chart;
   }
          );
  beforeUpdate(()=>{
    if (all_charts[jp_props.chart_name] == null){
      
    }
    else{
      console.log("destroy and recreate chart");
      all_charts[jp_props.chart_name].destroy();
      let canvasID = jp_props.canvas_id;
      let ctx = document.getElementById(canvasID).getContext('2d');
      var chart = new Chart(ctx, {
        type: jp_props.chart_type,
        data: jp_props.chart_data,
        options: jp_props.chart_options
      });
      all_charts[jp_props.chart_name] = chart;
      console.log("options")
      console.log(jp_props.chart_options);
      
    }
    
  });
</script>

<!-- unable to fix width and height for 0px -->
<!-- <canvas id={canvasID} class={jp_props.classes} style={jp_props.style} width={jp_props.width} height={jp_props.height}/> -->

<canvas id={jp_props.canvas_id} class={jp_props.classes} style={jp_props.style}/>




