<script setup>
import { reactive } from "vue";
import { useMain } from "@/stores/main";
import { useRouter } from "vue-router";

const router = useRouter();

const store = useMain();

const state = reactive({
  loading: false,
  disabled: false,
  error: undefined,
});

const sendLogin = async () => {
  try {
    state.loading = true;
    // supabase
    store.addUser({
      id: "1",
      name: "John",
      email: "johndoe@example.com",
      password: "123456",
    });

    router.push("/");
  } catch (error) {
    console.log(error);
  } finally {
    state.loading = false;
  }
};
</script>

<template>
  <div class="Login h-screen w-full flex flex-col items-center">
    <h3 class="my-12">Mission Locale Brestoise</h3>
    <div class="card w-96">
      <h3 class="mb-4">Se connecter à l'application</h3>
      <input
        type="text"
        placeholder="email@mail.com"
        class="mb-2"
        v-model="state.email"
      />
      <div class="button">Se connecter</div>
    </div>
  </div>
</template>