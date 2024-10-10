<script setup>
import { ref } from 'vue';
import {  useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSortDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { LOGOUT_ACTION } from '../store/constants';
import { toast } from 'vue3-toastify';

const store = useStore();
const router = useRouter();

library.add(faUser);
library.add(faSortDown)

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const onLogout = async () => {
      try {
        await store.dispatch('auth/' + LOGOUT_ACTION); 
        router.push('/signin'); 
      } catch (error) {
        toast.error(error);
      }
};
</script>

<template>
    <div class="header-container">
        <img class="header-logo" src="../assets/icon.png" alt="codeway-logo" />
        <div class="icon-container" @click="toggleDropdown()">
            <font-awesome-icon icon="user" class="icon-user" />
            <font-awesome-icon icon="sort-down" class="icon-sort-down" />
        </div>

        <div v-if="isDropdownOpen" class="dropdown-menu">
            <ul>
                <li  @click.prevent="onLogout()">Sign Out</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';
.header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;

    .header-logo{
        height: 100%;
        max-height: 2rem;
    }

    .icon-container {
        position: relative;
        display: flex;
        align-content: center;
        justify-content: center;
        gap: .25rem;
        cursor: pointer;

        .icon-user{
            font-size: 1.25rem;
        }

        .icon-sort-down{
            font-size: .75rem;
        }
    }

    .dropdown-menu {
        position: absolute;
        top: 3rem;
        right: 1.825rem;
        background-color: $primary-color;
        border: 1px solid $secondary-color;
        box-shadow: 0 0.25rem 1.25rem rgba(255, 255, 255, 0.2);
        z-index: 1000; 
        border-radius: 0.5rem;
        
        ul {
            padding: 0;
            margin: 0;

            li{
                padding: 0.5rem 1rem; 
                cursor: pointer; 
                
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
}

@media (max-width: 480px) { 
    .header-logo {
        max-height: 1.2rem;
    }

    .icon-user {
        font-size: 0.9rem;
    }
}
</style>