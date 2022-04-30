<template>
  <div class="item">
    <div class="index" v-text="item.id" />
    <div class="name" v-text="item.name" />
    <div class="info">
      <div class="price" v-text="item.price"/>
      <div class="currency" v-text="item.currency" />
    </div>
    <div class="options-buttons">
      <div class="icon-button" >
        <img src="../assets/svg/edit.svg">
      </div>
      <div class="icon-button" >
        <img src="../assets/svg/remove.svg">
      </div>
    </div>
  </div>
</template>


<script lang="ts">

export default {
  props: {
    item: Object
  },
}
</script>



<style src="./Item.scss" lang="scss" />
