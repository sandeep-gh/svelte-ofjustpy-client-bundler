<script>
  export let jp_props;
  import { onMount, beforeUpdate } from "svelte";
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  let all_charts = {};
   onMount(() => {
     console.log("in Chart.onMount");
     console.log("props = ");
     console.log(jp_props);

     let canvasID = jp_props.canvas_id;
     var ctx = document.getElementById(canvasID).getContext('2d');
     console.log("ctx for chart");
     console.log(ctx)
     console.log("----------------")

     // var chart = new Chart(ctx,
     //                       {
     //                         type: 'line',
     //                         data: {
     //                           labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
     //                           datasets: [{ 
     //                             data: [86,114,106,106,107,111,133,221,783,2478],
     //                             label: "Africa",
     //                             borderColor: "#3e95cd",
     //                             fill: false
     //                           }, { 
     //                             data: [282,350,411,502,635,809,947,1402,3700,5267],
     //                             label: "Asia",
     //                             borderColor: "#8e5ea2",
     //                             fill: false
     //                           }, { 
     //                             data: [168,170,178,190,203,276,408,547,675,734],
     //                             label: "Europe",
     //                             borderColor: "#3cba9f",
     //                             fill: false
     //                           }, { 
     //                             data: [40,20,10,16,24,38,74,167,508,784],
     //                             label: "Latin America",
     //                             borderColor: "#e8c3b9",
     //                             fill: false
     //                           }, { 
     //                             data: [6,3,2,2,7,26,82,172,312,433],
     //                             label: "North America",
     //                             borderColor: "#c45850",
     //                             fill: false
     //                           }
     //                                     ]
     //                         },
     //                         options: {
     //                           title: {
     //                             display: true,
     //                             text: 'World population per region (in millions)'
     //                           }
     //                         }
     //                       }
     //                      );
     
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
      
    }
    
  });
</script>

<!-- unable to fix width and height for 0px -->
<!-- <canvas id={canvasID} class={jp_props.classes} style={jp_props.style} width={jp_props.width} height={jp_props.height}/> -->

<canvas id={jp_props.canvas_id} class={jp_props.classes} style={jp_props.style}/>




