<template>
<!-- Header -->
<div class="banner" id="banner">
  <!-- Alert -->
  <div class="alert alert-info alert-dismissible fade show" role="alert">
    <strong>{{ message | makeUppercase }}</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <!-- Main navigation -->
  <header>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <!-- Logo and hamburger menu -->
      <a class="navbar-brand mb-0 h1" href="index.html"><span class="logo">
          <slot name="slot1"></slot>
        </span></a>
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
  </header>
</div>
</template>

<script>
// Data and filter
export default {
  name: 'banner',
  data() {
    return {
      message: 'This only displays in an adorable cat emergency!',
    }
  },
  filters: {
    makeUppercase: function(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style scoped>
.alert {
  margin: 0rem;
}
</style>
