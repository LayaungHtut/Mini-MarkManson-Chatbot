<script lang="ts">
	let { className, value, max, min } = $props<{
		className?: string;
		value?: number;
		max: number;
		min: number;
	}>();
</script>

<input type="range" {min} {max} {value} class="d-range {className}" />
