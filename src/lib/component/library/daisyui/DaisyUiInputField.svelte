<script lang="ts">
	let {
		inputPlaceholderText,
		inputType,
		inputPattern,
		inputTitle,
		minLength,
		maxlength
	} = $props<{
		inputPlaceholderText: string;
		inputType: string;
		inputPattern?: string;
		inputTitle?: string;
		minLength?: number;
		maxlength?: number;
	}>();
</script>
	
	<input
		type={inputType}
		required
		placeholder={inputPlaceholderText}
		pattern={inputPattern}
		minlength={minLength ?? 1}
		maxlength={maxlength ?? 5}
		title={inputTitle}
	/>

