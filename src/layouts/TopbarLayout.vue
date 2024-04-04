<script setup lang="ts">
import { ref } from "vue";
import Menubar from 'primevue/menubar'
import Button from 'primevue/button';
import Divider from "primevue/divider";
import 'primeicons/primeicons.css'
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

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
</script>

<template>
 <div class="topbar-layout">
   <Menubar :model="items">
     <template #start>
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
        <Divider layout="vertical"/>
        <router-link :to="{name: 'login'}">
          <Button v-if="authStore.authorized" label="Wyloguj" @click="authStore.logoutUser"/>
          <Button v-if="!authStore.authorized" label="Zaloguj" @click="authStore.logoutUser"/>
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
</style>