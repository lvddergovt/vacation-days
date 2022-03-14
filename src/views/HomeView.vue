<template>

  <section>
    <div class="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">
      <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="@/assets/images/rubber/rubber-surfing.png">
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl mb-10">
          <span class="block xl:inline">Keep track of your</span>
          <span class="block text-primary xl:inline"> Vacation Days!</span>
        </h1>
        <p class="leading-relaxed mb-8">
          Easily keep track of your leave and vacation days. Set up a company account to streamline your workflow. Know when people are not in the office.
        </p>
        <div class="flex justify-center items-center">
           <router-link v-if="user" class="btn btn-primary mr-5" :to="{ name: 'Dashboard' }">
            View Dashboard
          </router-link>
          <router-link v-else class="btn btn-primary mr-5" :to="{ name: 'Register' }">
            Get Started
          </router-link>
          <span class="mr-4">or</span>
          <button class="btn btn-secondary-content">Learn More</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="w-full pt-7 pb-7 md:pt-20 md:pb-24">
    <div class="box-border flex flex-col items-center content-center px-8 mb-40 mx-auto leading-6 md:flex-row max-w-7xl lg:px-16">

        <!-- Image -->
      <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
        <img src="@/assets/images/rubber/rubber-man-13.png" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 ">
      </div>

      <!-- Content -->
      <div class="box-border order-first w-full md:w-1/2 md:pl-10 md:order-none">
        <h2 class="m-0 text-xl font-semibold leading-tight lg:text-3xl md:text-2xl">
          Boost Productivity
        </h2>
        <p class="pt-4 pb-8 m-0 leading-7 sm:pr-12 xl:pr-32 lg:text-lg">
          Build an atmosphere that creates productivity in your organization and your company culture.
        </p>
        <ul class="p-0 m-0 leading-6">
          <li class="box-border relative py-1 pl-0 text-left border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span class="text-sm font-bold">✓</span></span> Maximize productivity and growth
          </li>
          <li class="box-border relative py-1 pl-0 text-left border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span class="text-sm font-bold">✓</span></span> Speed past your competition
          </li>
          <li class="box-border relative py-1 pl-0 text-left border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span class="text-sm font-bold">✓</span></span> Learn the top techniques
          </li>
        </ul>
      </div>
      <!-- End  Content -->
  </div>
  <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

      <!-- Content -->
      <div class="box-border w-full md:w-1/2 md:pl-6 xl:pl-32">
        <h2 class="m-0 text-xl font-semibold leading-tight border-0 lg:text-3xl md:text-2xl">
          Automated Tasks
        </h2>
        <p class="pt-4 pb-8 m-0 leading-7 sm:pr-10 lg:text-lg">
          Save time and money with our revolutionary services. We are the leaders in the industry.
        </p>
        <ul class="p-0 m-0 leading-6">
          <li class="box-border relative py-1 pl-0 text-left border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span class="text-sm font-bold">✓</span></span> Automated task management workflow
          </li>
          <li class="box-border relative py-1 pl-0 text-left border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span class="text-sm font-bold">✓</span></span> Detailed analytics for your data
          </li>
          <li class="box-border relative py-1 pl-0 text-left border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span class="text-sm font-bold">✓</span></span> Some awesome integrations
          </li>
        </ul>
      </div>
      <!-- End  Content -->

      <!-- Image -->
      <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
        <img src="@/assets/images/rubber/rubber-woman-dancing.png" class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32">
      </div>
    </div>
  </section>

</template>

<script>
import { defineComponent, computed } from 'vue';
import store from "@/store/index";

export default defineComponent({
  name: 'HomeView',
  components: {
    
  },
  setup() {
    const user = computed(() => store.state.user);

    return {
      user
    }
  }
});
</script>
