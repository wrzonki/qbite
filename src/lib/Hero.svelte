<script>
  export let name = '';
  export let image = '';
  export let linkedin = '';

  export let colors;

  const varStyles = `
  --at0: rgba(${colors[0].join()});
  --at16: rgba(${colors[1].join()});
  --at33: rgba(${colors[2].join()});
  --at50: rgba(${colors[3].join()});
  --at66: rgba(${colors[4].join()});
  --at83: rgba(${colors[5].join()});
  `;
</script>

<a
  id="hero"
  href={linkedin}
  target="_blank"
  rel={name}
  style:background-image="url({image})"
  style="{varStyles}"
>
  {name}
</a>

<style lang="scss">
  $duration: 10s;
  #hero {
		width: 100%;
		height: 18%;
		background-size: 30%;
		background-position: bottom left;
		background-repeat: no-repeat;
		background-blend-mode: luminosity;
		position: relative;
		font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
		padding: 30px 50px 30px 40%;
		text-align: right;
		font-size: 4em;
		line-height: 60%;
		letter-spacing: -6px;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: wheelHueColor $duration infinite;
    text-decoration: none;
    color: #ccc;
    filter: opacity(0.7);
    transition: all .4s ease-in-out;
	}
  #hero:hover {
    filter: opacity(1);
  }

	@keyframes wheelHueColor {
		from,
		to {
			background-color: var(--at0);
		}
		16% {
			background-color: var(--at16);
		}
		33% {
			background-color: var(--at33);
		}
		50% {
			background-color: var(--at50);
		}
		66% {
			background-color: var(--at66);
		}
		83% {
			background-color: var(--at83);
		}
		100% {
			background-color: var(--at0);
		}
	}
</style>