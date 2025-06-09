<script lang="ts">
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import { INITIAL_MESSAGE } from '$lib/config/config';
</script>

<h1>Chat bot</h1>
<form method="post" action="?/logout">
	<button class="signout-button btn btn-ghost btn-error" title="Sign out">Sign Out</button>
</form>
