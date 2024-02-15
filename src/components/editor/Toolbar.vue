<template>
<div class="rovlin-editor-toolbar">

    <div class="toolbar">

        <div v-for="(tool,index) in toolbarConfig.tools" :key="index">
            <button type="button" @click="tool.action()">
                <i :class="setToolClass(toolbarConfig.iconPrefix, tool.icon)"></i>
            </button>
        </div>
        
    </div>
</div>
</template>
<script>
export default {
    name: 'Toolbar',
    props: {
        toolbarConfig: Object
    },
    methods: {
        execCommand(command) {
            document.execCommand(command, false, null);
        },
        setToolClass(prefix,icon) {
            return `${prefix} ${icon}`
        }
    },
    mounted() {
        console.log("this is the Toolbar Config --->",this.toolbarConfig);
    },
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
