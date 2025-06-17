<script lang="ts">
    let { className, href, linkTag } = $props<{
        className?: string;
        href: string;
        linkTag: string;
    }>();
</script>

<a class="d-link {className}" href={href}>{linkTag}</a>