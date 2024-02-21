<template>
    <div class="rovlin-editor-w-100 rovlin-editor-block-builder">
        <slot></slot>
    </div>  

</template>

<script>
export default {
    name:'BlockBuilder',

}
</script>

<style scoped>
.rovlin-editor-block-builder :hover{
    outline: 2px solid rgba(90, 79, 220, 0.5);
}

</style>
