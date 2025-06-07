<script lang="ts">
    import type { PageServerData } from "../../routes/$types";

    let { data } = $props<{ data: PageServerData }>();
</script>


{#if data.user}
	<div class="user-info">
		<div class="user-meta">
			<img src="https://i.pinimg.com/736x/70/17/40/7017409c5fef4a12b5ac81af0a52de10.jpg" alt="ff" />
			<span class="label">Logged in as</span>
			
			<span class="username">{data.user.username}</span>
			<span class="user-id">#{data.user.id}</span>
		</div>
		<form method="post" action="?/logout">
			<button class="signout-button btn btn-ghost btn-error" title="Sign out">Sign Out</button>
		</form>
		<label class="flex cursor-pointer gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<circle cx="12" cy="12" r="5" />
				<path
					d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
				/>
			</svg>
			<input type="checkbox" value="synthwave" class="toggle theme-controller" />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
			</svg>
		</label>
	</div>
{:else}
	<p>User not found</p>
{/if}

<style>
	.user-info {
		display: flex;
		align-items: center;

		flex-direction: column;
		padding: 20px;

		border-radius: 8px;
		margin-bottom: 20px;
		height: 100vh;

	}

	.user-meta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	.user-meta img {
		width: 105px;
		height: 105px;
		border-radius: 50%;
	}

	.label {
		font-size: 14px;
		color: #555;
	}

	.username {
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}

	.user-id {
		font-size: 14px;
		color: #777;
	}

	.signout-button {
		margin-top: 10px;
		margin-bottom: 10px;
	}
</style>