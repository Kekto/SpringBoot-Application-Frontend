import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('authStore', () => {

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
            }
        );
    }

  return { registerUser, loginUser }
})
