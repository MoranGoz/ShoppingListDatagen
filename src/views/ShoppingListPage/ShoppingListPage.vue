<template>
  <div class="shopping-list-page">
    <div class="title">Shopping List</div>
    <div class="content">
      <div class="list">
        <ItemComponent
            v-for="(item, index) in list"
            :item="item"
            :index="index+1"
            :key="item.id"
            @toggleIsIsActive="toggleIsIsActive"
            @deleteItem="deleteItem"
        />
      </div>
      <div class="total">
        <div class="label">Total :</div>
        <div>{{ `${totalCost} Nis` }}</div>
      </div>
      <div class="add-item-button" @click="openSelf()">
        <div class="icon-wrapper">
          <img class="icon" src="../../assets/svg/add.svg">
        </div>
        <div class="text">Add Product</div>
      </div>
    </div>
    <Self v-if="show"
          class="self-component"
          @closeSelf="closeSelf"
          @addItem="addItem"
    ></Self>
  </div>
</template>


<script lang="ts">
import IconButton from "/src/components/IconButton/IconButton.vue";
import Item from "/src/entities/type/item";
import Self from "/src/components/self/self.vue";
import ItemComponent from "/src/components/ItemComponents/ItemComponent.vue";

export default {
  components: {ItemComponent, Self, IconButton},
  data() {
    return {
      isSelfOpen: false,
      currentId: 0,
      itemsList: [],
    }
  },
  computed: {
    list(): Item[] {
      return this.itemsList
    },
    show() {
      return this.isSelfOpen;
    },
    totalCost(): number {
      const test = this.itemsList.reduce((total: number, item: Item) => Number(item.price) + Number(total), 0)
      return test
    }
  },
  methods: {
    openSelf() {
      this.isSelfOpen = true;
    },
    closeSelf() {
      this.isSelfOpen = false;
    },
    addItem(name: string, price: number, description: string) {
      this.currentId = this.currentId + 1;
      const newItem = new Item(this.currentId, name, price, description)
      this.itemsList.push(newItem)
    },
    findIndexById(id: number) {
      return this.itemsList.findIndex(item => item.id === id)
    },
    toggleIsIsActive(id: number) {
      const index = this.findIndexById(id);
      if (index !== -1) {
        this.itemsList[index].isActive = !this.itemsList[index].isActive
      }
      return;
    },
    deleteItem(id: number) {
      const index = this.findIndexById(id);
      if (index !== -1) {
        this.itemsList.splice(index, 1)
      }
      return;
    }
  }
}
</script>

<style src="./ShoppingListPage.scss" lang="scss"/>
