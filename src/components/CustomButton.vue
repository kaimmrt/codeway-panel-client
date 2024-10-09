<script setup lang="ts">
const props = defineProps<{ loading: boolean, text: string }>();
</script>

<template>
    <button class="custom-button">
        <template v-if="props.loading">
            <img src="../assets/spinner.svg" alt="spinner"/> 
        </template>
        <template v-else>
            {{ props.text }}
        </template>
    </button>
</template>

<style lang="scss">
    @import '../assets/scss/variables.scss';
   .custom-button {
        background-image: linear-gradient(55deg, $dark-blue, $light-blue);
    }
</style>