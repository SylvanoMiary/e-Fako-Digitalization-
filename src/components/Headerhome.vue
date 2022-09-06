<template>
    <div class="header">
        <div class="content-header">
            <img src="../assets/logo.png" alt="e-fako">
            <h1>HOME WASTE COLLECTION AND RECYCLING</h1>
        </div>
        <div class="navBar">
            <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/general_rules">General Rules</a></li>
                <li><a href="#/inscription_step1">Sign up</a></li>
                <li><a href="#/contact">Contact</a></li>
            </ul>
        </div>
    </div>
</template>

<style>
.header{
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 200px;
    background: linear-gradient(180.04deg, #f1ac1b 54.47%, rgba(211, 147, 10, 0) 110%);
    z-index: 1;
}
.header::-webkit-scrollbar{
    height: 100px;
}
.content-header{
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.content-header img{
    position: relative;
    padding-right: 100px;
    width: 175px;
    height: 135px;
}

.navBar{
    text-align: center;
    position: relative;
    bottom: 30px;
    height: 100px;
}

.header h1{
    font-family: 'Comic Sans MS';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: rgba(250, 244, 244, 0.986);
}

.header ul{
    list-style-type: none;
    margin-left: 10px;
    margin-right: 20px;
    display: grid;
    grid-template-columns: auto auto auto auto auto ;
    color: rgb(250, 250, 250);

    font-family: 'Consolas';
    font-style: normal;
    font-size: 34px;
    line-height: 51px;
}
</style>
