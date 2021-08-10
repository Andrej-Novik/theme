import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "dark",
  },
  mutations: {
    initDataTheme(state) {
      console.log("yoo");
      const theme = localStorage.getItem("theme");
      document.documentElement.dataset.theme = theme;
      state.theme = theme;
    },

    toggleTheme(state) {
      let newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      document.documentElement.dataset.theme = newTheme;
      state.theme = newTheme;
      //document.getElementsByTagName("body")[0].classList.toggle("active");
    },
  },
});
