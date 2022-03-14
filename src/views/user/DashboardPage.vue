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
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src="@/assets/images/jelly-a-monster-with-a-suitcase-and-a-hat-carries-a-flower-on-a-date.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Hart Hagerty</div>
                      <div class="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br>
                  <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DashboardPage',
  components: {
    
  },
});
</script>
