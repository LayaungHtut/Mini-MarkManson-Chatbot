<script lang="ts">
	let { className, imageAlt, imageSrc } = $props<{
		className?: string;
		imageAlt: string;
		imageSrc: string;
	}>();
</script>

<div class="d-avatar">
	<div class="d-mask w-24 {className}">
		<img src={imageSrc} alt={imageAlt} />
	</div>
</div>
