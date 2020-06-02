<template>

    <!-- Featured content -->
    <main class="main">
      <div v-for="feature in features" class="jumbotron jumbotron-fluid">
        <div class="container">
        <img :src="feature.image" class="img-fluid" :alt="feature.alt">
          <h1 class="display-4">{{feature.title}}</h1>
          <p class="lead">{{feature.intro}}</p>
          <hr class="my-4">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
      </div>
    </main>

</template>

<script>
const image1 = require('../assets/storyblocks-flowers-in-a-garden-against-blue-sky.jpg');
const image2 = require('../assets/storyblocks-flowers-in-a-garden-against-blue-sky.jpg');

export default {
data () {
  return {
    features: [
    { title: 'Featured topic 1', intro: 'Featured topic content goes here', image: image1, alt: 'sunflowers in a garden against a blue sky'},
    { title: 'Featured topic 2', intro: 'Featured topic content goes here', image: image2, alt: 'sunflowers in a garden against a blue sky'},
    ]
    }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
