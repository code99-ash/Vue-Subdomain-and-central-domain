<template>
    <section class="py-3">
        <header class="bg-teal-50 p-2 text-center rounded-lg">
            <h1 class="text-teal-500 text-xl md:text-2xl font-bold">Data Structure & Algorithm</h1>
            <div class="my-3 md:max-w-[600px] mx-auto">
                <p class="text-sm text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci asperiores voluptatum cum quisquam quibusdam commodi dolorum cupiditate! Quas a ex libero repellendus iste? Totam minus quia iusto qui, aperiam illo.</p>
            </div>
            <div class="pt-2 space-x-3">
                <span class="text-teal-500 icon">
                    Participants
                    <font-awesome-icon class="text-teal-200" :icon="['fas', 'user']" />
                    <span class="text-sm">33</span>
                </span>
                <span class="text-teal-500 icon">
                    Messages
                    <font-awesome-icon class="text-teal-200" :icon="['fa', 'comment']" />
                    <span class="text-sm">109</span>
                </span>
            </div>
        </header>

        <main class="flex gap-2 mt-5">
            <div class="flex-none w-[230px] shadow min-h-[300px] p-2 space-y-2">
                <h2 class="text-teal-500 text-lg font-normal">Participants</h2>
                <nav>
                    <ul class="space-y-3">
                        <li class="flex space-x-3 items-center">
                            <div class="w-[35px] h-[35px] rounded-full bg-slate-100 relative">
                                <div class="w-[8px] h-[8px] bg-teal-400 rounded-full absolute -top-[1px] right-[2px]"></div>
                            </div>
                            <h4 class="text-base text-slate-400 font-medium">Tiana</h4>
                        </li> 
                        <li class="flex space-x-3 items-center">
                            <div class="w-[35px] h-[35px] rounded-full bg-slate-100 relative">
                                <div class="w-[8px] h-[8px] bg-slate-100 rounded-full absolute -top-[1px] right-[2px]"></div>
                            </div>
                            <h4 class="text-base text-slate-400 font-medium">Smiley</h4>
                        </li> 
                    </ul>
                </nav>
            </div>
            <div class="grow bg-slate-50 flex flex-col justify-between">
                <section class="flex flex-col space-y-2 p-2 max-h-[50vh] overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-teal-200">
                    <div class="p-2 rounded bg-teal-50 text-teal-400 max-w-[80%] shadow">
                        <h1 class="text-teal-500 font-medium">Tiana</h1>
                        <p class="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos asperiores sit reprehenderit laboriosam vitae tempore, saepe architecto in natus quia.</p>
                    </div>
                    <div class="p-2 rounded bg-white shadow-sm text-teal-400 max-w-[80%] self-end">
                        <h1 class="text-teal-500 font-medium">Me</h1>
                        <p class="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos asperiores sit reprehenderit laboriosam vitae tempore, saepe architecto in natus quia.</p>
                    </div>
                    <div class="p-2 rounded bg-white shadow-sm text-teal-400 max-w-[80%] self-end">
                        <h1 class="text-teal-500 font-medium">Me</h1>
                        <p class="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos asperiores sit reprehenderit laboriosam vitae tempore, saepe architecto in natus quia.</p>
                    </div>
                    <div class="p-2 rounded bg-teal-50 text-teal-400 max-w-[80%] shadow">
                        <h1 class="text-teal-500 font-medium">Tiana</h1>
                        <p class="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos asperiores sit reprehenderit laboriosam vitae tempore, saepe architecto in natus quia.</p>
                    </div>
                    <div class="p-2 rounded bg-white shadow-sm text-teal-400 max-w-[80%] self-end">
                        <h1 class="text-teal-500 font-medium">Me</h1>
                        <p class="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos asperiores sit reprehenderit laboriosam vitae tempore, saepe architecto in natus quia.</p>
                    </div>
                </section>
                <section class="sticky bottom-0 max-h-[120px] p-2 pb-0">
                    <textarea class="w-full min-h-0 max-h-[120px] border-box overflow-y-hidden outline-0 border border-slate-100 p-2 rounded-md text-sm resize-none overflow-x-hidden focus:overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-teal-200 scrollbar-track-teal-50 text-slate-400" id="message" v-model="message"></textarea>
                </section>
            </div>
        </main>
    </section>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        }
    },
    watch: {
        message(newV, oldV) {
            var msg = document.getElementById('message')
            if(msg.scrollHeight < 120) {
                msg.style.minHeight = (msg.scrollHeight) + "px";
            }else {
                msg.style.overflowY = 'scroll'
            }
        }
    }
}
</script>