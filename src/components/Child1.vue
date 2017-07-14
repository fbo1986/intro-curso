<template>
  <div class="child1">
    <h1>Child ONE</h1>
    <p>{{ text }}</p>
    <p @click="$emit('customEvent', text2)" >{{ text2 }}</p>
  </div>
</template>

<script>

  export default {
    /* las props son como variables dentro del componente */
    props: ['text', 'text2']
  }

</script>
