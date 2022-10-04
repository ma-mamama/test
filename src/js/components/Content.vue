<template>
    <div class="content">
        <CardList :users="Users" />
    </div>
</template>

<script>
import CardList from "./CardList.vue";
const userData = [
    {
        name: "まままま",
        job: "エンジニア",
        img: "../resource/images/azarasi.png",
        comment: "よろしくお願いします"
    },
    {
        name: "よしきん",
        job: "エンジニア",
        img: "../resource/images/tori.png",
        comment: "あああああああああああああああああああああああ"
    },
    {
        name: "カッさー",
        job: "エンジニア",
        img: "../resource/images/washi.png",
        comment: "コメント"
    },
    {
        name: "G2",
        job: "エンジニア",
        img: "../resource/images/buta.png",
        comment: "コメント"
    }
];
export default {
    name: "headerTitle",
    data: () => ({
        Users: userData
    }),
    components: {
        CardList
    }
}
</script>

