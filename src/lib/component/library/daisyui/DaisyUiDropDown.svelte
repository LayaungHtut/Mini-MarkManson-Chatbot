<script lang="ts">
	let { children, className, buttonText } = $props<{
		children: () => void;
		className?: string;
		buttonText?: string;
	}>();
</script>

<div class="d-dropdown {className}">
	<div tabindex="0" role="button" class="d-btn m-1">{buttonText}</div>
	<ul
		class="d-dropdown-content d-menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
	>
		{@render children()}
	</ul>
</div>
