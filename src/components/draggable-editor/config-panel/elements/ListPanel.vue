<template>    
    <div style="display: flex;justify-content: center;margin-top: 15px;">
        <button class="react-editor-button" @click="this.addListItem()">Add List Item</button>
    </div>
</template>

<script>
export default {
    name: 'ListPanel',
    props: {
        element:Object
    },
    data(){
        return {
            newElement: {}
        }
    },
    methods:{
        addListItem(){
            this.newElement.config.content.push(`New Item ${this.newElement.config.content.length + 1}`)
            this.updateList();
        },
        updateList() {
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
</style>
