<template>
        <div class="card-container d-flex justify-content-start flex-column" @mouseover="hover = true" @mouseleave="hover = false">
            <div class="align-self-start justify-items-start thumbnail" :class="{ hoverimg: hover }">
              <img :src="getImgUrl(imageUrl)" />
            </div>
            <div class="details">
                <h2>Address Book</h2>
                <div class="description">
                    <span v-if="hover === false">Angular</span>
                    <span v-if="hover">{{ description }}</span>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    imageUrl: String,
    // link: String,
    description: String

  },
  data() {
    return {
      hover: false
    }
  },
  methods: {
    // goToLink() {
    //   window.open(this.link);
    // },
    getImgUrl(url) {
      return require('../assets/images/thumbnails/' + url);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
    margin: 1rem;
    border-radius: 6px;
    /* border: 0.5px solid rgb(102, 102, 102);  */
    background-color: #e5e5e5;
    width: 20rem;
    height: 25rem;
    box-shadow: 0px 20px 30px -18px rgb(0, 0, 0, 0.5);
    cursor: pointer;
    overflow: hidden;
    color: black;

}

.card-container:hover {
  background-color: #f1f1f1;
    box-shadow: 0px 20px 30px -18px rgb(0, 0, 0, 0.5),
        0px 35px 22px -26px rgb(0, 0, 0, 0.7);

}

.thumbnail img {
  max-width: 100%;
  margin-bottom: 1rem;
  object-fit: contain;
}

.details {
    padding: 1rem;
}

.details h2 {
    font-family: 'DM Serif Display', serif;
    color: #2E3F4C;
}

.description {
    height: 100%;
}





</style>
