<template>
    <div class="header">
        <div class="content-header">
            <a href="#/"><img src="../assets/logo.png" alt="e-fako"></a>
            <h1>HOME WASTE COLLECTION AND RECYCLING</h1>
        </div>
        <div class="navBar">
            <ul>
                <li><a href="#/about">About</a></li>
                <li><a href="#/general_rules">General Rules</a></li>
                <li><a href="#/inscription_step1">Sign up</a></li>
                <li><a href="#/contact">Contact</a></li>
            </ul>
        </div>
    </div>
</template>

<style>
.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 200px;
    background: linear-gradient(180.04deg, #f1ac1b 54.47%, rgba(211, 147, 10, 0) 110%);
    z-index: 1;
}

.header::-webkit-scrollbar {
    height: 100px;
}

.content-header {
    display: flex;
    justify-content: center;
    margin-top: 0px;
}

.content-header a {
    cursor: default;
}

.content-header img {
    position: relative;
    padding-right: 100px;
    width: 175px;
    height: 135px;
}

.navBar {
    text-align: center;
    position: relative;
    bottom: 70px;
    height: 100px;
}

.navBar a {
    color: #FFFFFF;
    text-decoration: none;
}

.header h1 {
    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: rgba(250, 244, 244, 0.986);
    cursor: default;
}

.header ul {
    list-style-type: none;
    margin-left: 10px;
    margin-right: 20px;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    color: rgb(250, 250, 250);

    font-family: 'Consolas';
    font-style: normal;
    font-size: 34px;
    line-height: 51px;
}

.header li {
    width: 300px;
}
</style>
