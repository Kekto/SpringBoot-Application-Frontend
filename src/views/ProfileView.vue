<script setup lang="ts">
import Card from 'primevue/card';
import Image from 'primevue/image';

const image: string[] = [
  'https://i.pinimg.com/736x/31/e2/a1/31e2a17fc75dd7d332086446d8ebb40d.jpg'
]

const names: string[] = [
  'Adam',
  'Piotr',
  'Mariusz',
  'Grzegorz',
  'Ivan',
];

const lastNames: string[] = [
  'Małysz',
  'Floryda',
  'Kaczorek',
  'Małyska',
  'Spadam',
];

const getRandom = (values: string[]):string => values[(Math.floor(Math.random() * values.length))];
</script>

<template>
  <Card class="profile">
    <template #title>Profil</template>
    <template #content>
      <div class="row">
        <Image :src="getRandom(image)" alt="Image" class="image" width="200px" preview />
        <div class="profile__names">
          <p class="profile__name">
            First name: {{getRandom(names)}}
          </p>
          <p class="profile__name">
            Second name: {{getRandom(names)}}
          </p>
          <p class="profile__name">
            Last name: {{getRandom(lastNames)}}
          </p>
        </div>
      </div>
      <p>
        Azure test auto-deployment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
      <h3>Tickets</h3>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.row{
  display: flex; 
  flex-direction: row; 
  gap: 16px;
}

.image {
  outline: 3px solid black;
  border-radius: 8px;
}

.profile {
  &__names {
    width: calc(100% - 200px);
    display: flex; 
    flex-wrap: wrap; 
    align-content: flex-start;
  }

  &__name {
    width: 50%;
  }
}
</style>