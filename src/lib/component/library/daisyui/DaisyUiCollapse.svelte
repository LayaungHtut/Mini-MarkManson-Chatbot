<script lang="ts">
	let { collapseTitle, collapseContent, className } = $props<{
		collapseTitle: string;
		collapseContent: string;
		className?: string;
	}>();
</script>

<div class={className}>
	<input type="checkbox" />
	<div class="d-collapse-title font-semibold">{collapseTitle}</div>
	<div class="d-collapse-content text-sm">
		{collapseContent}
	</div>
</div>
