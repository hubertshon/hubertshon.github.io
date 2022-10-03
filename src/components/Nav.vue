<template>
  <div class="nav-container">
    <b-row align-h="center" class="d-flex align-content-middle">
      <b-col class="d-flex justify-content-center">
          <span class="nav-button"><router-link to="/">Home</router-link></span>
      </b-col>
      <b-col class="d-flex justify-content-center">
          <span class="nav-button"><router-link to="/about">About</router-link></span>
        </b-col>
        <b-col class="d-flex justify-content-center">
          <span class="nav-button"><router-link to="/projects">Projects</router-link></span>
        </b-col>
        <b-col class="d-flex justify-content-center">
          <span class="nav-button"><router-link to="/contact">Contact</router-link></span>
          </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: {},
  data:() => ({}),
  mounted() {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  margin: 0 auto;
  max-width: 65%;
  height: 4vh;
}



.nav-button {
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.85em;
  font-weight: 500;
  justify-content: center;
}

.nav-button:hover {
  color: #ffffff;
  text-decoration: none;
}

@media only screen and (max-width: 414px) {
  .nav-container {
    max-width: 90%
  }

  .nav-button {
    letter-spacing: 0.25em;
    font-size: 0.7em;
  }
}

a {
  color: #acacac;
  font-family: "Raleway", sans-serif;
  /* font-weight: 500; */
}

a:hover {
  color: #FFFFFF;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #ffc14e;
}
</style>
