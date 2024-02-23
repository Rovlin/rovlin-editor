<template>    
    <div>
        {{ JSON.stringify(newElement.config) }}
    </div>
</template>

<script>
export default {
    name: 'ButtonPanel',
    props: {
        element:Object
    },
    data(){
        return {
            newElement: {}
        }
    },
    methods:{
        updateImage(event) {
            this.$emit('update:element', { ...this.element, config: { ...this.element.config, image: event.target.value }})
        },
    },
    mounted(){
        this.newElement = this.element
    },
    watch:{
        element:{
            handler(newVal){
                this.newElement = newVal
            },
            deep:true
        }
    }
}

</script>
<style scoped>
</style>
