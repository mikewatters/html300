<template>

  <!-- Featured content -->
  <main class="main">
    <!-- Intro content -->

    <h1>More about cats</h1>
    <!-- Grids -->
    <div v-for="item in items" id="grid">
    <div class="row">
      <div class="col-sm-8">
{{ item }}
<img src="../assets/cats6.jpg" alt="another orange cat with glasses" class="float-right">
<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi, voluptatibus quae veniam ab, quia, rerum, magnam consectetur nam placeat eum maiores. Rerum earum delectus doloribus qui ab accusantium accusamus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, magnam, nam. Quo facilis ipsa, facere rem eum assumenda architecto ad ut voluptate. A, suscipit, fuga ipsa ipsum soluta voluptatibus provident?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi, voluptatibus quae veniam ab, quia, rerum, magnam consectetur nam placeat eum maiores. Rerum earum delectus doloribus qui ab accusantium accusamus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, magnam, nam. Quo facilis ipsa, facere rem eum assumenda architecto ad ut voluptate. A, suscipit, fuga ipsa ipsum soluta voluptatibus provident?</p>"

      </div>
      <div class="col-sm-4">
        <h4>Sidebar</h4>
        <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum voluptatum, delectus officia, consectetur quos expedita nesciunt blanditiis dignissimos reprehenderit accusamus quaerat quas rerum illo maxime dolores fuga amet
            fugit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur praesentium maiores nihil reiciendis, porro delectus ea sed vitae veritatis nemo ex nisi doloremque, perferendis! Recusandae harum dolorum consectetur, et
            odio?</small></p>
        <img class="img-fluid" src="../assets/cats7.jpg" alt="calico cat standing">
        <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum voluptatum, delectus officia, consectetur quos expedita nesciunt blanditiis dignissimos reprehenderit accusamus quaerat quas rerum illo maxime dolores fuga amet
            fugit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur praesentium maiores nihil reiciendis, porro delectus ea sed vitae veritatis nemo ex nisi doloremque, perferendis! Recusandae harum dolorum consectetur, et
            odio?</small></p>
        <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum voluptatum, delectus officia, consectetur quos expedita nesciunt blanditiis dignissimos reprehenderit accusamus quaerat quas rerum illo maxime dolores fuga amet
            fugit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur praesentium maiores nihil reiciendis, porro delectus ea sed vitae veritatis nemo ex nisi doloremque, perferendis! Recusandae harum dolorum consectetur, et
            odio?</small></p>

      </div>
    </div>
</div>
  </main>

</template>

<script>
export default {
  el: '#grid',
  data () {
  return {
    items: [
"I can figure out how to get text here but does the whole element have to build out of here and how much longer will this assignment go."
    ],
}
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
