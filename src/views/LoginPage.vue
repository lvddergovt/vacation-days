<template>
 
  <section class="w-full px-8 py-16 xl:px-8">
    <div class="max-w-5xl mx-auto">
      <!-- Error handling -->
      <div v-if="errorMsg" class="mb-10 p-4 rounded-md shadow-lg">
        <p class="text-red-500">
          {{ errorMsg }}
        </p>
      </div>

      <div class="flex flex-col items-center md:flex-row">

        <div class="w-full space-y-5 md:w-3/5 md:pr-16">
          <img src="@/assets/images/rubber/rubber-vacation.png" alt="">
        </div>

        <form @submit.prevent="login" class="w-full mt-16 md:mt-0 md:w-2/5">
          <div class="relative z-10 h-auto p-8 py-10 overflow-hidden rounded-lg shadow-xl px-7">
            <h3 class="mb-6 text-2xl font-medium text-center">Sign in to your account</h3>
            
            <div class="flex flex-col mb-2">
              <label for="email" class="mb-1 text-sm">Email</label>
              <input type="text" required class="input input-bordered w-full" id="email" v-model="email" />
            </div>

            <div class="flex flex-col mb-10">
              <label for="password" class="mb-1 text-sm">Password</label>
              <input type="password" required class="input input-bordered w-full" id="password" v-model="password" />
            </div>
            <div class="block">
                <button class="btn w-full btn-primary">Sign In</button>
            </div>
            <router-link class="block text-sm text-center mt-6" :to="{ name: 'Register' }">
              Don't have an account? <span class="text-secondary">Sign up here!</span>
            </router-link>

          </div>
        </form>

      </div>
    </div>
  </section>
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
