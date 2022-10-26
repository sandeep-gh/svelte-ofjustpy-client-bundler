<script>
  export let name;
  export let justpyComponents;

  var btncolor = "bg-green-200/50";
  function on_click(event){
    console.log("on click called");
    btncolor = "bg-pink-200/50";
  }

  import Htmlcomponent from './Htmlcomponents.svelte';
  import Dummy from "./Dummy.svelte";
  import Chart from "./Chart.svelte";
  import Switch from './Switch.svelte';



  
//   let uno = false;
//   let dummy_props = {};
  let selected_component = Htmlcomponent;
  let components = {'html_component': Htmlcomponent,
                     'Dummy': Dummy,
                     'ChartJS': Chart,
                     'Switch': Switch
                    
                    };
  console.log("the justpyComponents");
  console.log(JSON.stringify(justpyComponents));
  console.log(justpyComponents);
</script>
  
{#each justpyComponents as jpcomp}
  {#if jpcomp.vue_type === "html_component"}
    <svelte:component this={Htmlcomponent} jp_props={jpcomp}/>
  {:else}
    <svelte:component this={components[jpcomp.vue_type]} jp_props={jpcomp} />
  {/if}
  
  
{/each}



