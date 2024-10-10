<script setup lang="ts">
const props = withDefaults(defineProps<{
  loading: boolean;
  text: string;
  size: 'small' | 'large';
  theme: 'default' | 'danger' | 'success';
}>(), {
  loading: false,
  size: 'large',
  theme: 'default'
});
</script>

<template>
    <button :class="['custom-button-container', props.size, props.theme]">
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
   .custom-button-container {
        &.small {
            padding: 0.5rem 1rem;
            height: 2rem;
            font-size: 1rem;
        }

        &.large {
            padding: 1.5rem 2.5rem;
            height: 4rem;
            font-size: 1.25rem;
        }

        &.default {
        background-image: linear-gradient(30deg, $dark-blue, $light-blue);
        }

        &.danger {
            background-image: linear-gradient(30deg, $danger, $light-danger);
        }

        &.success {
            background-image: linear-gradient(30deg, $dark-success, $success);
        }
    }
</style>