<template>
    <b-container class="d-flex justify-content-center" align-v="center">
        <div class="align-self-center justify-content-center h-100">
          <b-row>
            <h1 class="display-4 mb-4">Projects</h1>
          </b-row>
          <b-row class="mt-5 mb-2">
            <h4>Latest</h4>
          </b-row>
          <b-row class="justify-content-center"> 
              <Project 
                v-for="(project, index) in projects"
                :title="project.name"
                :imageUrl="project.imageUrl"
                :link="project.link"
                :technologies="project.technologies"
                :description="project.description"
                :key="index"
               />
          </b-row>
          <b-row class="mt-5 mb-2">
            <h4>Early Projects</h4>
          </b-row>
          <b-row class="justify-content-center">
            <Project 
                v-for="(project, index) in earlyProjects"
                :title="project.name"
                :imageUrl="project.imageUrl"
                :link="project.link"
                :technologies="project.technologies"
                :description="project.description"
                :key="index"
               />
          </b-row>
        </div>
    </b-container>
</template>

<script>
// import quotes from '../assets/quotes.js';
// import InfoCard from './InfoCard.vue';
import Project from './Project.vue';
import projectList from '../assets/projects.js';

export default {
  name: 'Life',
  components: { Project }, 
  data: () => ({
    projects: [],
    earlyProjects: []
  }),
  created() {
    this.projects = projectList.latestProjects;
    this.earlyProjects = projectList.earlyProjects;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1 {
  font-family: "DM Serif Display", serif;
  letter-spacing: 0.02em;
  /* background: -webkit-linear-gradient(65deg, #eee 25%, #ffc14e); */
  background: -webkit-linear-gradient(65deg, #eee 25%, #FBCB71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-family: "Raleway", sans-serif;
  font-weight: normal;
}

.hi5 {
    height: 100%;
}

.header {
    margin-bottom: 1rem;
}
.row-heading {
    font-weight: bold;
    margin-left: 0;
}
</style>
