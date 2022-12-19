<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

  let posts = data.posts;

  let toggleMap:any = {};

  onMount(() => {
    posts.forEach((p) => {
      toggleMap[p.id] = false;
    })
  })

  const togglePost = (id: number) => {
    toggleMap[id] = !toggleMap[id];
  }
</script>

<div id="wrapper">
  <p>
  Careers at QBite Capital We have a spectrum of career opportunities for individuals with the right
  skills. This is our current job openings:</p>

  {#each data.posts as post}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="post" on:click={() => togglePost(post.id)}>
      <h2>{post.title}</h2>
      <h5>{post.subtitle}</h5>
      <h6 style:display="{toggleMap[post.id] ? 'none' : 'block'}">See more...</h6>
      <div style:display="{toggleMap[post.id] ? 'block' : 'none'}">
        <p>{@html post.contentHTML}</p>
      </div>
    </div>
  {/each}

  <p>To submit resumes or ask questions, e-mail <a class="mail" href="mailto:recruitment@qbite.capital">recruitment@qbite.capital</a>.</p>
  <p>
    In order for your application to be taken into consideration, you must provide a 1-page cover
    letter, a CV and attach copies of your latest exam credentials.
  </p>
  <p>No telephone inquiries, please.</p>
  <p>
    QBite Capital is an equal opportunity employer. We make all employment decisions based solely on
    merit. We provide equal employment opportunity to all applicants and employees without
    discrimination on the bases of race, color, religion, national origin, disability, gender, sexual
    orientation, age, or any other protected status.
  </p>
</div>

<style>
  .post {
    cursor: pointer;
    background-color: #f0ffff;
    padding: 5px;
    border-radius: 10px;
  }
  #wrapper {
    padding: 20px 20px 50px 20px;
  }
  h2 {
    text-align: center;
  }
  p {
    text-indent: 15px;
    text-align: justify;
  }
  .mail {
    color: black;
  }
</style>
