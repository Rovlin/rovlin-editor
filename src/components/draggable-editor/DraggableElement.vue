
<template>
    <div class="rovlin-draggable-block">
        <div class="rovlin-draggable-block-header">
            <h3 class="rovlin-draggable-block-heading">Elements</h3>
        </div>
        <div class="rovlin-draggable-block-body">
            <div class="element" v-for="(element,index) in elements" :key="index" :draggable="true"  @click="addElement(element)"   @dragstart="dragStart($event, element)">
                    <i :class="element.icon" ></i>
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
                    icon: 'bi bi-square'
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

    .rovlin-draggable-block-heading {
        font-size: 19px;
        font-weight: 600;
        color: #262626;
    }
    .rovlin-draggable-block {
        padding: 10px;
    }
    .rovlin-draggable-block .rovlin-draggable-block-header {
        text-align: center;
    }

    .rovlin-draggable-block .rovlin-draggable-block-body {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    }

    .rovlin-draggable-block .rovlin-draggable-block-body .element {
        min-width: 94px;
        max-width: 94px;
        height: 110px;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        border-radius: 4px;
        background-color: #f8f9fa;
        cursor: pointer;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .rovlin-draggable-block .rovlin-draggable-block-body .element:hover{
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    }

    .rovlin-draggable-block .rovlin-draggable-block-body .element  i {
        font-size: 32px !important;
        color: #262626;
    }

    .rovlin-draggable-block .rovlin-draggable-block-body .element .content {
        font-size: 13px;
        margin-top: 8px;
        font-style: italic;
        text-transform: capitalize;
    }
</style>
