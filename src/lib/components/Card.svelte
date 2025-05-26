<script>
  let {image="/logo.jpeg", h="100%", w="100%"} = $props();
</script>

      <img
        class="m-1"
        src="{image}"
        alt="Placeholder image"
        width="{w}"
        height="{h}"
        loading="lazy"
      />

<style>

  img{
  height:100%;
  width:100%;
  }



</style>
