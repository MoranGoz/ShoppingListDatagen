<template>
  <div class="shopping-list-page">
    <div class="title">Shopping List</div>
    <div class="list">
      <Item v-for="item in list" :item="item" :key="item.id"/>
    </div>
    <div class="total">

    </div>
    <div class="add-item-button">

    </div>
  </div>
</template>


<script lang="ts">
import Item from "/src/components/Item.vue";
import IconButton from "/src/components/IconButton.vue";
import type ItemType from "@/entities/type/item";
import ItemsList from "@/entities/mocks/ItemsListMock";

export default {
  components: {IconButton, Item},
  computed:{
    list: function (): ItemType[] {
      return ItemsList
    }
  }

}
</script>

<style src="./ShoppingListPage.scss" lang="scss" />
