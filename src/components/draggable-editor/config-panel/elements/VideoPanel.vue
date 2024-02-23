<template>
    <div class="rovlin-editor-panel-image">
        <div class="upload-container">
            <button class="react-editor-button" @click="this.startInput()"> Upload Video</button>
            <input type="file"  @change="handleFileUpload" style="display: none;" ref="imageInput"/>
                <video :src="newElement.config?.src" v-if="newElement.config?.src" 
                     width="180" height="160" style="border-radius: 4px;margin-top: 13px;">
                </video>
                <div v-if="!newElement.config?.src" style="margin-top: 21px;width: 80%;text-align: center;" class="rovlin-editor-alert rovlin-editor-alert-primary">
                   No Video Uploaded
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
                this.updateVideo();
            }
        },
        updateVideo() {
            this.$emit('update:element', { ...this.newElement})
        },
    },
    mounted(){
        this.newElement = JSON.parse(JSON.stringify(this.element))
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
