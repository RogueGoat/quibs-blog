<template>
  <main class="container mx-auto">
    <section class="newest">
      <article>
        Most Recent Post! Insert it here!
      </article>
    </section>
    <a class="btn" href="/posts">See All</a>
  </main>
</template>

<script>
export default {
  name: 'Base'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*Tailwind styles*/
  .btn {
    @apply font-bold py-2 px-4 rounded;

    background-color: pink;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

