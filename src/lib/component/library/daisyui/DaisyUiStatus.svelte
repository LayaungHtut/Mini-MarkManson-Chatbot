<script lang="ts">
	let { className } = $props<{
		className?: string;
	}>();
</script>

<div aria-label="status" class="d-status {className}"></div>
