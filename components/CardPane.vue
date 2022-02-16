<template>
    <div>
        <h1>{{sector.name}}</h1>

        <div class="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 md:tw-gap-2 lg:tw-gap-4">
            <Card v-for="loan in loans" :key="loan.id" :loan="loan" />
        </div>
    </div>
</template>

<script>
    import Card from '~/components/Card.vue';
    import loansGql from "~/apollo/queries/fetchLoans.gql";

    export default {
        name: 'CardPaneComponent',
        components: {
            Card,
        },
        props: ['sector'],
        apollo: {
            loans: {
                prefetch: false,
                query: loansGql,
                variables() {
                    return { 
                        id: this.sector.id 
                    };
                },
                update(data) {
                    return data.lend.loans.values;
                },
            },
        }
    }
</script>
