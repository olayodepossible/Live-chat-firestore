<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h3 class="teal-text">Welcome</h3>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name" />
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn teal">Enter</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data: () => ({
    name: null,
    feedback: null
  }),

  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat" });
      } else {
        this.feedback = "You must enter a name to join";
      }
    }
  }
};
</script>

<style>
.welcome {
  max-width: 400px;
  margin: 25vh auto;
}
.welcome form {
  text-align: left;
}
.welcome h2 {
  font-size: 20px;
}
.welcome button {
  margin: 20px 0 0 140px;
}
</style>
