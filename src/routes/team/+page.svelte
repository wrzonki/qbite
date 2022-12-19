<script lang="ts">
	import Hero from '$lib/Hero.svelte';

	export const prerender = false;

	const getAnimationColors = (at: number) => {
		let colors = [
			[143, 119, 119],
			[143, 119, 143],
			[119, 119, 143],
			[119, 143, 143],
			[119, 143, 119],
			[143, 143, 119]
		];

		const start = colors.slice(0, at);
		const end = colors.slice(at, colors.length);

		return [...end, ...start];
	};
</script>

<svelte:head>
	<title>Qbite - Team</title>
</svelte:head>

<h2>Team</h2>
<Hero
	name="rune larsen"
	image="/rune.png"
	linkedin="https://www.linkedin.com/in/rune-larsen-0784011b0/"
	colors={getAnimationColors(0)}
/>
<Hero
	name="karl engelund"
	image="/karl.png"
	linkedin="https://www.linkedin.com/in/karl-kristian-engelund/"
	colors={getAnimationColors(1)}
/>
<Hero
	name="mathias spurr"
	image="/mathias.png"
	linkedin="https://www.linkedin.com/in/mspurr/"
	colors={getAnimationColors(2)}
/>
<h2>Advisory Board</h2>
<Hero
	name="frederik thufason"
	image="/frederik.png"
	linkedin="https://www.linkedin.com/in/frederik-thufason-8836ab28/"
	colors={getAnimationColors(3)}
/>
<Hero
	name="andreas steno"
	image="/andreas.png"
	linkedin="https://www.linkedin.com/in/andreasstenolarsen/"
	colors={getAnimationColors(4)}
/>
<h2>Future members</h2>
<Hero
	name="paweł wrzosek"
	image="/pawel.png"
	linkedin="https://www.linkedin.com/in/pawel-wrzosek/"
	colors={getAnimationColors(1)}
/>

<style>
	h2 {
		text-align: center;
	}
</style>
