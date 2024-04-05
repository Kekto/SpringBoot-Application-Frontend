import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router';

export const useAuthStore = defineStore('authStore', () => {

    const authorized = computed(() => {
        return sessionStorage.getItem('Token')
    });
    const username = ref('test');

    async function registerUser(user:any){
        await axios.post('http://localhost:8000/register', user).then((res) => {
                console.log(res.data);

                if(res.data.statusCode === 'OK'){
                    router.replace('login');
                }
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

    async function getFavourited(username:String){
        if(sessionStorage.getItem('Token')){
            await axios.post('http://localhost:8000/favourited',username,
                { 
                    headers: {
                    "Authorization" : `Bearer ${sessionStorage.getItem('Token')}`
                    }
                } ).then((res) => {
                    console.log(res.data);
                }
            );
        }
    }

    async function favourite(username:String, task:any){
        const data = {
            username: username,
            task: task
        }

        console.log(data)
        if(sessionStorage.getItem('Token')){
            await axios.post(`http://localhost:8000/favourite`, data,
                { 
                    headers: {
                    "Authorization" : `Bearer ${sessionStorage.getItem('Token')}`
                    }
                } ).then((res) => {
                    console.log(res.data);
                }
            );
        }
    }

    async function unfavourite(username:String, task:any){
        const data = {
            username: username,
            task: task
        }
        if(sessionStorage.getItem('Token')){
            await axios.post(`http://localhost:8000/unfavourite`,data,
                { 
                    headers: {
                    "Authorization" : `Bearer ${sessionStorage.getItem('Token')}`
                    }
                } ).then((res) => {
                    console.log(res.data);
                }
            );
        }
    }

  return { registerUser, loginUser, logoutUser, getFavourited, favourite, unfavourite, authorized, username }
})
