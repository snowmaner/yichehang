<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
html{
    font-size: 13.3333vw;
}
body{
  margin: 0;
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
p{
  margin: 0;
}
a{
  text-decoration: none;
}
#app {
  position: relative;
}
</style>
