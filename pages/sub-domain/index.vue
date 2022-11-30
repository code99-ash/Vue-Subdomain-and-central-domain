<template>
    <h1>Sub Domain {{ host }}</h1>
</template>

<script>
export default {
  async asyncData({ req }) {
    if (process.server) {
      const host = req.headers.host
      return { host }
    }
  },
  data() {
    return {
      host: null
    }
  }
}
</script>