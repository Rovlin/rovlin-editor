<template>
        <div style="width:100%" class="rovlin-editor-button-element">
            <!-- Ref Element -->
            <div style="padding:10px">
                <div :style="element.config.styles.container">
                    <div  :style="element.config.styles.button" style="display: inline-block;" contenteditable="true">
                        <span @input="updateContent">{{ content }}</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'ButtonElement',
    props: {
        element: Object,
    },
    data(){
        return {
            content: ''
        }
    },
    methods:{
        updateContent(event) {
            this.$emit('update:element', { ...this.element, config: { ...this.element.config, content: event.target.innerText }})
        },
    },
    mounted(){
        this.content = this.element.config.content;
    }
}
</script>

<style scoped>

.rovlin-editor-button-element :focus-visible , .rovlin-editor-button-element :hover  {
    outline: none !important;
}

</style>