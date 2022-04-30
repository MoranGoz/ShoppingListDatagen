<template>
  <div class="item">
    <div class="index">1</div>
    <div class="name">Tomatoes</div>
    <div class="price">5</div>
    <div class="currency">1</div>
    <div class="index">1</div>
    <div class="options-buttons">
      <icon-button></icon-button>
    </div>
  </div>
</template>


<script setup lang="ts">
import IconButton from "@/components/IconButton/IconButton.vue";

export default {
  name: 'Item',
  components:{
    IconButton
  },
  data() {
    return {
    }
  }
}
</script>



<style src="./Item.scss" lang="scss" />