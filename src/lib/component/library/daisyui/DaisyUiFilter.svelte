<script lang="ts">
	let { children, className, filterName } = $props<{
		children: () => void;
		filterName: string;
		className?: string;
	}>();
</script>

<div class="d-filter">
	<input
		class="d-btn {className}"
		type="radio"
		name={filterName}
		aria-label="All"
	/>
	{@render children()}
</div>
