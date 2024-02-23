<template>
        <div style="width:100%" class="rovlin-editor-text-element">
            <!-- Ref Element -->
            <div style="padding:10px">
                <div class="w-100 rounded-5" :style="element.config.styles">
                    <p style="margin:0" v-if="element.type === 'text'"  @input="updateContent" contenteditable="true">{{ content }}</p>
                    <a style="margin:0" v-if="element.type === 'link'" :href="element.config.link"  
                        @input="updateContent" contenteditable="true">{{ content }}</a>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'TextElement',
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

.rovlin-editor-text-element :focus-visible , .rovlin-editor-text-element :hover {
    outline: none !important;
}

</style>