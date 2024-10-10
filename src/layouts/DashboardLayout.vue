<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue';
</script>

<template>
    <div class="dashboard-layout">
        <header>
            <DashboardHeader></DashboardHeader>
        </header>
        <main class="main-content">
            <slot></slot>
        </main>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/variables.scss';
.dashboard-layout {
    padding: 1rem 2rem;
}
</style>