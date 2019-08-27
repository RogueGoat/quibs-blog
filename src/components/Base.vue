<template>
  <div class="container mx-auto flex-wrapper">
    <main class="rounded-lg main-flex">
      <section class="description">
        <article>
          <h1>Hello There</h1>
          Welcome to the blog that features all the latest Lorum Ipsum gossip! Read more about it now!
        </article>
      </section>
      <router-link class="see-all-posts" to="/blog">See All</router-link>
    </main>
    <aside class="rounded-lg aside-flex">
      <h2>User Spotlight</h2>
      <p class="spotlight-comment">"Ullam et saepe reiciendis voluptatem!"</p>
      <p class="spotlight-user">Bret</p>
    </aside>
  </div>
</template>

<script>
  export default {
  name: 'Base',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

