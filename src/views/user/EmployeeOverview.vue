<template>

  <section>
    

    <div class="container">

      <div class="card shadow-lg">
        <div class="card-body items-center text-center">
         
          <table class="table table-fixed w-full">
            <!-- head -->
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr v-for="(user, index) in users" :key="index">
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src="https://api.lorem.space/image/face?hash=33791" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{{ user.firstname }} {{ user.lastname }}</div>
                      <div class="text-sm opacity-50">Nederland</div>
                    </div>
                  </div>
                </td>
                <td>
                  {{ user.job_title }}
                  <br>
                  <span class="badge badge-ghost badge-sm">Full Time</span>
                </td>
                <th>
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>

            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import { supabase } from "@/supabase/init";

export default defineComponent({
  name: 'EmployeeOverview',
  components: {
    
  },

  setup() {
    const users = ref(null);

    const getUsers = async() => {
      let { data, error } = await supabase
      .from('profiles')
      .select('*');

      users.value = data;
    }

    onMounted(() => {
      getUsers();
    })

    return {
      users
    }
  }
});
</script>
