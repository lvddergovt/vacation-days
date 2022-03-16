<template>

  <section>
    
    <div class="container">

      <div class="flex justify-center gap-20">
        <div class="basis-1/3 card shadow-lg">
          <div class="card sm:grow">
            <div class="card-body">
            
              <div class="mt-5 md:mt-0 md:col-span-2 w-full">
                <form @submit.prevent="createPTORequest">
                  <div class="md:flex gap-5 mb-8">
                    <div class="md:w-1/2">
                      <label for="start" class="label">From</label>
                      <input type="date" id="start" class="input input-bordered block w-full" v-model="start" />
                    </div>
                    <div class="md:w-1/2">
                      <label for="end" class="label">To</label>
                      <input type="date" id="end" class="input input-bordered block w-full" v-model="end" />
                    </div>
                  </div>
                  
                  <div class="mb-8">
                    <label for="type" class="label">Type</label>
                    <select id="type" class="w-full select select-bordered" v-model="type">
                      <option value="vacation">Vacation</option>
                    </select>
                  </div>
                                 

                    
                  <div class="py-3 text-right sm:px-6">
                    <button type="submit" class="btn btn-primary">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="basis-1/3 card shadow-lg">
          
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
  name: 'Create',
  components: {
    
  },
  setup() {

    // get user from store
    const user = computed(() => store.state.user);

    
    // setup ref to router
    const router = useRouter();

    // create data / vars
    const start = ref("");
    const end = ref("");
    const type = ref("");
    
    const createPTORequest = async() => {
      try {
        const { data, error } = await supabase.from('paid-time-off').insert([
          { 
            start: start.value, 
            end: end.value,
            type: type.value,
            user_id: user.value.id
          },
        ]);
        if (error) throw error;
      }
      catch(error) {

      }

      
    
    }

    return {
      start,
      end,
      type,
      user,

      createPTORequest
    };
  }
});

</script>
