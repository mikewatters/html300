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
      <p> <b-button class="btn-success" v-b-popover.hover.top="'This is the best place to learn about cats'" title="Cats galore">
    Did you know?
  </b-button></p>

      <!-- Cat slideshow -->
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/cats1.jpg" alt="gray cat with blue eyes">
            <div class="carousel-caption d-none d-md-block">
              <h5>This is one of my favorite cats</h5>
              <p>Because cute!</p>
            </div>

          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/cats2.jpg" alt="kitten with flowers">
            <div class="carousel-caption d-none d-md-block">
              <h5>Flowers</h5>
              <p>Go well with cats</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/cats3.jpg" alt="domestic longhair tabby cat">
            <div class="carousel-caption d-none d-md-block">
              <h5>Hey</h5>
              <p>Cattastic</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
</main>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
