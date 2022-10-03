<template>
  <div class="app">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from "./Header.vue"
import Content from "./Content.vue"
export default {
  name: "App",
  data: () => ({

  }),
  components: {
    Header,
    Content
  },
}
</script>