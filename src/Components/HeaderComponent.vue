<template>
    <div class="header">
        <div class="content-header">
            <div class="logo">
                <img src="" alt="">
            </div>
            <div class="nav-bar">
                <nav>
                    <ul>
                        <li><a href="#">CUSTOMER MANAGEMENT</a></li>
                        <li><a href="#">TASK MANAGEMENT</a></li>
                        <li><a href="#">PERSONNEL MANAGEMENT</a></li>
                        <li><a href="#">TOOLS MANAGEMENT</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="line">
            <hr />
        </div>
    </div>
</template>

<style>
li a {
    text-decoration: none;
    color: rgb(49, 4, 4);
    letter-spacing: 0.1rem;
}

nav ul li {
    list-style-type: none;
    display: inline-block;
    padding: 20px;
    margin-left: 50px;
    margin-top: 30px;
}

li a:hover {
    color: rgb(173, 173, 42);
    text-decoration: underline;
}

.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    /*background-color: #287265;*/
    height: 60px;
}

.logo {
    float: left;
    width: 120px;
}

.line hr {
    position: relative;
    width: 500px;
    left: 40%;
    margin-top: 30px;
}
</style>