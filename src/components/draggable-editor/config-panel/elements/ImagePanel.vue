<template>
    <div class="rovlin-editor-panel-image">
        <div class="upload-container">
            <button class="react-editor-button" @click="this.startInput()"> Upload Image</button>
            <input type="file" accept="image/jpeg, image/png, image/jpg" @change="handleFileUpload" 
                style="display: none;" ref="imageInput"/>
            <img  :src="newElement?.config?.src" width="180" height="160" style="border-radius: 4px;margin-top: 13px;"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImagePanel',
    props: {
        element:Object
    },
    data(){
        return {
            newElement: {},
        }
    },
    methods:{
        startInput(){
            this.$refs.imageInput.click();
        },
        handleFileUpload(event) {
            const file = event.target.files[0]; 
            console.log("file Reader --->",file.name)
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.newElement.config.src = reader.result;
                    this.updateImage()
                };
            }
        },
        updateImage() {
            this.$emit('update:element', { ...this.newElement})
        },
    },
    mounted(){
        this.newElement = JSON.parse(JSON.stringify(this.element))
        console.log("the new Element --->",this.newElement.config.src)
    },
    watch:{
        element:{
            handler(newVal){
                if(this.newElement !== newVal){
                    this.newElement =  JSON.parse(JSON.stringify(newVal))
                }
            },
            deep:true
        }
    }
}

</script>
<style scoped>
    .rovlin-editor-panel-image .upload-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }
</style>
