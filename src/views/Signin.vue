<script setup lang="ts">
import AuthLayout from '../layouts/AuthLayout.vue';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';

const form = ref({
  email: '',
  password: '',
});

const errors = ref({
  email: '',
  password: '',
});


const validateForm = () => {
  errors.value.email = '';
  errors.value.password = '';

  if (form.value.email!=='mert@example.com') {
    errors.value.email = 'Invalid email';
  } 
  if(form.value.password!=='password'){
    errors.value.password='Invalid password'
  }

  return !errors.value.email && !errors.value.password;
};

const handleSubmit = () => {
    if (validateForm()) {
        toast.success('Sign in successful!');
        return;
    }
    if (errors.value.email) {
        toast.error(errors.value.email);
    }
    if (errors.value.password) {
        toast.error(errors.value.password);
    }
};
</script>

<template>
    <AuthLayout title="Please sign in">
        <form @submit.prevent="handleSubmit" class="sign-in-form-container">
            <div class="sign-in-form-inputs">
                <input
                    class="email-input"
                    type="email"
                    id="email"
                    placeholder="E-mail address"
                    v-model="form.email"
                    required
                />
                <input
                    class="password-input"
                    type="password"
                    id="password"
                    placeholder="Password"
                    v-model="form.password"
                    required
                />
            </div>
            <button class="submit-button" type="submit">Sign in</button>
        </form>
    </AuthLayout>
  </template>
  
<style scoped lang="scss">
@import '../assets/scss/variables.scss';

.sign-in-form-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    
    .sign-in-form-inputs {
        display: flex;
        flex-direction: column;

        .email-input{
            border-radius: 0;
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
        }

        .password-input{
            border-radius: 0;
            border-bottom-left-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
        }
    }

    .submit-button{
        background-image: linear-gradient(55deg, $dark-blue, $light-blue);
    }
}
</style>