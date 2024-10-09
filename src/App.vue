<script setup lang="ts">
import { useStore } from 'vuex';
import { AUTO_LOGIN_ACTION } from './store/constants';

const store = useStore();
store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);
</script>

<template>
  <router-view></router-view>
</template>
