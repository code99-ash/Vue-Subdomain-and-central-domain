<template>
  <section class="space-y-3">
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      <div 
        class="bg-white shadow-sm hover:shadow cursor-pointer" 
        v-for="d in $store.state.forums.data" :key="d._id" 
        @click="$router.push(`/discussion/${d._id}`)"
      >
        <img :src="d.thumbnail" class="w-full h-[220px] object-cover" />
        <div class="p-2">
          <h3 class="text-teal-500 text-base font-medium">{{d.title}}</h3>
          <p class="text-xs md:text-sm text-slate-400">{{d.description}}</p>
          <div class="pt-2 space-x-3">
            <span class="text-slate-200 icon">
              <font-awesome-icon :icon="['fas', 'user']" />
              <span class="text-slate-500 text-sm">{{d.users?d.users.length:0}}</span>
            </span>
            <span class="text-slate-200 icon">
              <font-awesome-icon :icon="['fa', 'comment']" />
              <span class="text-slate-500 text-sm">{{d.messages?d.messages.length:0}}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  
}
</script>
