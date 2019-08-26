<template>
  <div id="app">
    <div class="wrapper container">
      <div class="content">
        <router-view/>
      </div>

      <nav id="nav" class="router-nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/blog">Posts</router-link> |
        <router-link to="/users">Users</router-link>
      </nav>
    </div>
  </div>
</template>

<style>

</style>
