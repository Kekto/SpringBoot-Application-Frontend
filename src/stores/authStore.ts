import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router';

export const useAuthStore = defineStore('authStore', () => {

    const authorized = ref(false);

    async function registerUser(user:any){
        await axios.post('http://localhost:8000/register', user).then((res) => {
                console.log(res.data);
            }
        );
    }

    async function loginUser(user:any) {
        await axios.post('http://localhost:8000/authenticate', user).then((res) => {
                console.log(res.data);
                sessionStorage.setItem('Token',res.data.token);

                if(sessionStorage.getItem('Token')){
                    authorized.value = true;
                }
            }
        ).then(() =>{
            router.replace('/home');
        });
    }

    function logoutUser(){
        sessionStorage.removeItem('Token');
    }

  return { registerUser, loginUser, logoutUser, authorized }
})
