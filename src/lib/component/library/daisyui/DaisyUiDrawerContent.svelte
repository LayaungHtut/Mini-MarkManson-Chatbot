<script lang="ts">
	let { className, children } = $props<{
		children: () => void;
	}>();
</script>

<div class="d-drawer-content {className}">
	<label for="my-drawer-4" class="d-drawer-button d-btn d-btn-primary"
		>Open drawer</label
	>
</div>
<div class="d-drawer-side">
	<label for="my-drawer-4" aria-label="close sidebar" class="d-drawer-overlay"
	></label>
	{@render children()}
</div>
