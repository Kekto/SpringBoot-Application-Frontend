<script setup lang="ts">
import Card from 'primevue/card';

defineProps<{
  title: string,
  description: string
}>()

</script>

<template>
<Card class="timer__card">
    <template #title> {{ title }}</template>
    <template #content>
      <div class="row">
        {{ description }}
      </div>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.timer__card{
    cursor: pointer;
    &:hover{
        background-color:aliceblue;
    }
}
</style>