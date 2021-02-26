<template>
  <div class="photos">
    <div class="image-wrapper" v-for="item in data" :key="item.id">
      <!-- <a :href="item.links.download" target="_blank"> -->
      <b-image
        class="content-image"
        :src="item.urls.regular"
        :alt="item.alt_description"
        placeholder="https://bulma.io/images/placeholders/1280x960.png"
      >
        <template #placeholder>
          <b-skeleton class="skeleton-placeholder" height="100%"></b-skeleton>
        </template>
      </b-image>
      <div class="content-overlay"></div>
      <div class="content-details fadeIn-left">
        <div style="diplay: flex; flex-direction: column">
          <div class="top-left">
            <b-button size="is-small" type="is-danger" @click="handleLike" icon-right="heart"></b-button>
            <b-button
              style="margin-left: 4px"
              size="is-small"
              type="is-primary"
              @click="handleDownload(item)"
              icon-right="download"
            ></b-button>
          </div>
          <div class="bottom-left" @click="seeAuthor(item)">
            <div>
              <img :src="item.user.profile_image.small" />
              <p v-if="!!item.user">{{item.user.username}}</p>
              <p v-else-if="!!item.sponsorship">{{item.sponsorship.tagline}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    console.log(this.data);
  },
  methods: {
    handleLike() {
      console.log("like");
      const { id, links } = item;
      // this.$api.get(`/photos/${id}/download`).then(res => {
      //   console.log(res);
      // });
    },
    handleDownload(item) {
      location.href = `${item.links.download}?force=true`;
    },
    seeAuthor(item) {
      window.location.href = `${item.links.html}`;
    }
  }
};
</script>
<style scoped>
.photos {
  line-height: 0;

  -webkit-column-count: 4;
  -webkit-column-gap: 8px;
  -moz-column-count: 4;
  -moz-column-gap: 8px;
  column-count: 4;
  column-gap: 8px;
}

.b-image-wrapper {
  /* width: 100% !important;
  height: auto !important; */
  margin-bottom: 8px;
}

.image-wrapper {
  position: relative;
  width: 98%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.image-wrapper .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 98%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.image-wrapper:hover .content-overlay {
  opacity: 1;
}

.content-image {
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  height: 90%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.image-wrapper:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.25em;
  margin-bottom: 1em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}
.fadeIn-left {
  left: 20%;
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}
.bottom-left div {
  display: flex;
  align-items: center;
}
.bottom-left div p {
  margin-left: 6px;
}
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

@media (max-width: 1200px) {
  .photos {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
}
@media (max-width: 1000px) {
  .photos {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
@media (max-width: 800px) {
  .photos {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media (max-width: 400px) {
  .photos {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}
</style>