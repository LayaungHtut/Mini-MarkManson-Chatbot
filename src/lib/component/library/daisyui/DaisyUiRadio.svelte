<script lang="ts">
    let { checked = false, className } = $props<{
        checked?: boolean;
        className?: string;
    }>();
</script>

<input type="radio" name="radio-3" class="d-radio {className}" checked={checked} />
