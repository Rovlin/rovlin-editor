<template>
    <div style="width:100%" class="rovlin-editor-image-element">
        <!-- Ref Element -->
        <div style="padding:10px">
            <div :style="element.config.styles.container" style="display: flex">
                <div  :style="element.config.styles.image" >
                    <img :src="element.config.src" style="width: 100%;height: 100%;"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'ImageElement',
props: {
    element: Object,
},
data(){
  
},
methods:{
   
},
mounted(){
   
}
}
</script>

<style scoped>

.rovlin-editor-image-element :focus-visible , .rovlin-editor-image-element :hover  {
    outline: none !important;
}

</style>