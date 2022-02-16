<template>
  <KvPageContainer>
    <ul class="tw-flex tw-text-small tw-gap-2 tw-items-center">
      <li v-for="sector in sectors" :key="sector.id">
        <button :class="(selectedSector.id == sector.id) && 'tw-font-medium tw-underline'" @click="selectSector(sector)">{{ sector.name }}</button>
      </li>
    </ul>
    <CardPane :sector="selectedSector" />
  </KvPageContainer>
</template>

<script>
  import KvPageContainer from '@kiva/kv-components/vue/KvPageContainer.vue';
  import CardPane from '~/components/CardPane.vue';
  import sectorsGql from '~/apollo/queries/fetchSectors.gql';

  export default {
    name: 'IndexPage',
    components: {
      KvPageContainer,
      CardPane,
    },
    data() {
      return {
        selectedSector: {},
      }
    },
    methods: {
      selectSector(sector) {
        this.selectedSector = sector;
      }
    },
    apollo: {
      sectors: {
        prefetch: true,
        query: sectorsGql,
        update(data) {
          const sectors = data.lend.sector;
          this.selectedSector = sectors[0];

          return sectors;
        }
      }
    }
  };
</script>
