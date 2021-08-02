<template>
    <div>
        <h1 class="font-normal text-3xl text-grey-darkest leading-none mb-8">
            github.com/cecez Stats
        </h1>

        <ul>
            <li><strong>Public repos:</strong> {{ repos }}</li>
            <li><strong>Followers:</strong> {{ followers }}</li>
            <li><strong>Following:</strong> {{ following }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            repos: 0,
            followers: 0,
            following: 0
        }
    },

    created() {
        axios
            .get('https://api.github.com/users/cecez')
            .then(response => response.data)
            .then(data => {
                this.repos = data.public_repos;
                this.followers = data.followers;
                this.following = data.following;
            });
    }
};
</script>
