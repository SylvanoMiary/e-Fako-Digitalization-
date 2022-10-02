<script>
  export default{
    data(){
      return{
        username: null,
        password: null,
        errors: []
      }
    },
    methods:{
        checkForm: function (e){
          if(this.username && this.password){
            return true
          }

          this.errors = []

          if(!this.username){
            this.errors.push('Username required.')
          }
          if(!this.password){
            this.errors.push('Password required.')
          }
          console.log(this.errors)
          e.preventDefault()
          
        }
    } 
  }
</script>

<template>
    <div class="wrapper-login">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
            <p>Let's preserve our environment</p>
        </div>
        <div class="container login">
            <div class="content-icon">
              <font-awesome-icon icon="circle-user" class="icon1"/>
              <hr>
            </div>
            <div class="content-login">
                <form class="content-input" @submit="checkForm">
                    <div class="Username-Input">
                        <font-awesome-icon icon="user" class="iconInput"/>
                        <input type="text" placeholder="Username" v-model="username" required>
                    </div>
                    
                    <div class="Password-Input">
                        <font-awesome-icon icon="key" class="iconInput"/>
                        <input type="password" placeholder="Password" v-model="password" required>
                    </div>
                    <div class="forgot">
                        <a href="#/forgot_password">Forgot password?</a>
                    </div>
                    <div class="button">
                        <button type="submit">LOGIN</button>
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
.errorUser p{
width: 140px;
}
*{
  margin: 0;
  padding: 0;
}
.logo p{
  display: flex;
  z-index: 1;
  position: relative;
  bottom: 200px;
  left: 280px;
  color: black;
}

.logo img{
  z-index: 0;
  height: 500px;

}
.wrapper-login{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5.9% 0;
  background-image: linear-gradient(150.84deg, rgb(253, 245, 245), rgb(85, 79, 0));
  background-size: contain;
}
.login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2px 10px 10px 10px;
  width: 400px;
  height: 500px;
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
.forgot{
  margin-bottom: 20px;
  margin-top: 5px;
  text-align: left;
}
.forgot a{
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
