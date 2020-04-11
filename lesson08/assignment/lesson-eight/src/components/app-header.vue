<template>
<!-- Header component-->
<div class="app-header" id="app-header">
<slot name="slot2"></slot>
<slot name="slot1"></slot>
<p>Child line 1</p>
<p>{{ message }}</p>
</div>
</template>

<script>
// Filter script
export default {
  name: 'app-header',
  data() {
      return {
        message: 'This is a website about cats',
      }
    }
}
</script>

<style scoped>

</style>
