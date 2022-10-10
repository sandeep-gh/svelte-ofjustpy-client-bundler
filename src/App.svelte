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
//   let selected_component = Htmlcomponent;
//   let components = {'html_component': Htmlcomponent,
//                     'Dummy': Dummy,
//                     'ChartJS': Chart,
//                     'Switch': Switch
                    
//                    };
//   console.log("the justpyComponents");
//   console.log(JSON.stringify(justpyComponents));
// </script>
// <!-- <div class="bg-pink-100"> -->
// <!--   Things -->
// <!--   </div> -->
// <!-- <main class="text-center py-12 max-w-xs mx-auto sm:max-w-none"> -->
// <!--   <h1 class="text-red-400 text-6xl uppercase leading-loose font-thin">Hello {name}!</h1> -->
// <!--   <p class="text-stone-700 mt-4"> -->
// <!--     Visit the <a class="text-sky-600 hover:underline" href="https://svelte.dev/tutorial"> -->
<!--     Svelte tutorial</a> to learn how to build Svelte apps. -->
<!--   </p> -->
<!--   <button class={btncolor} on:click={on_click}> -->
<!--     clickme -->
<!--     </button> -->
  <!-- </main> -->
<!-- <div class="flex justify-between mt-5"> -->
<!--   <Switch bind:checked="{uno}" id="uno" text="uno" /> -->
<!-- </div> -->
  
{#each justpyComponents as jpcomp}
  {#if jpcomp.vue_type === "html_component"}
    <svelte:component this={Htmlcomponent} jp_props={jpcomp}/>
  {:else}
    <svelte:component this={components[jpcomp.vue_type]} jp_props={jpcomp} />
  {/if}
  
  
{/each}



