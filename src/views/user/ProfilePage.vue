<template>

  <section>
    
    <div class="container">
     
     <div class="flex gap-5 flex-col md:flex-row">

      <div class="w-auto md:w-80 flex-none rounded-xl">
        <div class="flex items-center space-x-2">
          <ul class="menu w-full bg-base-100 p-4 rounded-box shadow-lg">
            <li>
              <a class="active">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Personal Information
              </a>
            </li>
            <li>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>



      <div class="card shadow-lg sm:grow">
        <div class="card-body">
         
          <div class="mt-5 md:mt-0 md:col-span-2 w-full">
            <form @submit.prevent="updateProfile">
              <div class="md:flex gap-5 mb-8">
                <div class="md:w-1/2">
                  <label for="firstname" class="label">Firstname</label>
                  <input type="text" id="firstname" class="input input-bordered block w-full" v-model="firstname" />
                </div>
                <div class="md:w-1/2">
                  <label for="lastname" class="label">Lastname</label>
                  <input type="text" id="lastname" class="input input-bordered block w-full" v-model="lastname" />
                </div>
              </div>
              
              <label for="email" class="label">Email</label>
              <input type="text" id="email" class="input input-bordered block w-full mb-8" disabled :value="user.email" />

              <label for="jobtitle" class="label">Job Title</label>
              <input type="text" id="jobtitle" class="input input-bordered block w-full mb-8" disabled :value="job_title" />

              <div>
                <label class="label"> Photo </label>
                <div class="mt-1 flex gap-8 items-center">
                  <span class="inline-block h-12 w-12 rounded-full overflow-hidden">
                    <svg class="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <button type="button" class="btn btn-outline">Change</button>
                </div>
              </div>

                 
              <div class="py-3 text-right sm:px-6">
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>



       
    </div>
     
    </div>

  </section>

</template>

<script>
import { ref, defineComponent, onMounted } from 'vue';
import { supabase } from "@/supabase/init";
import { useRouter } from "vue-router";
import store from "@/store/index";
import { computed } from "vue";

export default defineComponent({
  name: 'DashboardPage',
  components: {
    
  },
  setup() {

    // get user from store
    const user = computed(() => store.state.user);

    
    // setup ref to router
    const router = useRouter();

    // create data / vars
    const firstname = ref("");
    const lastname = ref("");
    const job_title = ref("");
    const avatar_url = ref("");
    
    // get profile
    const getProfile = async() => {
      try {
        let { data, error, status } = await supabase
          .from("profiles")
          .select(`firstname, lastname, job_title, avatar_url`)
          .eq("id", user.value.id)
          .single();
        if (error && status !== 406) {
          throw error;
        }
        if (data) {
          firstname.value = data.firstname;
          lastname.value = data.lastname;
          job_title.value = data.job_title;
          avatar_url.value = data.avatar_url;
        }
      } catch (error) {
        alert(error.message);
      }
    };

    const updateProfile = async() => {
      try {

        const updates = {
          id: user.value.id,
          firstname: firstname.value,
          lastname: lastname.value,
          job_title: job_title.value,
          avatar_url: avatar_url.value,
          updated_at: new Date(),
        }

        let { error } = await supabase.from("profiles").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        })

        if (error) throw error
      } catch (error) {
        alert(error.message)
      }
    }

    onMounted(() => {
      getProfile()
    });

    return {
      firstname,
      lastname,
      job_title,
      avatar_url,
      user,

      updateProfile,
    };
  }
});

</script>
