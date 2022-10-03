<template>
    <div class="header">
        <div class="header1">
            <div class="logo">
                <img src="" alt="logo E-Fako">
            </div>
            <div class="title">
                <h1>HOME WASTE COLLECTION AND RECYCLING</h1>
            </div>
        </div>
        <div class="nav-bar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">General Rules</a>
            <a href="#">Sign Up</a>
            <a href="#">Contact</a>
        </div>
    </div>
</template>

<style>
.header1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 75px;
    margin: 0;
    padding: 0;
}

.title {
    text-align: center;
    margin-left: 200px;
    color: white;
}

.logo {
    margin-left: 50px;
}

.nav-bar a {
    color: rgb(49, 4, 4);
    text-decoration: none;
    letter-spacing: 0.1mm;
    margin: 65px;
    font-size: 20px;
}

.nav-bar {
    margin-left: 200px;
    padding-bottom: 25px;
}

a:hover {
    color: rgb(231, 231, 208);
    text-decoration: underline;
}

.header {
    background: linear-gradient(180.04deg, #f1ac1b 54.47%, rgba(211, 147, 10, 0) 110%);
}
</style>