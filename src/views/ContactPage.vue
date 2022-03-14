<template>
  <section class="relative">
    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">Contact Us</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm">Name</label>
              <input type="text" id="name" name="name" class="w-full input input-bordered">
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm">Email</label>
              <input type="email" id="email" name="email" class="w-full input input-bordered">
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm">Message</label>
              <textarea id="message" name="message" class="w-full textarea textarea-bordered"></textarea>
            </div>
          </div>
          <div class="p-2 w-full flex justify-center">
            <button class="btn btn-primary">Button</button>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

export default ({
  name: 'ContactPage',
  components: {
    
  },
});
</script>
