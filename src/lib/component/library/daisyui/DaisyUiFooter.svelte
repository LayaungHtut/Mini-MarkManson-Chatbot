<script lang="ts">
	let { children, className } = $props<{
		children: () => void;
		className?: string;
	}>();
</script>

<footer class="d-footer {className}">
	{@render children()}
</footer>
