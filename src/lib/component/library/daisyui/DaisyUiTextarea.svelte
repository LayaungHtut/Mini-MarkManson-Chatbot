<script lang="ts">
	let { placeHolder, className } = $props<{
		placeholder?: string;
		className?: string;
	}>();
</script>

<textarea placeholder={placeHolder} class="d-textarea {className}"></textarea>
