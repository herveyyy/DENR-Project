<script>
import LoginForm from "./components/Login.vue";
export default {
  components: {
    LoginForm,
  },
};
</script>

<template>
  <h1 class="text-3xl font-bold underline hover:underline cursor-pointer">
    Hello world!
  </h1>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/pageone">Page One</RouterLink>
      <RouterLink to="/pagetwo">Page Two</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
