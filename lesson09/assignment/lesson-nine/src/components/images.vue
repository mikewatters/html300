<script>
import Card from './card.vue';
import mixins from './mixins.js';

// Paths for images
const image1 = require('../assets/cats1.jpg');
const image2 = require('../assets/cats2.jpg');
const image3 = require('../assets/cats3.jpg');

// Image data
export default {
  components: {
    Card
  },
  mixins: [mixins],
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

<template>
<!-- Featured content -->
<main>
  <!-- Intro content -->
  <h1>Cats are amazing</h1>
  <!-- Magic button -->
  <p>
    <b-button v-if="myVal" @click="myMethod()" class="btn-success" v-b-popover.hover.top="'Make these cats go hmmm.'" title="Do it now">
      Click me to make the magic happen
    </b-button>
  </p>
  <img id="black-border" src="../assets/cats5.jpg" alt="..." class="float-right black-border">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <!-- Image content goes here -->
  <section class="card-columns" v-if="cards">
    <card v-for="card in cards" v-bind:card="card" v-bind:key="card.id">
    </card>
  </section>

</main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.black-border {
  border: 0.5rem solid #444;
}

.red-border {
  border: 0.5rem solid #d9534f;
  width: 50%;
}
</style>
