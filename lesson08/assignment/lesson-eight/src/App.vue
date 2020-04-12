<template>
  <div id="app">
  <banner>
  <div slot="slot1">Wild cats!</div>
  </banner>

  <!-- Secondary navigation -->
  <div class="row">
    <div class="col-sm-2">
    <ul class="nav flex-sm-column">
      <li class="nav-item">
        <router-link to="/images" class="nav-link">Favorite cats and images</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/accordion" class="nav-link">Information about cats</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/grid" class="nav-link">An intellectual understanding of cats</router-link>
      </li>
    </ul>
  </div>

  <!-- Main content -->
  <div class="col-sm-10">
  <router-view/>
  </div>
  </div>

<!-- Footer -->
<footer>
<div class="mew-footer">
  <p>Mike Watters | HTML300</p>
</div>
</footer>

  </div>


</template>

<script>
import Banner from './components/Banner.vue';

export default {
  name: 'App',
  components: {
  Banner
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2&family=Flavors&display=swap');
#app {
  font-family: 'Baloo Thambi 2', cursive;
  font-size: 1.1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
.logo {
font-family: 'Flavors', cursive;
font-size: 4rem;
}
.btn {
font-size: 1.25rem;
}
.container {
  width: 95%;
  margin: 1rem;
  padding: 1rem;
  }

.jumbotron {
  padding: 1rem 0;
  }

html {
    box-sizing: border-box;
}

*,
*:after,
*:before {
    box-sizing: inherit;
}

main {
padding: 2rem;
}

.col-sm-2 {
padding: 2rem 0rem 0rem 2rem;
}

.float-right {
  margin: 0.5rem 0rem 1rem 1rem;
}

.img-fluid {
  margin-bottom: 1rem;
  width: 100%;
}

.mew-footer {
  width: 100%;
  height: auto;
  background-color: #343a40;
  color: #fff;
  padding: 2rem 2rem 1rem;
  margin-top: 1rem;
  text-align: center;
}

</style>
