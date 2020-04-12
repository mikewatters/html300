<script>
//Prop validation for component
export default {
  name: 'card',
  props: {
    card: Object,
    default: function() {
      return {}
    }
  }
}
</script>

<template>
<!-- Cat image cards -->
<div class="card bg-light text-white">
  <img :src="card.src" class="card-img" alt="alt.src">
  <div class="card-img-overlay">
    <h5 class="card-title">{{ card.title }}</h5>
    <p class="card-text">{{ card.caption }}</p>
  </div>
</div>
</template>

<style scoped>

</style>
