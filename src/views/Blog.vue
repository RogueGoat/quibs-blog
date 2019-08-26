<template>
  <main class="posts content rounded-lg">
    <h1>All the Posts <small>Your daily dose of Lorem Ipsum!</small></h1>
    <Posts/>
  </main>
</template>

<script>
  // @ is an alias to /src
  import Posts from '@/components/Posts.vue'

  export default {
    name: 'blog',
    components: {
      Posts
    }
  }
</script>
