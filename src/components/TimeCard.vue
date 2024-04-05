<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { ref, computed } from 'vue'
import InputText from 'primevue/inputtext';
import { useTaskStore } from '@/stores/taskStore';
import { useAuthStore } from '@/stores/authStore';

defineProps<{
  title: string,
  description: string,
  taskId: number
}>()

const taskStore = useTaskStore();
const authStore = useAuthStore();

// Edit Dialog

const visibleEdit = ref(false);

const taskEdit = {
    title: undefined,
    description: undefined
}

function editTask(id:number){
  taskStore.editTask(id, taskEdit);
}

// Delete Dialog

const visibleDelete = ref(false);

function deleteTask(id:number) {
  taskStore.deleteTask(id);

}

// Favourited

function favourite(title:String, description:String, id: number){
  const task = {
    id: id,
    title: title,
    description: description
  } 

  authStore.favourite(authStore.username, task);
}

function unfavourite(title:String, description:String, id: number){
  const task = {
    id: id,
    title: title,
    description: description
  } 
  authStore.unfavourite(authStore.username ,task);
}
</script>

<template>
  <Card class="timer__card">
    <template #title>
      <div class="row">
        {{ title }}
        <div class="button__bar row">
          <Button
              type="button"
              icon="pi pi-star"
              @click="favourite(title, description, taskId)"
              v-if="1"
          />
          <Button
              type="button"
              icon="pi pi-star-fill"
              @click="unfavourite(title, description, taskId)"
              v-if="1"
          />
        </div>
      </div>
    </template>
    <template #content>
      <div class="row">
        <div>
          {{ description }}
        </div>
        <div class="button__bar row">
          <Button
              type="button"
              icon="pi pi-pencil"
              @click="visibleEdit = true"
          />
          <Button
              type="button"
              icon="pi pi-trash"
              @click="visibleDelete = true"
          />
        </div>
      </div>
    </template>
  </Card>
  <Dialog 
    :visible="visibleEdit" 
    modal 
    :show-header="false"
    class="dialog"
    :style="{width: 'auto', padding: '12px'}"
    >
        <div class="dialog__title">Edytuj Zadanie</div>
        <div class="dialog__input">
            <label for="title" class="dialog__input__title">Tytuł</label>
            <InputText v-model:model-value="taskEdit.title" id="title" class="dialog__input__bar"/>
        </div>
        <div class="dialog__input">
            <label for="description" class="dialog__input__title">Opis</label>
            <InputText v-model:model-value="taskEdit.description" id="description" class="dialog__input__bar"/>
        </div>
        <div class="dialog__buttons">
            <Button type="button" label="Anuluj" severity="secondary" @click="visibleEdit = false"></Button>
            <Button type="button" label="Zapisz" @click="editTask(taskId)"></Button>
        </div>
    </Dialog>
  <Dialog 
    :visible="visibleDelete" 
    modal 
    :show-header="false"
    class="dialog"
    :style="{width: 'auto', padding: '12px'}"
    >
        <div class="dialog__title">Usuń Zadanie</div>
        <div>Czy na pewno chcesz usunąć zadanie {{ title }}?</div>
        <div class="dialog__buttons">
            <Button type="button" label="Anuluj" severity="secondary" @click="visibleDelete = false"></Button>
            <Button type="button" label="Usuń" @click="deleteTask(taskId)"></Button>
        </div>
  </Dialog>
</template>

<style scoped lang="scss">
.timer__card{
    cursor: pointer;
    &:hover{
        background-color:aliceblue;
    }
}

.row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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