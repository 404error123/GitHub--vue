<template>
    <span class="type">
        <span v-if="type.toLowerCase() === 'css'"><i class="black"></i>CSS</span>
        <span v-if="type.toLowerCase() === 'js'"><i class="orange"></i>JavaScript</span>
        <span v-if="type.toLowerCase() === 'html'"><i class="red"></i>HTML</span>
    </span>
</template>

<script>
export default {
    props: ['type']
}
</script>
<style>
    .type {
        font-size: 12px;
    }
    .type i {
        display: inline-block;
        margin-bottom: -1px;
        margin-right: 3px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }    
    .type i.red {
        background: #e34c26;
    }  
    .type i.black {
        background: #563d7c;
    }  
    .type i.orange {
        background: #f1e05a;
    } 
</style>
