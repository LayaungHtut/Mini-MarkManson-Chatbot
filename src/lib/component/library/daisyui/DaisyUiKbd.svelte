<script lang="ts">
	let { className, keyboard } = $props<{
		className?: string;
		keyboard: string;
	}>();
</script>

<kbd class="d-kbd {className}">{keyboard}</kbd>
