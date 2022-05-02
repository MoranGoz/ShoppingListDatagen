<template>
  <div class="item-page">
    <div class="header">
      <img  @click="back" src="../assets/svg/back.svg">
    </div>
    <div class="content">
      <div class="title">tomato</div>
      <div class="info">The tomato is the edible berry of the plant Solanum lycopersicum,[1][2] commonly known as a tomato plant. The species originated in western South America and Central America.[2][3] The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.[2][5] The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.[2]</div>
    </div>
  </div>

</template>

<script lang="ts">


import router from "@/router";

export default {

  mounted() {
    console.log(this.$route.params?.id)
    // getItemById((this.$router.params.id))
  },

  methods: {
    back() {
      router.go(-1);
    }
  }
}




</script>

<style src="./ItemPage.scss" lang="scss"/>
