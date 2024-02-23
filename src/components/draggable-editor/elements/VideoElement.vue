<template>
    <div style="width:100%" class="rovlin-editor-video-element">
        <!-- Ref Element -->
        <div style="padding:10px">
            <div :style="element.config.styles.container" style="display: flex">
                <video controls :src="element.config?.src" 
                    :style="element.config.styles.video"></video>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'VideoElement',
props: {
    element: Object,
},
data(){
    return {

    }
},
methods:{

},
}
</script>

<style scoped>

.rovlin-editor-video-element :focus-visible , .rovlin-editor-video-element :hover  {
    outline: none !important;
}

</style>