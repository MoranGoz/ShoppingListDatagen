<template>
  <div class="icon-button" >
    <img :src="src">
  </div>
</template>


<script lang="ts">
export default {
  props: ['src'],
}
</script>



<style src="./IconButton.scss" lang="scss" />
