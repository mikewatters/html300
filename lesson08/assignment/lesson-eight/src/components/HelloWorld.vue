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
const image2 = require('../assets/cats8.jpg');

export default {
data () {
  return {
    features: [
    { title: 'Yes, meow', intro: 'Kittens are fun', image: image1, alt: 'three adorable gray tabby kittens'},
    { title: 'Hello, sir', intro: 'Tuxedos are for lovers', image: image2, alt: 'a fine looking tuxedo cat'},
    ]
    }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
