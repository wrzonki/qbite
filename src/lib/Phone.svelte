<script lang="ts">
	import Hero from './Hero.svelte';

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

<Hero
	name="paweł wrzosek"
	image="/pw.png"
	linkedin="https://www.linkedin.com/in/pawel-wrzosek/"
	colors={getAnimationColors(0)}
/>
<Hero
	name="paweł wrzosek"
	image="/pw.png"
	linkedin="https://www.linkedin.com/in/pawel-wrzosek/"
	colors={getAnimationColors(1)}
/>
<Hero
	name="paweł wrzosek"
	image="/pw.png"
	linkedin="https://www.linkedin.com/in/pawel-wrzosek/"
	colors={getAnimationColors(2)}
/>
<Hero
	name="paweł wrzosek"
	image="/pw.png"
	linkedin="https://www.linkedin.com/in/pawel-wrzosek/"
	colors={getAnimationColors(3)}
/>
<Hero
	name="paweł wrzosek"
	image="/pw.png"
	linkedin="https://www.linkedin.com/in/pawel-wrzosek/"
	colors={getAnimationColors(4)}
/>
<Hero
	name="paweł wrzosek"
	image="/pw.png"
	linkedin="https://www.linkedin.com/in/pawel-wrzosek/"
	colors={getAnimationColors(0)}
/>
<Hero
	name="paweł wrzosek"
	image="/pw.png"
	linkedin="https://www.linkedin.com/in/pawel-wrzosek/"
	colors={getAnimationColors(1)}
/>
