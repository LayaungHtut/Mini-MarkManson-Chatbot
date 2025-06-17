<script lang="ts">
	let { className, checked = false } = $props<{
		className?: string;
		checked?: boolean;
	}>();
</script>

<input type="checkbox" {checked} class="d-checkbox {className}" />
