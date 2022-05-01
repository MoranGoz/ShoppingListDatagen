<template>
  <div :class="`item ${itemClass}`">
    <div class="index" v-text="item.id" />
    <div class="name" @click="onItemClick(item.id)" v-text="item.name" />
    <div class="info">
      <div class="price" v-text="item.price"/>
      <div class="currency" v-text="item.currency" />
    </div>
    <div class="options-buttons" >
      <div class="icon-button" @click="onEditItem()" >
        <img src="../assets/svg/edit.svg">
      </div>
      <div class="icon-button" @click="onDeleteItemClick()">
        <img src="../assets/svg/remove.svg">
      </div>
    </div>
  </div>
</template>


<script lang="ts">

import router from "@/router";

export default {
  name: 'Item',
  props: {
    item: Object
  },
  computed:{
    itemClass(): string {
      return this.item.isActive ? "active" :"inactive"
    }
  },
  methods:{
    onItemClick(){
      router.push({ name: 'itemPage', params: { id: this.item.id } });
    },
    onEditItem(){
      console.log('onEditItem', this.item.id );
    },
    onDeleteItemClick(){
      console.log('onDeleteItemClick', this.item.id );
    }
  }
}
</script>



<style src="./Item.scss" lang="scss" />
