<template>
    <div class="header-management">
        <div>
            <img src="icon.png" alt="e-fako">
        </div>
        <ul>
            <a href="#/admin/management">CUSTOMER MANAGEMENT</a>
            <a href="#/admin/taskmanagement">TASK MANAGEMENT</a>
            <a href="#/admin/personnelmanagement">PERSONNEL MANAGEMENT</a>
            <a href="#/admin/toolsmanagement">TOOLS MANAGEMENT</a>
        </ul>
    </div>
    <hr class="line">
</template>

<style>
.line {
    width: 500px;
}

.header-management {
    display: flex;
    justify-content: space-evenly;
}

.header-management img {
    width: 59px;
    height: 69px;
}

.header-management ul {
    list-style-type: none;
    display: inline-flex;
    justify-content: space-between;
    font-family: 'Times New Roman';
    font-size: 15px;
    line-height: 31px;

}

.header-management a {
    margin: 0 50px;
    text-decoration: none;
    color: black;
    font-size: large;
}

.header-management ul :hover {
    color: rgb(247, 152, 11);
}
</style>