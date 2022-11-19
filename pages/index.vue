<template>
  <section class="space-y-3">
    <header class="bg-teal-50 p-2">
      <h1 class="text-xl text-teal-400 font-medium">Forum & Discussions</h1>
    </header>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      <div class="bg-white shadow-sm hover:shadow cursor-pointer" v-for="i in 6" :key="i" @click="$router.push('/forum')">
        <img src="/1.jpg" class="w-full h-[220px] object-cover" />
        <div class="p-2">
          <h3 class="text-teal-500 text-base font-medium">Data Structure & Algorithms</h3>
          <p class="text-xs md:text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, consequuntur! Incidunt porro ducimus assumenda.</p>
          <div class="pt-2 space-x-3">
            <span class="text-slate-200 icon">
              <font-awesome-icon :icon="['fas', 'user']" />
              <span class="text-slate-500 text-sm">33</span>
            </span>
            <span class="text-slate-200 icon">
              <font-awesome-icon :icon="['fa', 'comment']" />
              <span class="text-slate-500 text-sm">109</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  methods: {
    async fetchSomething() {
      const resp = await this.$axios.$get('/test')
      console.log(resp)

    }
  },
  mounted() {
    this.fetchSomething()
  }
}
</script>
