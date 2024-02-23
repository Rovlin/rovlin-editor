<template>
    <div style="width:100%" class="rovlin-editor-audio-element">
        <!-- Ref Element -->
        <div style="padding:10px">
            <div :style="element.config.styles.container" style="display: flex">
                <audio controls :src="element.config?.src" 
                    :style="element.config.styles.audio"></audio>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'AudioElement',
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

.rovlin-editor-audio-element :focus-visible , .rovlin-editor-audio-element :hover  {
outline: none !important;
}

</style>