<template>
    <div class="form-element" :style="{ textAlign: element.config.styles.textAlign }">
        <form class="row g-3">
            <div v-for="(field, index) in element.config.fields" :key="index" class="col-md-6">
                <label :for="'field-' + index" class="form-label">
                    {{ field }}
                </label>
                <input type="text" :id="'field-' + index" class="form-control" :placeholder="'Enter ' + field" />
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "FormElement",
    props: {
        element: Object,
    },
};
</script>

<style scoped>
.form-element {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}
</style>
