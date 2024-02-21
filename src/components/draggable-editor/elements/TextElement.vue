<template>
    <BlockBuilder>
        <div style="width:100%" class="rovlin-text-element">
            <!-- Ref Element -->
            <div style="padding:10px">
                <div class="w-100 rounded-5" :style="element.config.styles" contenteditable="true">
                    <p style="margin:0">{{ element.config.content }}</p>
                </div>
            </div>
        </div>
    </BlockBuilder>
</template>

<script>
import BlockBuilder from '../block-builder-layer/BlockBuilder.vue'
export default {
    name: 'TextElement',
    components:{
        BlockBuilder
    },
    props: {
        element: Object,
    },
}
</script>

<style scoped>

.rovlin-text-element :focus-visible , .rovlin-text-element {
    outline: none;
}



</style>