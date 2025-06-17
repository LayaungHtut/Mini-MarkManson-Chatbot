<script lang="ts">
	let { className, value, max } = $props<{
		className?: string;
		value: number;
		max: number;
	}>();
</script>

<progress class="progress {className} w-56" {value} {max}></progress>
