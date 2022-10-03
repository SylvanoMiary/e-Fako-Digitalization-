<script>
import LandingpageComponent from '../Components/LandingpageComponent.vue';

export default {
  data() {

  },
  components: {
    LandingpageComponent,
  }
}
</script>

<template>
  <div class="header">
    <LandingpageComponent />
  </div>
  <div class="container">
    <h2>for prevention, security and health</h2>
    <div class="text">
      <p>
        E-fako is a community that takes care of home waste <br>
        collection. Before benefiting from our services, it's <br>
        essential to know how our services and payments <br>
        work.
      </p>
      <p>
        You should indicate the day and the time that you <br>
        think is convenient for us to pick up your waste. You <br>
        will then receive a confirmation email if your request <br>
        is accepted and if not, you will be notified if it's <br>
        necessary to postpone the schedule you have <br>
        indicated.
      </p>
      <p>
        Regargding the payment, you will have to make a <br>
        payment to the account number 0000000000 before <br>
        closing the request for our offer. No refund will be <br>
        made if you wish to cancel your reservation, you can <br>
        however either postpone the fee or definitively cancel <br>
        your reservation.
      </p>
    </div>
  </div>
</template>

<style>
.container {
  text-align: center;
  margin-top: 45px;
}

.text {
  margin-top: 20px;
}

.text p {
  font-size: 20px;
}

h2 {
  font-size: 25px;
}
</style>