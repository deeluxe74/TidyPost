<template>
    <div class="px-5 py-3 nav-bar d-flex flex-column">
        <router-link to="/"><h1 class="mb-2 pl-1">TIDYPOST</h1></router-link>
        <div class="mobileDevice">
            <router-link :to="{name: 'Home', query: { order: 'New'}}">
                <h2 :class="active === 1? 'active' : ''" class="marginChange">New</h2>
            </router-link>
            <router-link :to="{name: 'Home', query: { order: 'Likes'}}">
                <h2 :class="active === 2? 'active' : ''"  class="marginChange">Likes</h2>
            </router-link>
            <router-link :to="{name: 'Tags'}">
                <h2 :class="active  === 3? 'active' : ''"  class="marginChange">Tags</h2>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: null,
        }
    },
    watch: {
        $route(to, from){
            this.setActive(to);
        }
    },
    methods: {
        setActive(to){
            if(to.name === 'Home') {
                if(to.query.order === 'Likes'){
                    this.active = 2;
                }else if(to.query.order === 'New' || to.query.order === undefined){
                    this.active = 1;
                }
            }else if(to.name === 'Tags'){
                this.active = 3;
            }
        }
    },
    created() {
        this.setActive(this.$route);
    },
}
</script>

<style scoped>
h2 {
    opacity: 0.6;
    transition: all 200ms linear;
}

.nav-bar {
    width: max-content;
    min-height: 100%;
    box-shadow: 3px 0px 8px 0px rgba(0, 0, 0, 0.233);
}

.active {
    font-weight: 600;
    opacity: 1;
}

.marginChange {
    margin: 3rem 0;
}

@media screen and (max-width: 500px){
    h2 {
        font-size: 1.7rem;
    }

    .nav-bar {
        width: 100vw;
        height: auto;
    }

    .mobileDevice {
        padding: 0 1rem 0.9rem 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .marginChange {
        margin: 0 0;
    }

    .px-5 {
        padding: 0!important;
    }

    .py-3 {
        padding: 0!important;
    }
}
</style>