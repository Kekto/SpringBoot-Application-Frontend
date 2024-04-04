<script setup lang="ts">
import Card from 'primevue/card';
import TimeCard from '@/components/TimeCard.vue';
import Button from 'primevue/button';
import { useTaskStore } from '@/stores/taskStore';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/authStore';

// Time card
function selectTime(timeCardId:number) {
  const timeCards = document.getElementsByClassName('time__card');
  const selectedTimeCard = document.getElementById('time_card_'+timeCardId);

    for(let card of timeCards){
        card.classList.remove("selected");
    }

    selectedTimeCard?.classList.add("selected");
};

// Auth Store
const authStore = useAuthStore();

// Task Store
const taskStore = useTaskStore();

taskStore.fetchAll();

function fetchAllTasks(){
    taskStore.fetchAll();
}

function addTask(){
    taskStore.addTask(taskAdd);
    visibleAdd.value = false;
    taskAdd.title = undefined;
    taskAdd.description = undefined;
}
// Dialog

const visibleAdd = ref(false);

const taskAdd = {
    title: undefined,
    description: undefined
}

</script>

<template>
  <Card class="home">
    <template #title>
        <div class="row">
            <div>
                Zadania
            </div>
            <div class="button__bar">
                <Button
                    type="button"
                    label="Odśwież"
                    @click="fetchAllTasks"
                />
                <Button
                    type="button"
                    label="Dodaj"
                    @click="visibleAdd = true"
                    :disabled ="!authStore.authorized"
                />
            </div>
        </div>

    </template>
    <template #content>
        <div v-if="!authStore.authorized">
            Zaloguj się aby zobaczyć lub modyfikować listę zadań.
        </div>
        <div v-else>
            <div class="timer__cards" v-for="task in taskStore.tasks" :key="task">
                <TimeCard 
                    :title=task.title
                    class="time__card"
                    :taskId="task.id"
                    :id=task.id 
                    :description=task.description 
                    @click="selectTime(1)"
                />
            </div>
            <div v-if=!taskStore.tasks>
                Nie ma żadnych zadań do wyświetlenia
            </div>
        </div>
    </template>
  </Card>
  <Dialog 
    :visible="visibleAdd" 
    modal 
    :show-header="false"
    class="dialog"
    :style="{width: 'auto', padding: '12px'}"
    >
        <div class="dialog__title">Dodaj Zadanie</div>
        <div class="dialog__input">
            <label for="title" class="dialog__input__title">Tytuł</label>
            <InputText v-model:model-value="taskAdd.title" id="title" class="dialog__input__bar"/>
        </div>
        <div class="dialog__input">
            <label for="description" class="dialog__input__title">Opis</label>
            <InputText v-model:model-value="taskAdd.description" id="description" class="dialog__input__bar"/>
        </div>
        <div class="dialog__buttons">
            <Button type="button" label="Anuluj" severity="secondary" @click="visibleAdd = false"></Button>
            <Button type="button" label="Dodaj" @click="addTask"></Button>
        </div>
    </Dialog>
</template>

<style scoped lang="scss">
.timer__cards{
    display:flex;
    flex-direction:column;
    gap: 12px;
}

.selected {
    background-color: aliceblue;
}

.row {
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center
}

.button__bar {
display: flex;
gap: 8px;
}

.dialog {
    &__title {
        font-size: 20px;
        margin-bottom: 12px;
    }

    &__input {
        display: flex;
        flex-direction: row;
        align-items: center;
        &__title {
            width: 60px;
        }

        &__bar {
            width: 100%;
        }
    }

    &__buttons{
        display: flex;
        margin-top: 12px;
        justify-content: center;
        gap: 8px;
    }
}
</style>