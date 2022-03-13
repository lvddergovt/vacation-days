<template>
  <div class="container pt-4">
    <div class="navbar mb-20 shadow-lg rounded-box">
      <div class="navbar-start">
        <div class="dropdown">
          <label class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Vacation Days</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <!-- <li tabindex="0">
            <a>
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li> -->
          <li><a>Dashboard</a></li>
          <li><a>FAQ</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <SelectTheme />
        <div v-if="false">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791">
              </div>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
        <router-link :to="{name: 'Login'}" v-else class="btn btn-primary">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

// import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";
// import store from "../store/index";
import { computed } from "vue";
import SelectTheme from '@/components/SelectTheme.vue';

export default {
  components: {
    SelectTheme
  },
  setup() {

    // get user from store
    // const user = computed(() => store.state.user);

    // setup ref to router
    const router = useRouter();

    // logout function
    const logout = async() => {
      // await supabase.auth.signOut();
      router.push({ name: "Login" });
    }

    return {
      logout,
      // user
    };
  }

}
</script>