import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createPinia } from 'pinia'

const pinia = createPinia();

createApp(App).use(pinia).use(PrimeVue).use(router).mount('#app')
