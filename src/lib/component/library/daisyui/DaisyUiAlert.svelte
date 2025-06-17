<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let {
		children,
		className,
		show = false
	} = $props<{
		children?: () => void;
		className?: string;

		show: boolean;
	}>();
</script>

{#if show}
	<div
		role="alert"
		class="d-alert {className} mx-auto w-[70vw]"
		in:fly={{ y: 100, duration: 100 }}
		out:fade={{ duration: 100 }}
	>
		{@render children()}
	</div>
{/if}
