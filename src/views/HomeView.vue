<script setup lang="ts">
import Card from 'primevue/card';
import TimeCard from '@/components/TimeCard.vue';

// Time card
function selectTime(timeCardId:number) {
  const timeCards = document.getElementsByClassName('time__card');
  const selectedTimeCard = document.getElementById('time_card_'+timeCardId);

    for(let card of timeCards){
        card.classList.remove("selected");
    }

    selectedTimeCard?.classList.add("selected");
};
</script>

<template>
  <Card class="home">
    <template #title>Zakup biletu</template>
    <template #content>
        <div class="timer__cards">
            <TimeCard 
                time="18:00 - 19:30" 
                class="time__card" 
                id="time_card_1" 
                title="Tor: Rakieta" 
                @click="selectTime(1)"
            />
            <TimeCard 
                time="19:30 - 21:00" 
                class="time__card" 
                id="time_card_2" 
                title="Tor: Turbina" 
                @click="selectTime(2)"
            />
            <TimeCard 
                time="21:00 - 22:30" 
                class="time__card" 
                id="time_card_3" 
                title="Tor: Rakieta"
                @click="selectTime(3)"
            />
        </div>
    </template>
  </Card>
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
</style>