<template>
    <div class="tw-border-tertiary tw-bg-primary tw-border tw-flex tw-flex-col tw-items-center tw-justify-between">
        <header class="tw-w-full tw-flex tw-flex-col tw-items-center">
            <a class="tw-cursor-pointer tw-w-full tw-flex tw-flex-col tw-items-center" @click="noop">
                <img width="100%" :src="loan.image.url" alt="" role="presentation" />
                <h2 class="tw-text-action tw-text-h3 tw-mt-2">{{loan.name}}</h2>
            </a>
                <span class="tw-font-medium tw-text-tertiary tw-font-medium tw-mb-1 text-base">{{loan.geocode.country.name}}</span>
        </header>

        <p class="tw-px-2 tw-w-full tw-text-center">A loan of ${{formattedLoanAmount}} helps {{loan.use}} <a class="tw-text-action tw-cursor-pointer" @click="noop">Read more</a></p>

        <footer class="tw-p-4 tw-w-full">
            <Progress :fundedAmount="formattedFundedAmount" :loanAmount="formattedLoanAmount" />
            <div class="tw-flex tw-justify-between tw-align-center sm:tw-gap-1 md:tw-gap-2 tw-py-2">
                <div class="tw-w-16">
                    <KvSelect id="lend-amount" value="$25">
                        <option value="$25">$25</option>
                        <option value="$50">$50</option>
                        <option value="$75">$75</option>
                    </KvSelect>
                </div>
                <KvButton class="tw-w-full">Lend now</KvButton>
            </div>
        </footer>
    </div>
</template>

<script>
    import KvButton from '@kiva/kv-components/vue/KvButton.vue';
    import KvSelect from '@kiva/kv-components/vue/KvSelect.vue';
    import Progress from '~/components/Progress.vue';

    export default {
        name: 'CardComponent',
        data() {
            return {
                // outside of scope of test, but important: test to make sure you get numbers back!
                
                formattedLoanAmount: parseInt(this.loan.loanAmount),
                formattedFundedAmount: parseInt(this.loan.loanFundraisingInfo.fundedAmount),
            }
        },
        components: {
            KvButton,
            KvSelect,
            Progress,
        },
        props: ['loan'],
        methods: {
            // do nothing for this dev test :)

            noop() {
                return {}
            }
        }
    }
</script>
