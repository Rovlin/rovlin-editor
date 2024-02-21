
<template>
    <div class="rovlin-draggable-block">
        <div class="rovlin-draggable-block-header">
            <h3>Elements</h3>
        </div>
        <div class="rovlin-draggable-block-body">
            <div class="element" v-for="(element,index) in elements" :key="index" :draggable="true"    @dragstart="dragStart($event, element)">
                <button type="button" @click="addElement(element)">
                    <i :class="element.icon"></i>
                </button>
                <div class="content">{{element.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'DraggableElement',
    props: {
        element: Object
    },
    mounted() {
        console.log("this is the element --->",this.element);
    },
    data() {
        return {
            elements: [
                {
                    type: 'text',
                    name: 'text',
                    content: 'This is a text element',
                    icon: 'bi bi-type'
                },
                {
                    type: 'image',
                    name: 'image',
                    content: 'https://via.placeholder.com/150',
                    icon: 'bi bi-image'
                },
                {
                    type: 'video',
                    name: 'video',
                    content: 'https://www.youtube.com/watch?v=3jWRrafhO7M',
                    icon: 'bi bi-camera-video'
                },
                {
                    type: 'audio',
                    name: 'audio',
                    content: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                    icon: 'bi bi-music-note'
                },
                {
                    type: 'button',
                    name: 'button',
                    content: 'This is a button element',
                    icon: 'bi bi-link-45deg'
                },
                {
                    type: 'link',
                    name: 'link',
                    content: 'https://www.google.com',
                    icon: 'bi bi-link-45deg'
                },
                {
                    type: 'list',
                    name: 'list',
                    content: 'This is a list element',
                    icon: 'bi bi-list-ul'
                },
                {
                    type: 'table',
                    name: 'table',
                    content: 'This is a table element',
                    icon: 'bi bi-table'
                },
                {
                    type: 'form',
                    name: 'form',
                    content: 'This is a form element',
                    icon: 'bi bi-card-checklist'
                },
                {
                    type: 'map',
                    name: 'map',
                    content: 'This is a map element',
                    icon: 'bi bi-geo-alt'
                }
            ]
        }
    },
    methods: {
        addElement(element) {
            this.$emit('addElement', element);
        },
        dragStart(event, element) {
            event.dataTransfer.setData('element', JSON.stringify(element));
        }
    }
}
</script>

<style scoped>
    .rovlin-draggable-block {
        padding: 10px;
    }
    .rovlin-draggable-block .rovlin-draggable-block-header {
        text-align: center;
    }

    .rovlin-draggable-block .rovlin-draggable-block-body {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(130px,1fr));
        grid-gap: 20px;
    }

    .rovlin-draggable-block .rovlin-draggable-block-body .element {
        width: 100%;
        height: 150px;
        text-align: center;
        cursor: pointer;
    }

    .rovlin-draggable-block .rovlin-draggable-block-body .element button {
        width: 100%;
        height: 130px;
        border: none;
        background-color: #f8f9fa;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        cursor: pointer;
    }

    .rovlin-draggable-block .rovlin-draggable-block-body .element button i {
        font-size: 65px;
        color: #000;
    }

    .rovlin-draggable-block .rovlin-draggable-block-body .element .content {
        font-size: 25px;
        font-style: italic;
        text-transform: capitalize;
    }
</style>
