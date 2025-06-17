<script lang="ts">
    let { children, className } = $props<{
        className?: string;
    }>();
</script>

<div class="d-dock {className}">
    {@render children()}
</div>