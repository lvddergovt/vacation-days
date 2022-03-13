<template>
  <div>
    <!-- <select v-model="key" class="select w-full max-w-xs" data-choose-theme>
      <option v-for="(theme, index) in themes" :key="index" class="mr-5">
        {{ theme }}
      </option>
    </select> -->
    <input type="checkbox" class="toggle mr-5" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" />

  </div>
</template>

<script>
import { themeChange } from 'theme-change'

export default {
  setup() {
    const themes = ['light', 'dark'];
    const key = "";

    const getTheme = () => {
      this.key = localStorage.getItem('theme') || 'dark'
      return this.key
    }


    return {
      themes,
      key,
      getTheme
    };
  },
  async mounted() {
    themeChange(false)
    await this.getTheme
  },
}
</script>
