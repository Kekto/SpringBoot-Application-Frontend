<script setup lang="ts">
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import InlineMessage from 'primevue/inlinemessage';
import Button from 'primevue/button';

import {computed, ref} from 'vue';
import {useRouter} from "vue-router";

const loading = ref(false);
const router = useRouter();

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    router.push({name: 'home'});
  }, 2000);
};

const username = ref<undefined | string>(undefined);
const password = ref<undefined | string>(undefined);
const passwordCheck = ref<undefined | string>(undefined);

const isInvalid = (value: undefined | string): boolean => value !== undefined && value.length === 0;
const paswordsDiffer = (value: undefined | string): boolean => value !== undefined && value.length === 0 || value !== password.value;

const submitDisabled = computed(() => paswordsDiffer(passwordCheck.value) || !passwordCheck.value || !password.value || !username.value);
</script>

<template>
  <Card class="register">
    <template #title >
      <div class="register__title">
        <img src="https://compu-kart.co.za/wp-content/uploads/2023/01/logo.png" alt="logo">
        <h1>Rejestracja</h1>
      </div>
    </template>
    <template #content>
      <div class="register__form">
        <div class="register__form__item">
          <label
              for="username"
              class="p-sr-only"
          >
            Username
          </label>
          <InputText
              id="username"
              placeholder="Username"
              v-model="username"
              :invalid="isInvalid(username)"
          />
          <InlineMessage v-if="isInvalid(username)"> Username is required</InlineMessage>
        </div>
        <div class="register__form__item">
          <label
              for="password"
              class="p-sr-only"
          >
            email
          </label>
          <InputText
              id="password"
              placeholder="Password"
              type="password"
              v-model="password"
              :invalid="isInvalid(password)"
          />
          <InlineMessage v-if="isInvalid(password)"> Password is required</InlineMessage>
        </div>
        <div class="register__form__item">
          <label
              for="passwordCheck"
              class="p-sr-only"
          >
            email
          </label>
          <InputText
              id="passwordCheck"
              placeholder="Password again"
              type="password"
              v-model="passwordCheck"
              :invalid="isInvalid(passwordCheck)"
          />
          <InlineMessage v-if="paswordsDiffer(passwordCheck)"> Passwords differ</InlineMessage>
        </div>
        <router-link :to="{name: 'login'}">
          <Button label="Masz już konto? Zaloguj się" link />
        </router-link>
        <Button
            type="button"
            label="Zarejestruj"
            :disabled="submitDisabled"
            :loading="loading"
            @click="load"
        />
      </div>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.register {
  &__title {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &__item {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>
