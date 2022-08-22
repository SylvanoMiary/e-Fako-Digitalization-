<script>
  export default{
    data(){
      return{
        username: "",
        password: "",
      }
    }
  }
</script>

<template>
    <div class="wrapper">
        <div class="logo">
            <h1>e-Fako</h1>
            <p>Let's preserve our environment</p>
        </div>
        <div class="container login">
            <div class="content-icon">
              <font-awesome-icon icon="circle-user" class="icon1"/>
              <hr>
            </div>
            <div class="content-login">
                <form class="content-input">
                    <div class="Username-Input">
                        <font-awesome-icon icon="user" class="iconInput"/>
                        <input type="text" placeholder="Username" v-model="username">
                    </div>
                    <div class="Password-Input">
                        <font-awesome-icon icon="key" class="iconInput"/>
                        <input type="password" placeholder="Password" v-model="password">
                    </div>
                    <div class="forget">
                        <a href="#/forget_password">Forget password?</a>
                    </div>
                    <div class="button">
                        <button>LOGIN</button>
                    </div>                                        
                </form>
                <div class="content-card">
                    <a href="#/inscription_step1">Membership request</a>
                    <a href="#/Not Found">More ...<i></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .logo{
    position: absolute;
    left: 200px;
    top: 200px;
    opacity: 0.8;
  }
  .logo h1{
    font-size: 120px;
  }
  .wrapper{
    display: flex;
    justify-content: center;
  }
  .login{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-right: 50px;
    padding: 2px 10px 10px 10px;
    width: 400px;
    height: 500px;
    left: 792px;
    top: 50px;
  }
  .content-login{
    padding: 0px 50px 0px 50px;
  }
  .content-input{
    margin-bottom: 10px;
  }
  .content-input input{
    border: none;
    font-size: 25px;
    background-color: transparent;
    font-family: Poppins;
    height: 50px;
    color: #FFFFFF;
  }
  .Username-Input, .Password-Input{
    border-bottom: 2px solid #CDCDCD;
    display: flex;
  }
  .forget{
    margin-bottom: 20px;
    margin-top: 5px;
    text-align: left;
  }
  .forget a{
    text-decoration: none;
    color: #CDCDCD;
  }
  .button{
    display: flex;
    justify-content: center;
  }
  .content-input button{
    display: block;
    font-size: 25px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.38);
    border-radius: 40px;
    padding: 5px 40px 5px 40px;
    margin-bottom: 40px;
    cursor: pointer;
  }
  .content-card{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .content-card a{
    text-decoration: none;
    color: #FFFFFF;
    padding: 5px;
  }
  .content-icon{
    color: #CDCDCD;
    padding: 20px;
  }
  .content-icon hr{
    position: relative;
    bottom: 65px;
    width: 350px;
    z-index: 0;
    height: 2px;
    border: none;
    background-color: #CDCDCD;
  }
  .icon1{
    position: sticky;
    height: 120px;
    padding: 10px;
    padding-top: 0;
    z-index: 1;
  }
  .iconInput{
    color: #CDCDCD;
    height: 30px;
    padding: 10px;
  }
</style>
