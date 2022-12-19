<script lang="ts">
	import { onMount } from 'svelte';
  import { page } from '$app/stores';

	const ratio = [9, 16];

	let isMobile = false;
	let appWidth = 0;
	let appHeight = 0;

	onMount(() => {
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			window.navigator.userAgent
		);
		calculateDeviceSize();
    console.log($page.url.pathname)
	});

	const calculateDeviceSize = () => {
		if (isMobile) return 0;
		const { innerWidth, innerHeight } = window;
		const maxWidth = Math.floor(innerWidth * 0.8);
		const maxHeight = Math.floor(innerHeight * 0.8);
		const maxMultiplier = Math.max(...ratio);
		const widthMultplier = Math.floor(maxWidth / maxMultiplier);
		const heightMultiplier = Math.floor(maxHeight / maxMultiplier);
		const multiplier = widthMultplier > heightMultiplier ? heightMultiplier : widthMultplier;
		appWidth = ratio[0] * multiplier;
		appHeight = ratio[1] * multiplier;
	};
</script>

<svelte:window on:resize={calculateDeviceSize} />

{#if isMobile}
  <div id="device">
    <a id="logo" href="/">
      <img src="/logo.svg" alt="Logo Qbite Capital"/>
    </a>
    <div id="nav">
      <a href="team" class="{$page.url.pathname === '/team' ? 'active' : ''}">Team</a>
      <a href="joinus" class="{$page.url.pathname === '/joinus' ? 'active' : ''}">Join us</a>
    </div>
    <slot />
  </div>
{:else}
	<div id="wrapper" style:width="{appWidth}px" style:height="{appHeight}px">
    <div id="device">
      <a id="logo" href="/">
        <img src="/logo.svg" alt="Logo Qbite Capital"/>
      </a>
      <div id="nav">
        <a href="team" class="{$page.url.pathname === '/team' ? 'active' : ''}">Team</a>
        <a href="joinus" class="{$page.url.pathname === '/joinus' ? 'active' : ''}">Join us</a>
      </div>
      <slot />
    </div>
	</div>
{/if}

<style lang="scss">
	:global(body) {
		margin: 0;
		padding: 0;
		height: 100dvh;
		width: 100dvw;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #e0e0e0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
	}
  :global( ::selection) {
    color: #19bfb7;
    background-color: #283149;
  }
  :global(::-webkit-scrollbar) {
    display: none;
  }
	#wrapper {
		overflow: hidden;
		border-radius: 50px;
		background: #e0e0e0;
		box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
	}
  #device {
		height: 100%;
		width: 100%;
    overflow-x: auto;
	}
  #logo {
    position:sticky;
    top: 0;
    display: block;
    background: #283149;
    padding: 20px;
    z-index: 10;
    img {
      width: 100%;
    }
    max-width: 100%;
  }
  #nav {
    display: flex;
    justify-content: space-between;
    a {
      display: block;
      width: 50%;
      height: 40px;
      line-height: 40px;
      background-color: #283149;
      color: #ddd;
      text-decoration: none;
      text-align: center;
    }
    a.active {
      background-color: #19bfb7;
      color: #222;
    }
  }
</style>
