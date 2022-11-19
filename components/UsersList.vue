<template>
    <section class="">
        <div class="px-2 py-2 border-b border-slate-100" v-for="user in users" :key="user.id">
            <h3 class="text-sky-400 text-lg font-medium">{{user.name}}</h3>
            <p class="text-slate-300 text-[12px] italic">{{user.status}}</p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            users: [
                {id: 1, name: 'Josh Morgan', status: 'With God all things are possible'},
                {id: 2, name: 'Felix', status: 'Busy'},
                {id: 3, name: 'Smiley', status: 'Kashamadupe'},
            ]
        }
    }
}
</script>