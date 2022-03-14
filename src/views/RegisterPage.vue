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
          <p class="font-medium text-secondary uppercase">Building Businesses</p>
          <h2 class="text-2xl font-extrabold leading-none sm:text-3xl md:text-5xl">
            Easily track your vacation days.
          </h2>
          <p class="text-xl md:pr-16">Learn how to engage with your visitors and teach them about your mission. We're revolutionizing the way customers and businesses interact.</p>
        </div>

        <form @submit.prevent="register" class="w-full mt-16 md:mt-0 md:w-2/5">
          <div class="relative z-10 h-auto p-8 py-10 overflow-hidden rounded-xl shadow-xl px-7">
            <h3 class="mb-6 text-2xl font-medium text-center">Create your company account</h3>
            
            <div class="flex flex-col mb-2">
              <label for="email" class="label">Email</label>
              <input type="text" required class="input input-bordered w-full" id="email" v-model="email" />
            </div>

            <div class="flex flex-col mb-2">
              <label for="password" class="label">Password</label>
              <input type="password" required class="input input-bordered w-full" id="password" v-model="password" />
            </div>

            <div class="flex flex-col mb-10">
              <label for="confirmPassword" class="label">Confirm Password</label>
              <input type="password" required class="input input-bordered w-full" id="confirmPassword" v-model="confirmPassword" />
            </div>

            <div class="block">
                <button class="btn w-full btn-primary">Sign Up</button>
            </div>
            <router-link class="block text-sm text-center mt-6" :to="{ name: 'Login' }">
              Already have an account? <span class="text-secondary">Sign in here!</span>
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
  name: "register",
  components: {},
  setup() {

   // create data / vars
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorMsg = ref(null);

    // Register new user
    const register = async() => {
      if (password.value === confirmPassword.value) {
        try {
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value
          });

          if (error) throw error;
          router.push({ name: "Login" })
        } catch(error) {
          errorMsg.value = error.message;
          setTimeout(() => {
            errorMsg.value = null;
          }, 5000);
        }

        return;
      }

      errorMsg.value = "Error: Passwords do not match";
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }

    return {
      email,
      password,
      confirmPassword,
      errorMsg,
      register
    };

  }
};
</script>
