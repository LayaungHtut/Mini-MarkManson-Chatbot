<script lang="ts">
    let { children, className } = $props<{
        children: () => void;
        className?: string;
    }>();
</script>

<div class="d-hero bg-base-200 min-h-screen">
  <div class="d-hero-content {className}">
    {@render children()}
  </div>
</div>