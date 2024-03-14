<template>
    <div style="width:100%" class="rovlin-editor-divider-element">
        <!-- Ref Element -->
        <div style="padding:10px">
            <div :style="element.config.styles.container">
                <div :style="element.config.styles.divider"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DividerElement',
    props: {
        element: Object,
    },
    data() {
        return {
            content: ''
        }
    },
    mounted() {
        this.content = this.element.config.content;
    }
}
</script>

<style scoped>
.rovlin-editor-divider-element :focus-visible,
.rovlin-editor-divider-element :hover {
    outline: none !important;
}
</style>
