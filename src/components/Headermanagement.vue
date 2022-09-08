<template>
    <div class="header-management">
        <div>
           <img src="icon.png" alt="e-fako"> 
        </div>
        <ul>
           <a href="#">CUSTOMER MANAGEMENT</a>
           <a href="#">TASK MANAGEMENT</a>
           <a href="#">PERSONNEL MANAGEMENT</a>
           <a href="#">TOOLS MANAGEMENT</a>
        </ul>
    </div>
    <hr class="line">
</template>

<style>
.line{
    width: 500px;
}
.header-management{
    display: flex;
    justify-content: space-evenly;
}
.header-management img{
    width: 59px;
    height: 69px;
}

.header-management ul{
    list-style-type: none;
    display: inline-flex;
    justify-content: space-between;
    font-family: 'Times New Roman';
    font-size: 15px;
    line-height: 31px;
    
}
.header-management a{
    margin: 0 50px;
    text-decoration: none;
    color: black;
}
.header-management ul :hover{
   color: rgb(247, 152, 11);
}
</style>