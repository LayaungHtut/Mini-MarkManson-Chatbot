<script lang="ts">
	let { children, className } = $props<{
		children: () => void;
		className?: string;
	}>();
</script>

<div class="d-drawer {className}">
	<input id="my-drawer-4" type="checkbox" class="d-drawer-toggle" />
	{@render children()}
</div>
