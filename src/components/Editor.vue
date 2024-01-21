<template>
    <div class="editor">
        <RovlinEditorToolbar />
        <div class="content" contenteditable="true" @input="updateContent">
            <!-- This is where the editable content will go -->
        </div>
    </div>
</template>

<script>
import RovlinEditorToolbar from './Toolbar.vue';

export default {
    name: 'RovlinEditor',
    props: {
        msg: String
    },
    components: {
        RovlinEditorToolbar
    },
    data() {
        return {
            content: ''
        };
    },
    methods: {
        updateContent(event) {
            this.content = event.target.innerHTML;
        }
    }
}
</script>

<style scoped>
.editor .content {
    border: 1px solid #ccc;
    min-height: 200px;
    padding: 8px;
}
</style>
