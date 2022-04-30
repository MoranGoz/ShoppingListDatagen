<template>
  <div class="shopping-list-page">
    <div class="title">
      <h1>Shopping List</h1>
    </div>
    <div class="list">
        <TheWelcome />
    </div>
    <div class="total">

    </div>
    <div class="add-item-button">

    </div>
  </div>
</template>

<style src="./ShoppingListPage.scss" lang="scss" />


<script>
import Item from "@/components/Item/Item";
import IconButton from "@/components/IconButton/IconButton";
import TheWelcome from "@/components/TheWelcome";
export default {
  components: {TheWelcome, IconButton, Item}
}
</script>