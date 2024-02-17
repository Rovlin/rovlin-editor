
<template>
    <div class="rovlin-draggable-editor">
        <div class="rovlin-editor-container">
            <RovlinEditor />
        </div>
        <div class="rovlin-elements">
            <DraggableElement />
        </div>
    </div>
</template>
<script>

import DraggableElement from './DraggableElement.vue';
import RovlinEditor from '../editor/Editor.vue';
export default {
    components: {
        DraggableElement,
        RovlinEditor
    }
}

</script>

<style scoped>
.rovlin-draggable-editor {
    display: flex;
}

.rovlin-draggable-editor .rovlin-editor-container {
    width: calc(100% - 320px);
}

.rovlin-draggable-editor .rovlin-elements {
    width: 320px;
    border-left: 1px solid #000;
    padding-left: 10px;
}
</style>
