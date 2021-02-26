<template>
  <div class>
    <section class="hero is-medium is-link">
      <div class="hero-body">
        <div class="container">
          <p class="title">Unsplash</p>
          <p class="subtitle">Powered by creators everywhere.</p>

          <b-field>
            <b-autocomplete
              icon-pack="fas"
              icon="search"
              placeholder="Search..."
              type="search"
              size="is-medium"
              expanded
              clearable
              v-model="search"
              :data="filteredDataArray"
            ></b-autocomplete>
            <p class="control">
              <b-button
                class="button is-success"
                size="is-medium"
                @click.prevent="fetchPhotos"
              >Search</b-button>
            </p>
          </b-field>
        </div>
      </div>
    </section>

    <Gallery :data="photos" class="gallery" />

    <b-pagination
      style="margin: 24px 24px 48px"
      :total="total"
      v-model="page"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      @change="handlePagination"
    ></b-pagination>
  </div>
</template>

<script>
import Gallery from "../components/Gallery.vue";
export default {
  components: {
    Gallery
  },
  data() {
    return {
      suggestions: [],
      search: "",
      page: 1,
      perPage: 20,
      photos: [],
      total: 100,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "",
      size: "",
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right"
    };
  },
  computed: {
    filteredDataArray() {
      return !!this.search
        ? this.suggestions.filter(option => {
            return (
              option
                .toString()
                .toLowerCase()
                .indexOf(this.search.toLowerCase()) >= 0
            );
          })
        : this.suggestions.slice(0, 5);
    }
  },
  methods: {
    init() {
      const { page, search } = this.$route.query;
      this.page = page || this.page;
      this.search = search || this.search;
    },
    fetchPhotos() {
      this.rememberSearch();
      let self = this;
      let url = !!this.search ? "/search/photos" : "/photos";
      let query = !!this.search
        ? `?query=${this.search}&page=${this.page}&per_page=${this.perPage}`
        : `?page=${this.page}&per_page=${this.perPage}`;
      this.$router
        .push({
          query: !!this.search
            ? { search: this.search, page: this.page }
            : { page: this.page }
        })
        .catch(err => {});
      self.$api.get(`${url}${query}`).then(({ data }) => {
        const { results, total } = data;
        self.photos = results || data;
        self.total = total || self.total;
      });
    },
    handlePagination(page) {
      this.page = page;
      this.fetchPhotos();
    },
    rememberSearch() {
      const history = localStorage.getItem("history");
      let parseHistory = (!!history && JSON.parse(history)) || [];
      if (!!this.search) {
        const isExist = parseHistory.some(
          item => item.toLowerCase() == this.search.toLowerCase()
        );
        if (!isExist) {
          parseHistory.unshift(this.search);
          localStorage.setItem("history", JSON.stringify(parseHistory));
        }
      }
      this.suggestions = parseHistory;
    }
  },
  async mounted() {
    await this.init();
    await this.fetchPhotos();
  }
};
</script>
<style scoped>
.gallery {
  margin: 32px 24px;
}
</style>