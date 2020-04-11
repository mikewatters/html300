<template>
  <div id="app">
  <app-header>
  <h1 slot="slot1">Parent line 1</h1>
  <h2 slot="slot2">Parent line 2</h2>
  </app-header>

  <!-- Main navigation -->
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <!-- Logo and hamburger menu -->
    <a class="navbar-brand mb-0 h1" href="index.html"><span class="logo">Wild cats</span></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Nav items and dropdowns aligning to right -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cat toys</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item disabled" href="#">Action 1</a>
            <a class="dropdown-item disabled" href="#">Action 2</a>
            <a class="dropdown-item disabled" href="#">Action 3</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item disabled" href="#">Toy Guide</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Train your cat</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item disabled" href="#">Action</a>
            <a class="dropdown-item disabled" href="#">Action 2</a>
            <a class="dropdown-item disabled" href="#">Action 3</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item disabled" href="#">Training Guide</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Birds to eat</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item disabled" href="#">Action 1</a>
            <a class="dropdown-item disabled" href="#">Action 2</a>
            <a class="dropdown-item disabled" href="#">Action 3</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item disabled" href="#">Bird Guide</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

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
import Header from './components/app-header.vue';

export default {
  name: 'App',
  components: {
  Header
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
