<script lang="ts">
    let { children, className } = $props<{
        children: () => void;
        className?: string;
    }>();
</script>

<label class="d-input {className}">
    {@render children()}
</label>