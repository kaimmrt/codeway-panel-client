<script setup lang="ts">
import { LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '@/store/constants';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthLayout from '@/layouts/AuthLayout.vue';
import CustomButton from '@/components/CustomButton.vue';

const store = useStore();
const router = useRouter();
const form = ref({
    email: '',
    password: '',
});

const showLoading = computed(() => store.state.showLoading);

const onLogin = async () => {
    console.log('form',form.value)
    store.commit(LOADING_SPINNER_SHOW_MUTATION, true);
    try {
        await store.dispatch('auth/' + LOGIN_ACTION, { email: form.value.email, password: form.value.password });
        router.push('/');
    } catch (error) {
        console.error(error);
    } finally {
      store.commit(LOADING_SPINNER_SHOW_MUTATION, false);
    }
};
</script>

<template>
  <AuthLayout title="Please sign in">
    <form @submit.prevent="onLogin()" class="sign-in-form-container">
      <div class="sign-in-form-inputs">
        <input
          class="email-input"
          type="email"
          id="email"
          v-model="form.email"
          placeholder="E-mail address"
          required
        />
        <input
          class="password-input"
          type="password"
          id="password"
          v-model="form.password"
          placeholder="Password"
          required
        />
      </div>
      <CustomButton :loading="showLoading" text="Sign in"></CustomButton>
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

    .email-input {
      border-radius: 0;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    .password-input {
      border-radius: 0;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }
}
</style>
