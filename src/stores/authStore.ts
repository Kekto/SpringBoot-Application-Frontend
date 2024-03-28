import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('authStore', () => {

    const registerUser = async (user:any) => {
        await axios.post('http://localhost:8000/register', user).then((res) => {
                console.log(res.data);
            }
        );
    }

    const loginUser = async (user:any) => {
        await axios.post('http://localhost:8000/authenticate', user).then((res) => {
                console.log(res.data);
            }
        );
    }

  return { registerUser, loginUser }
})
