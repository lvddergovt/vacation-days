<template>
  <div class="max-w-screen-sm mx-auto px-4">
    <!-- Error handling -->
    <div v-if="errorMsg" class="mb-10 p-4 rounded-md shadow-lg">
      <p class="text-red-500">
        {{ errorMsg }}
      </p>
    </div>

    <!-- Login -->
    <form @submit.prevent="login" class="p-8 flex flex-col  rounded-md shadow-lg">
      <h1 class="text-3xl mb-4">Login</h1>

      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 text-sm">Email</label>
        <input type="text" required class="input input-bordered w-full" id="email" v-model="email" />
      </div>

      <div class="flex flex-col mb-10">
        <label for="password" class="mb-1 text-sm">Password</label>
        <input type="password" required class="input input-bordered w-full" id="password" v-model="password" />
      </div>

      <button type="submit" class="btn btn-primary">
        Login
      </button>

      <router-link class="text-sm mt-6 text-center" :to="{ name: '' }">
        Don't have an account? <span class="text-secondary">Register</span>
      </router-link>
    </form>

  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";

export default {
  name: "login",
  components: {},
  setup() {

    // create data / vars
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const errorMsg = ref(null);

    const login = async() => {
      try{
        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value
        });
        if (error) throw error;
        router.push({ name: "Home" });
      }
      catch(error) {
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
            errorMsg.value = null;
          }, 5000);
      }
    }

    return {
      email,
      password,
      errorMsg,
      login
    };

  }
};
</script>
