<template>
  <div id="app">
    <img src="../public/banner.png" alt="bannière" class="w-100">
    <Navigation/>
    <router-view/>
    <Social/>
    <Footer/>
    
  </div>
</template>
<script>
// import Router from 'vue-router'

import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Social from './components/Social.vue'
// import FwSlider from './components/FwSlider.vue'
export default {
  name: "#app",
  components: {
    Navigation, Footer, Social
    }
    
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: .5rem 1rem !important;
}

#nav a {
  font-weight: 300;
  color: rgba(127,127,127, 0.8);
  /* text-shadow: 1px 1px darkslategray; */
}

footer a {
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: .8rem;
  color: darkgrey;
}
footer p {
  font-size: 1.25rem;

}
#nav a.router-link-exact-active,
footer a.router-link-exact-active {
  color: #fff;
  /* 
  text-decoration:underline;
  border: none !important; */
}
footer a:hover {
  text-decoration: underline !important;
  color: inherit;
}

#nav a.router-link-exact-active:hover {
  color: #777;
  text-decoration: none;
}

.card {
  border-radius: 0.5rem !important;
  border: 1px solid aquamarine !important;
}
.card .card-header {
  background-color: aquamarine !important;
}
.card .card-footer {
  background-color: aquamarine !important;
}
li {
  list-style: none;
}
</style>
