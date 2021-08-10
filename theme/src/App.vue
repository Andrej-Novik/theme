<template>
  <div class="app">
    <header class="header">
      <label>
        <input type="checkbox" @click="toggle" />
        <span>сменить тему</span>
      </label>
    </header>
    <div class="content">
      <div class="column">
        <h2>lorem</h2>
        <p>lorem lorem lorem lorem lorem</p>
        <div class="button">lorem</div>
      </div>
      <div class="column">
        <h2>lorem</h2>
        <p>lorem lorem lorem lorem lorem</p>
        <div class="button">lorem</div>
      </div>
      <div class="column">
        <h2>lorem</h2>
        <p>lorem lorem lorem lorem lorem</p>
        <div class="button">lorem</div>
      </div>
    </div>
    <footer class="footer">@Andrej-Novik</footer>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapMutations(["toggleTheme", "initDataTheme"]),
    toggle() {
      this.toggleTheme();
    },
  },
  mounted() {
    this.initDataTheme();
  },
};
</script>

<style lang="scss">
$Dark: #353535;
$White: #fff;

body {
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
  --Dark: #353535;
  --White: #fff;
}
.app {
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    background-color: $Dark;
    color: $White;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .content {
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
    background-color: $White;
    color: $Dark;
    .column {
      flex: 1 1 33.333%;
      text-align: center;
      .button {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        background-color: $Dark;
        color: $White;
      }
    }
  }
  .footer {
    background-color: $Dark;
    color: $White;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
[data-theme="light"] .app {
  .header {
    background-color: $White;
    color: $Dark;
  }
  .content {
    background-color: $Dark;
    color: $White;
    .button {
      background-color: $White;
      color: $Dark;
    }
  }
  .footer {
    background-color: $White;
    color: $Dark;
  }
}
//body.light {
//	--Dark: #fff;
//	--White: #353535;
//}

//@media(prefers-color-sheme: dark) {

//}
//@media(prefers-color-sheme: light) {

//}
</style>
