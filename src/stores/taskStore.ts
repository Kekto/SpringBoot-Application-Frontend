import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('taskStore', () => {

    const tasks = ref(0);

    async function fetchAll(){
        await axios.get(
            'http://localhost:8000/tasks',
            { headers: {
                "Authorization" : `Bearer ${sessionStorage.getItem('Token')}`
             } 
            }).then((res) => {
                console.log(res.data);
                tasks.value = res.data;
            }
        );
    }

    async function addTask(task:any){
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



  return { fetchAll, addTask, tasks }
})
