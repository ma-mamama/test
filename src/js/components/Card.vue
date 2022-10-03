<template>
    <div class="card">
        <div class="card-img"><img :src=img ></div>
        <div class="card-contents">
            <div class="card-name">{{name}}</div>
            <div class="card-job">{{job}}</div>
            <div class="card-comment">{{comment}}</div>
        </div>
        <div class="card-option">
            
        </div>
    </div>
</template>
<script>

export default {
    name: "headerTitle",
    props: {
        name: {
            type: String,
            default: "",
            required: true
        },
        job: {
            type: String,
            default: ""
        },  
        img: {
            type: String,
            default: "",
        },
        comment: {
            type: String,
            default: ""
        }
    },
}

</script>
