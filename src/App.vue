<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  created() {
    const currentPath = this.$router.history.current.path;

    if (window.localStorage.getItem('authenticated') === 'false') {
      this.$router.push('/login');
    }

    if (currentPath === '/') {
      this.$router.push('/dashboard');
    }
  },
};
</script>

<style src="./assets/styles/theme.scss" lang="scss" />
