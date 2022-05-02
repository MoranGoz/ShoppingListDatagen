<template>
  <div class="self">
    <div class="header">
        <div class="info">
          <div class="name">
            <input class="input" type="text" placeholder="Name" v-model="name">
          </div>
          <div class="price">
            <input class="input" type="text" placeholder="Price" v-model="price" >
          </div>
      </div>
      <div class="button" @click="close()">
        <img src="src/assets/svg/close.svg">
      </div>
    </div>

    <div class="content">
      <div class="description">
        <textarea class="textarea" type="textarea" placeholder="Description" v-model="description" />
      </div>
      <div class="button" @click="onSubmit()">
          <img src="src/assets/svg/submit.svg">
      </div>
    </div>
  </div>
</template>


<script lang="ts">

import router from "@/router";

export default {
  name: 'Self',
  emits:["closeSelf","addItem"],
  props: {
    closeSelf: {
      type: Function
    },
  },
  data(){
    return{
     name:"",
     price:"",
     description:""
    }
  },
  computed:{

  },
  methods:{
    close(){
      this.$emit('closeSelf');
      console.log("test close");
    },
    onSubmit(){
      this.$emit('addItem',this.name ,this.price, this.description);
      this.close();
      console.log("test onSubmit", this.name ,this.price, this.description);
    }
  }
}
</script>



<style src="./self.scss" lang="scss" />
