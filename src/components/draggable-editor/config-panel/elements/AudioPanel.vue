<template>
    <div class="rovlin-editor-panel-audio">
        <div class="upload-container">
            <button class="react-editor-button" @click="this.startInput()"> Upload Audio</button>
            <input type="file"  @change="handleFileUpload" 
                style="display: none;" ref="imageInput"/>
                
            <div style="margin-top: 21px;width: 80%" class="rovlin-editor-alert rovlin-editor-alert-primary">
                {{ newElement?.config?.fileName || "No Audio Uploaded"}}
            </div>
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
            if (!file) return;
            this.audioFile = file;
            this.newElement.config.fileName = file.name;
            this.newElement.config.src = URL.createObjectURL(file);
            if(this.newElement.config.src){
                this.updateAudio();
            }
     
        },
        updateAudio() {
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
    .rovlin-editor-panel-audio .upload-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }
</style>
