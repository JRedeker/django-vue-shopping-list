<template>
    <div>
        <h1>{{ msg }}</h1>
        <br/>

        <div class="adjustor d-inline-block">
            <counter-adjustor mode="dec"></counter-adjustor>
        </div>
        <div class="display d-inline-block">
            <counter-display></counter-display>
        </div>
        <div class="adjustor d-inline-block">
            <counter-adjustor mode="inc"></counter-adjustor>
        </div>

    </div>
</template>

<script>
    import CounterAdjustor from "../components/CounterAdjustor";
    import CounterDisplay from "../components/CounterDisplay";

    export default {
        name: 'Counter',
        components: {CounterAdjustor, CounterDisplay},
        props: {
            msg: String
        },
        computed: {},
        methods: {},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h1 {
        margin: 40px 0 0;
        color: #42b883;
    }
    
    .adjustor {
        height: 5rem;
        padding-left:2rem;
        padding-right:2rem;
        vertical-align: middle;
    }
</style>
