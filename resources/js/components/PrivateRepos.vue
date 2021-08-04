<template>
    <div>
        <h1 class="font-normal text-3xl text-grey-darkest leading-none mb-8">
            Your private GitHub repos
        </h1>

        <input
            @keyup.enter="fetchPrivateRepos"
            class="border mb-8 p-2 rounded w-full"
            placeholder="Seu token"
            v-model="token"
        >

        <p class="text-red italic text-sm" v-if="message" v-text="message"></p>

        <ul>
            <li
                v-for="repo in repos"
                v-text="repo.name"
            ></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return { repos: [], token: '', message: '' };
    },

    methods: {
        fetchPrivateRepos() {

            axios
                .get('https://api.github.com/user/repos?type=private', {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json',
                        'Authorization': `token ${this.token}`
                    }
                })
                .then((response) => {
                    this.repos = response.data;
                    this.message = null;
                })
                .catch(error => {
                    this.message = error.message;
                    this.repos = [];
                })
        }
    }
};
</script>
