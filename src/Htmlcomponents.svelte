<script>
  export let jp_props;
  export let props = {};
  let self_closing_tags = ['hr', 'input', 'area', 'base', 'br', 'col', 'embed', 'img', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
  import Dummy from "./Dummy.svelte";
  import Chart from "./Chart.svelte";
  import Switch from './Switch.svelte';
  let components = {
      'Dummy': Dummy,
    'ChartJS': Chart,
    'Switch': Switch,
    'Dummy': Dummy
    
  };
  //event_handler.js requires props
  props['jp_props'] = jp_props;
  
  $:  description_object = {
    style: jp_props.style,
   
  };
  // console.log("jp_props for " + jp_props.html_tag);
  // console.log(jp_props);
  $: if ('attrs' in jp_props){
   for (const [key, value] of Object.entries(jp_props.attrs)) {
     description_object[key] = value;
     
  }
  }


  $: if (jp_props.classes) {
     description_object['class'] = jp_props.classes
  }

  if (jp_props.vue_type == "ChartJS"){
    console.log("chart js description object ");
    console.log(description_object);
    console.log("jp_props");
    console.log(jp_props)
  // console.log("------new htmlcomponent-----");
  // console.log(jp_props.vue_type);
  // console.log(jp_props.classes);
  // console.log("-----------");
  }

  let is_self_closing = false;
  if (self_closing_tags.indexOf(jp_props.html_tag) > -1){
    is_self_closing = true;
    // console.log(jp_props.html_tag);
    // console.log("is self closing");
  }
      
  function dummyEventHandle(event){
    // console.log("from dummyEventHandle");
  }
  function clickEventHandle(event) {
    // console.log("in click eh");
    eventHandler(props, event, false);
  }
  function inputEventHandle(event){
    eventHandler(props, event, false);
  }
  function changeEventHandle(event){
    eventHandler(props, event, false);
  }

  function submitEventHandle(event){
    console.log("in submit event handling");
    console.log("passing the event without data collection");
    eventHandler(props, event, false);
  }
  //for events defined in python -- forward them to eventhandler
  //else use dummyeventhandler
  let click_eh = dummyEventHandle;
  let change_eh = dummyEventHandle;
  let input_eh = dummyEventHandle;
  let submit_eh = dummyEventHandle;

  for (let i = 0; i < jp_props.events.length; i++) {
    switch(jp_props.events[i]) {
    case "before":
      console.log("before event not implemented");
      break;
    case "input":
      input_eh = inputEventHandle;
      break;
    case "change":
      change_eh = changeEventHandle;
      break;
    case "click":
      click_eh = clickEventHandle;
    case "submit":
      submit_eh = submitEventHandle;
      
    }
    
  }
</script>

{#if jp_props.vue_type === "html_component"}
  <!-- svelte's syntax for input differs from other html components -->
{#if is_self_closing}
  <!-- <input  {...description_object} on:input={input_eh} on:change={change_eh}> -->
<svelte:element this={jp_props.html_tag} {...description_object} on:click={click_eh} on:change={change_eh} on:submit|preventDefault={submit_eh}></svelte:element>
{:else}
  <svelte:element this={jp_props.html_tag} {...description_object} on:click={click_eh} on:change={change_eh} on:submit|preventDefault={submit_eh}>
    {#if jp_props.text}
      {jp_props.text}
    {/if}
    
    {#each jp_props.object_props as cobj_props}
      {#if cobj_props.show}
        <svelte:self jp_props={cobj_props}/>
      {/if}
    {/each}

      </svelte:element>
    {/if}

{:else}
  <!-- if component is not a html component; svelte syntax differs for html vs svelte component  -->
  <svelte:component this={components[jp_props.vue_type]}  {...description_object} jp_props={jp_props}/>
{/if}

