<template>
<!-- Featured content -->
<main>
  <!-- Intro content -->
  <h1>Cats are amazing</h1>
  <img src="../assets/cats5.jpg" alt="..." class="float-right">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <!-- Popover -->
  <p>
    <b-button class="btn-success" v-b-popover.hover.top="'This is the best place to learn about cats'" title="Cats galore">
      Did you know?
    </b-button>
  </p>

  <!-- Cat image cards -->
  <div class="card-columns">
  <div v-for="card in cards" class="card bg-light text-white">
    <img :src="card.src" class="card-img" alt="alt.src">
    <div class="card-img-overlay">
      <h5 class="card-title">{{ card.title }}</h5>
      <p class="card-text">{{ card.caption }}</p>
    </div>
  </div>
  </div>
  </div>
</main>
</template>

<script>
const image1 = require('../assets/cats1.jpg');
const image2 = require('../assets/cats2.jpg');
const image3 = require('../assets/cats3.jpg');

export default {
  data() {
    return {
      cards: [{
          id: 1,
          src: image1,
          alt: 'gray cat with blue eyes',
          title: 'This is one of my favorite cats',
          caption: 'Because cute!'
        },
        {
          id: 2,
          src: image2,
          alt: 'kitten with flowers',
          title: 'Flowers',
          caption: 'Go well with cats',
        },
        {
          id: 3,
          src: image3,
          alt: 'domestic longhair tabby cat',
          title: 'Hey',
          caption: 'Cattastic',
        }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
