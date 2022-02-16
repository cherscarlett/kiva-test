<template>
    <div class="tw-w-full tw-text-center">
        <KvProgressBar 
            ariaLabel="Amount the loan has fundraised"
            :min="0"
            :max="100"
            :value="progressPercentage"
        />

       <span class="tw-text-small tw-font-medium tw-italic tw-text-brand">${{this.fundedAmount}} to go!</span>
    </div>
</template>

<script>
    import KvProgressBar from '@kiva/kv-components/vue/KvProgressBar.vue';

    export default {
        name: 'ProgressComponent',
        props: ['fundedAmount', 'loanAmount'],
        data() {
            return {
                progressPercentage: this.fundedAmount/this.loanAmount * 100,
            }
        },
        components: {
            KvProgressBar
        },
    }
</script>
