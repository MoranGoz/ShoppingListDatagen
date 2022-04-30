<template>
  <div class="button" onclick="buttonClicked()">
    <img :src="imageSrc" />
  </div>
</template>


<script setup lang="ts">
  export default {
    name: "iconButton",
    props: ['imageSrc', 'onclick'],

    methods:{
      buttonClicked() {
        console.log("was click")
      }
    }
  }
</script>



<style src="./TheWelcome.scss" lang="scss" />