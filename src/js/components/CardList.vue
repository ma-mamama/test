<template>
    <div class="card-list">
        <dl v-for="user in users">
            <Card 
                :name=user.name
                :job=user.job
                :img=user.img
                :comment="user.comment"
            />
        </dl>
    </div>
</template>

<script>
import Card from "./Card.vue";
export default {
    props: {
        users: {
            type: null
        }
    },
    components: {
        Card
    }
}
</script>

