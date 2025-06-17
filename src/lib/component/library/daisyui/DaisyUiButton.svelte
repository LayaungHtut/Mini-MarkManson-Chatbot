<script lang="ts">
	let { children, onClick, className } = $props<{
		children: () => void;
		onClick: () => void;

		className?: string;
	}>();
</script>

<button class="d-btn {className}" onclick={onClick}>
	{@render children()}
</button>
