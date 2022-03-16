<template>

  <section>
    

    <div class="container">

    <div class="flex gap-5 flex-col md:flex-row">

      <div class="w-auto glass sm:w-80 flex-none rounded-xl rounded-br-none p-6 shadow-lg">
        <div class="flex items-center space-x-2">
          
          <div class="online avatar">
            <div class="mask mask-squircle bg-base-content h-16 w-16 bg-opacity-10 p-px">
              <img src="https://api.lorem.space/image/face?hash=33791" alt="Avatar Tailwind CSS Component" class="mask mask-squircle">
            </div>
          </div>
          <div>
            <div class="text-lg font-extrabold">{{ userData.firstname }} {{ userData.lastname }}</div> 
            <div class="text-base-content/70 text-sm">{{ userData.job_title }}</div>
          </div>
        </div> 
        
        <div class="divider text-base-content/60 my-5">Reports</div>
          
          
        <div class="text-lg font-extrabold">Audience Report</div> 
        <div class="grid gap-3">
          
        </div>
      </div>

      <div class="card shadow-lg sm:grow">
        <div class="card-body items-center text-center">
         
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th>Type</th>
                <th>Status</th>
                <th>Start</th>
                <th>End</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             
              <tr v-for="(item, index) in userPTO" :key="index">
                <td>🌞 {{ item.type }}</td>
                <td>
                  <span class="badge badge-success" v-if="isPtoApproved(item)">Approved</span>
                  <span class="badge badge-error" v-if="isPtoDenied(item)">Denied</span>
                  <span class="badge badge-neutral" v-if="isPtoRequested(item)">Handling</span>
                </td>
                <td>{{ item.start }}</td>
                <td>{{ item.end }}</td>
                <td>
                  <button class="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>

            </tbody>
            
          </table>
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
    const userData = ref({});
    
    // setup ref to router
    const router = useRouter();

    // create data / vars
    const userPTO = ref([]);
    const dataLoaded = ref(null);

    
    // get data
    const getData = async() => {
      try {
        const { data: pto, error } = await supabase.from("paid-time-off").select("*").eq("user_id", user.value.id);
        if (error) throw error;
        userPTO.value = pto.sort((a, b) => a.start.localeCompare(b.start));
        console.log(pto)
        dataLoaded.value = true;
      }
      catch(error) {
        console.warn(error.message);
      } 
    }

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
          userData.value = data;
        }
      } catch (error) {
        alert(error.message);
      }
    };

    const isPtoApproved = (item) => {
      if (item.is_approved && item.handled_date != null) {
        return true;
      }
    }

    const isPtoDenied = (item) => {
      if (!item.is_approved && item.handled_date != null) {
        return true;
      }
    }

    const isPtoRequested = (item) => {
      if (item.handled_date == null) {
        return true;
      }
      
    }

    // run data function
    onMounted(() => {
      getData();
      getProfile();
    });

    return {
      userPTO,
      dataLoaded,
      user,
      userData,
      isPtoApproved,
      isPtoDenied,
      isPtoRequested
    };
  }
});

</script>
