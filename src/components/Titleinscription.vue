<script>
    export default{
        props: ['title', 'intro']
    }
</script>

<template>
    <div class="content-title">
        <h1>{{title}}</h1>
        <p>{{intro}}</p>
    </div>
</template>

<style>
    .content-title{
        margin: 0;
        padding: 0;
    }
    .content-title p{
        padding-bottom: 50px;
    }
</style>