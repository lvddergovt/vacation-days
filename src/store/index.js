import { reactive } from "vue";

const state = reactive({
  user: null,
});

const methods = {
  setUser(payload) {
    state.user = payload ? payload.user : null
  }
}

// perhaps get user profiles here?

export default {
  state,
  methods
};
