<script setup lang="ts">
import { ref } from "vue";
import Menubar from 'primevue/menubar'
import Button from 'primevue/button';
import Divider from "primevue/divider";
import 'primeicons/primeicons.css'
import router from "@/router";

const items = ref([
  {
    label: 'Strona gówna',
    icon: 'pi pi-home',
    name: 'home',
  },
  {
    label: 'Kontakt',
    icon: 'pi pi-phone',
    name: 'contact',
  },
  {
    label: 'Profil',
    icon: 'pi pi-user',
    name: 'profile',
  }
]);

const addWcag = () => document.getElementById('app')?.classList.add('wcag');
const removeWcag = () => document.getElementById('app')?.classList.remove('wcag');


const addWcagF = () => document.getElementById('app')?.classList.add('wcagf');
const removeWcagF = () => document.getElementById('app')?.classList.remove('wcagf');
const blackAndYellow = () => window.open('https://www.youtube.com/watch?v=UePtoxDhJSw&ab_channel=WizKhalifaMusic');
</script>

<template>
 <div class="topbar-layout">
   <Menubar :model="items">
     <template #start>
       <img src="https://compu-kart.co.za/wp-content/uploads/2023/01/logo.png" alt="logo" height="60px">
     </template>
     <template #item="{ item, props }">
       <router-link v-if="item.name" v-slot="{ href, navigate }" :to="{name: item.name}" custom>
         <a :href="href" v-bind="props.action" @click="navigate" class="topbar-layout__link">
           <span :class="item.icon" />
           <span class="ml-2">{{ item.label }}</span>
         </a>
       </router-link>
     </template>
     <template #end>
      <div class="row">
        <i 
          class="pi pi-minus interactable" 
          style="font-size: 0.8rem"
          @click="removeWcagF"
        ></i>
        <i style="font-size: 1.3rem">Aa</i>
        <i 
        class="pi pi-plus interactable" 
        style="font-size: 0.8rem"
        @click="addWcagF"
        ></i>
        <Divider layout="vertical"/>
        <i class="pi pi-circle interactable" @click="removeWcag"></i>
        <i class="pi pi-circle-fill interactable" @click="addWcag" @dblclick="blackAndYellow"></i>
        <Divider layout="vertical"/>
        <router-link :to="{name: 'login'}">
          <Button label="Wyloguj"/>
        </router-link>
      </div>

     </template>
   </Menubar>
   <div class="topbar-layout__body">
    <RouterView />
   </div>
 </div>
</template>

<style scoped lang="scss">
.topbar-layout {
  width: 100%;
  background: $tobpar-layout-background;
  min-height: 100vh;

  &__link {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__body {
    width:100%;
    padding: 30px;
  }
}
.row{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.interactable{
  &:hover{
    cursor: pointer;
  }
}
</style>