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
        position: relative;
        background-image: linear-gradient(180deg, transparent, transparent);
        backdrop-filter: blur(5px);
        text-align: center;
        z-index: 1;
    }
</style>