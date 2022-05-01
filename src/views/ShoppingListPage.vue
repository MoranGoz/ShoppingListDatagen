<template>
  <div class="shopping-list-page">
    <div class="title">Shopping List</div>
    <div class="content">
      <div class="list">
        <Item v-for="item in list" :item="item" :key="item.id"/>
      </div>
      <div class="total">
        <div class="label">Total :</div>
        <div>{{ `${totalCost} Nis` }}</div>
      </div>
      <div class="add-item-button">
        <div class="icon-wrapper">
          <img class="icon" src="../assets/svg/add.svg">
        </div>
        <div class="text">Add Product</div>

      </div>
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
    list(): ItemType[] {
      return ItemsList
    },
    totalCost () :number{
      const test = ItemsList.reduce((total: number, item: ItemType) => item.price + total, 0)
      return test
    }
  }

}
</script>

<style src="./ShoppingListPage.scss" lang="scss" />
