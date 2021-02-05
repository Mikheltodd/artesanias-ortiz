new Vue({
  el: "#app",
  data: {
    greeting: "Bienvenido a Artesanías Ortiz",
  },
  methods: {
    changeGreeting() {
      this.greeting =
        this.greeting === "Bienvenido a Artesanías Ortiz"
          ? "Welcome to Artesanías Ortiz"
          : "Bienvenido a Artesanías Ortiz";
    },
  },
});
