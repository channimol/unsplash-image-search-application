<template>
  <div class="container full-height column">
    <div class="row header">
      <figure class="image is-128x128">
        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
      <div class="information" style="flex:1">
        <h2>Eugene Golovesovh</h2>
        <p>My Instagram: @eugenegolovesov</p>
        <div style="display: flex">
          <b-field v-for="tag in tags" :key="tag">
            <b-tag style="margin-right: 4px">{{tag}}</b-tag>
          </b-field>
        </div>
      </div>
    </div>
    <b-tabs v-model="activeTab">
      <b-tab-item label="Favorite">Lorem ipsum dolor sit amet.</b-tab-item>

      <b-tab-item label="Collection">
        Lorem
        <br />ipsum
        <br />dolor
        <br />sit
        <br />amet.
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ["flower", "photograph", "coffee"],
      activeTab: "Favorite"
    };
  }
};
</script>

<style scoped>
.full-height {
  height: 100%;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header {
  margin: 20px;
}
.header .information {
  margin: 12px;
  line-height: 2;
}
h2 {
  font-weight: 600;
  font-size: 22px;
}
</style>