<script>
import Landingpage from '../Components/LandingpageComponent.vue';
export default {
  data() {

  },
  components: {
    Landingpage,
  }
}
</script>

<template>
  <div class="header">
    <Landingpage />
  </div>
  <div class="container">
    <div class="title1">
      <h2>Reuse, Reduce and Recycle</h2>
    </div>
    <div class="text">
      <p>
        Do you need someone to <br>
        dispose of your waste ? We <br>
        are there for you each <br>
        day !
      </p>
    </div>
    <div class="button">
      <button>Read More</button>
    </div>
  </div>
</template>

<style>
.container {
  float: left;
  padding-top: 150px;
  padding-left: 50px;
  text-align: center;
}

p {
  font-size: 20px;
}

button {
  padding: 15px;
  width: 150px;
  border-radius: 10px;
  font-size: large;
  background-color: #f1ac1b;
  border: none;
}

button:hover {
  color: beige;
  background-color: rgb(49, 73, 95);
  box-shadow: 10px 10px 5px grey;
}
</style>