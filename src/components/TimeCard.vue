<script setup lang="ts">
import Card from 'primevue/card';

defineProps<{
  time: string,
  title: string
}>()

</script>

<template>
<Card class="timer__card">
    <template #title> {{ time }}</template>
    <template #content>
      <div class="row">
        {{ title }}
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