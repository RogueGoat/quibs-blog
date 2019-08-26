<template>
  <div class="container mx-auto flex-wrapper">
    <main class="rounded-lg main-flex">
      <section class="newest">
        <article>
          <h1>Hello There</h1>
          Most Recent Post! Insert it here!
        </article>
      </section>
      <a class="btn" href="/blog">See All</a>
    </main>
    <aside class="rounded-lg aside-flex">
      <h2>User Spotlight</h2>
      <p class="spotlight-comment">{{ comment }}</p>
      <p class="spotlight-user">{{ user }}</p>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'Base',
  data: function(){
    return {
      user: 'User',
      comment: 'Comment'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

