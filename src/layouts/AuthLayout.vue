<script setup lang="ts">

</script>

<template>
  <div class="auth-layout">
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
.auth-layout {
  background: $auth-layout-background;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__card {
    width: 50%;
    height: fit-content;
  }
}
</style>