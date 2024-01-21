<template>
    <div class="toolbar">

        <!-- Existing Formatting Buttons -->
        <button type="button" @click="execCommand('bold')">
            <i class="bi bi-type-bold"></i>
        </button>
        <button type="button" @click="execCommand('italic')">
            <i class="bi bi-type-italic"></i>
        </button>
        <button type="button" @click="execCommand('underline')">
            <i class="bi bi-type-underline"></i>
        </button>

        <!-- Additional Buttons -->
        <button type="button" @click="execCommand('justifyLeft')">
            <i class="bi bi-text-left"></i>
        </button>
        <button type="button" @click="execCommand('justifyCenter')">
            <i class="bi bi-text-center"></i>
        </button>
        <button type="button" @click="execCommand('justifyRight')">
            <i class="bi bi-text-right"></i>
        </button>
        <button type="button" @click="execCommand('insertOrderedList')">
            <i class="bi bi-list-ol"></i>
        </button>
        <button type="button" @click="execCommand('insertUnorderedList')">
            <i class="bi bi-list-ul"></i>
        </button>
        <button type="button" @click="execCommand('createLink')">
            <i class="bi bi-link-45deg"></i>
        </button>

        <!-- New Buttons -->
        <button type="button" @click="execCommand('strikethrough')">
            <i class="bi bi-type-strikethrough"></i>
        </button>
        <button type="button" @click="execCommand('blockquote')">
            <i class="bi bi-blockquote-left"></i>
        </button>
        <button type="button" @click="execCommand('undo')">
            <i class="bi bi-arrow-counterclockwise"></i>
        </button>
        <button type="button" @click="execCommand('redo')">
            <i class="bi bi-arrow-clockwise"></i>
        </button>
        <button type="button" @click="execCommand('removeFormat')">
            <i class="bi bi-eraser"></i>
        </button>

        <button type="button" @click="execCommand('fontSize', '4')"> <!-- Change as needed -->
            <i class="bi bi-type"></i> Font Size
        </button>
        <button type="button" @click="execCommand('foreColor', 'red')"> <!-- Change color as needed -->
            <i class="bi bi-fonts"></i> Font Color
        </button>
        <button type="button" @click="execCommand('hiliteColor', 'yellow')"> <!-- Change color as needed -->
            <i class="bi bi-highlight"></i> Highlight Text
        </button>
        <button type="button" @click="execCommand('insertHorizontalRule')">
            <i class="bi bi-dash-lg"></i>
        </button>
        <button type="button" @click="execCommand('insertImage', 'image-url')">
            <!-- Replace with actual image URL input method -->
            <i class="bi bi-image"></i>
        </button>
    </div>
</template>
<script>
export default {
    name: 'RovlinEditorToolbar',
    props: {
        msg: String
    },
    methods: {
        execCommand(command) {
            document.execCommand(command, false, null);
        }
    }
}
</script>
<style scoped>
button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;

    display: flex;
    align-items: center;
    column-gap: 5px;
}

button i {
    font-size: 1.2rem;
}

button:hover {
    background: #eee;
}

.toolbar {
    border: 1px solid #ccc;
    display: flex;
    padding: 5px;

    flex-wrap: wrap;
    gap: 5px;
}
</style>
