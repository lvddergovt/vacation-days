<template>
  <div v-if="appReady">
    <NavigationBar />

    <router-view/>

    <FooterBar />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import FooterBar from './components/FooterBar.vue';
import { ref } from "vue";
import { supabase } from "./supabase/init";
import store from "./store/index";

export default {
  components: {
    NavigationBar,
    FooterBar
  },
  setup() {

    const appReady = ref(null);

    const user = supabase.auth.user();
    if (!user) {
      appReady.value = true;
    }

    supabase.auth.onAuthStateChange((_, session) => {
      store.methods.setUser(session);
      appReady.value = true;
    })

    return {
      appReady
    };
  }
}
</script>

