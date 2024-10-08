<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
});

</script>

<template>
    <div class="auth-layout">
            <img class="codeway-logo" src="../assets/icon.png" alt="codeway-icon"/>
            <div class="auth-layout-main-area">
                <h2 class="auth-layout-title">{{ props.title }}</h2>
                    <main class="main-content">
                        <slot></slot>
                    </main>
            </div>
            <p class="copyright">Codeway © {{ new Date().getFullYear() }}</p>
        </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/variables.scss';
.auth-layout {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    padding: 5rem 0;
    height: calc(100vh - 10rem);

    .codeway-logo{
        width: 300px;
    }

    .auth-layout-main-area{
        width: 300px;
        display: flex;
        flex-direction: column;
        
        .auth-layout-title{
            color: $title-color;
            text-align: center;
        }

        .main-content{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    .copyright{
        color: $placeholder-color;
    }
}
</style>