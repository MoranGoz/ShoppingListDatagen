<template>
  <div :class="`item ${itemClass}`">
    <div class="index" v-text="index"/>
    <div class="name" @click="onItemClick(item.id)" v-text="item.name"/>
    <div class="info">
      <div class="price" v-text="item.price"/>
      <div class="currency" v-text="item.currency"/>
    </div>
    <div class="options-buttons">
      <div class="icon-button" @click="onEditItem()">
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
  name: 'ItemComponent',
  emits: ["toggleIsIsActive", "deleteItem", "navigateToItemPage"],
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
  },
  computed: {
    itemClass(): string {
      return this.item.isActive ? "active" : "inactive"
    }
  },
  methods: {
    onItemClick() {
      this.$root.$emit('navigateToItemPage', this.item);
      router.push({name: 'ItemPage', params: {id: this.item.id}});
    },
    onEditItem() {
      console.log('onEditItem', this.item.id);
      this.$emit("toggleIsIsActive", this.item.id)
    },
    onDeleteItemClick() {
      console.log('onDeleteItemClick', this.item.id);
      this.$emit("deleteItem", this.item.id)
    }
  }
}
</script>


<style src="./ItemComponent.scss" lang="scss"/>
