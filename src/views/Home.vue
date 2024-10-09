<script setup lang="ts">
import { useRouter } from 'vue-router';
import { LOGOUT_ACTION } from '../store/constants';
import {  useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const onLogout = async () => {
      try {
        await store.dispatch('auth/' + LOGOUT_ACTION); 
        router.push('/signin'); 
      } catch (error) {
        console.error('Logout error:', error);
      }
};
    
</script>
<template>
    <h1>Home</h1>
    <button @click.prevent="onLogout()">Logout</button>
</template>