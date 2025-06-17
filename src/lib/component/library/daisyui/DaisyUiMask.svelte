<script lang="ts">
	let { className, imageAlt, imageSrc } = $props<{
		className?: string;
	}>();
</script>

<img class="d-mask {className}" alt={imageAlt} src={imageSrc} />
