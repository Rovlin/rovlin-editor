<template>
    <div style="width:100%" class="rovlin-editor-list-element">
        <!-- Ref Element -->
        <div style="padding:10px">
            <div :style="element.config.styles.container">
                <ul  :style="element.config.styles.list" style="display: inline-block;margin: 0;">
                    <li contenteditable="true" v-for="(item,index) in listElements" @input="updateItem($event, index)"
                     :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ListElement',
    props: {
        element: Object,
    },
    data(){
        return {
            listElements: []
        }
    },
    methods:{
        updateItem(event, index) {
            this.listElements[index] = event.target.textContent
            this.updateContent();
        },
        updateContent() {
            console.log("Updated Content:", this.listElements);
            this.$emit('update:element', { ...this.element, config: { ...this.element.config, content: this.listElements}});
        },
    },
    mounted(){
        this.listElements = JSON.parse(JSON.stringify(this.element.config.content));
    },
    watch:{
        element:{
            handler(newVal){
                if(this.listElements !== newVal.config.content){
                    this.listElements =  JSON.parse(JSON.stringify(newVal.config.content))
                }
            },
            deep:true
        }

    }
}
</script>

<style scoped>
.rovlin-editor-list-element :focus-visible , .rovlin-editor-list-element :hover  {
    outline: none !important;
}
</style>
