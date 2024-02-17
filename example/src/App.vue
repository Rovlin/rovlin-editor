<template>
  <div>
    <DraggableEditor />
    <Editor />
  </div>
</template>


<script >
import { Editor, DraggableEditor } from '../../src';

export default {
  components: {
    Editor,
    DraggableEditor
  }
}

</script>
