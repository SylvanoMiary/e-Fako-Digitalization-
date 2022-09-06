<template>
    <div class="sidebar">
        <button><a href="#">Customer request</a></button>
        <button><a href="#">Customer information</a></button>
        <button><a href="#">Reconfirmation e-mail</a></button>
    </div>
</template>

<style>
.sidebar {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 300px;
    margin-top: 50px;
    margin-left: 20px;
}

.sidebar a {
    display: block;
    margin: 40px 0px;
    text-decoration: none;
    font-size: large;
    background-color: rgb(235, 180, 78);
    color: white;
}

.sidebar a:hover {
    text-decoration: underline;
}

button {
    border: none;
}
</style>