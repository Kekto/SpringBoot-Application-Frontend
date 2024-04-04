import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('taskStore', () => {

    const tasks = ref(0);

    async function fetchAll(){
        if(sessionStorage.getItem('Token')){
            await axios.get(
                'http://localhost:8000/tasks',
                { headers: {
                    "Authorization" : `Bearer ${sessionStorage.getItem('Token')}`
                 } 
                }).then((res) => {
                    console.log(res.data);
                    tasks.value = res.data;
                });
        }
    }

    async function addTask(task:any){
        if(sessionStorage.getItem('Token')){
            await axios.post(
                'http://localhost:8000/tasks',task,
                { headers: {
                    "Authorization" : `Bearer ${sessionStorage.getItem('Token')}`
                } 
                }).then((res) => {
                    console.log(res.data);
                }
            ).then(() => {
                fetchAll();
            });
        }
    }

    async function editTask(id: number, task:any){
        if(sessionStorage.getItem('Token')){
            await axios.put(
                `http://localhost:8000/tasks/${id}`,task,
                { headers: {
                    "Authorization" : `Bearer ${sessionStorage.getItem('Token')}`
                } 
                }).then((res) => {
                    console.log(res.data);
                }
            ).then(() => {
                fetchAll();
            });
        }
    }

    async function deleteTask(id:number){
        if(sessionStorage.getItem('Token')){
            await axios.delete(
                `http://localhost:8000/tasks/${id}`,
                { headers: {
                    "Authorization" : `Bearer ${sessionStorage.getItem('Token')}`
                } 
                }).then((res) => {
                    console.log(res.data);
                }
            ).then(() => {
                fetchAll();
            });
        }
    }



  return { fetchAll, addTask, editTask, deleteTask, tasks }
})
