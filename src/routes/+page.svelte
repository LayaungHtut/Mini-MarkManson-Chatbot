<script lang="ts">
	import { goto } from '$app/navigation';
	import markmansonProfile from '$lib/asset/image/markmanson.webp';
	import { enhance } from '$app/forms';
	import type { ActionData } from './auth/lucia/login/$types';

	let {
		checked = true,
		form,
		data
	} = $props<{
		checked?: boolean;
		form?: ActionData;
		data?: { user: { username: string } | null };
	}>();
</script>

<div class="tabs tabs-lift tabs-bottom">
	<!-- TAB - 1 -->
	<input type="radio" name="my_tabs_3" class="tab" aria-label="Tab 1" {checked} />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<div
			class="hero min-h-screen"
			style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"
		>
			<div class="hero-overlay"></div>
			<div class="hero-content text-neutral-content text-center">
				<div class="max-w-md">
					<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
					<p class="mb-5">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button
						class="btn btn-primary"
						onclick={() => (window.location.href = 'https://markmanson.net/')}>Get Started</button
					>
				</div>
			</div>
		</div>
	</div>

	<!-- TAB - 2 -->
	<input type="radio" name="my_tabs_3" class="tab" aria-label="Tab 2" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<div class="hero bg-base-200 min-h-screen">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<img alt="Hero" src={markmansonProfile} class="max-w-sm rounded-lg shadow-2xl" />
				<div>
					<h1 class="text-5xl font-bold">Box Office News!</h1>
					<p class="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button
						class="btn btn-primary"
						onclick={() =>
							(window.location.href = 'https://youtube.com/@iammarkmanson?si=4ygFzxRi5ScoRM3U')}
						>Get Started</button
					>
				</div>
			</div>
		</div>
	</div>

	<!-- TAB - 3 -->
	<input type="radio" name="my_tabs_3" class="tab" aria-label="Tab 3" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<div class="hero bg-base-200 min-h-screen">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<div class="text-center lg:text-left">
					<h1 class="text-5xl font-bold">Login now!</h1>
					<p class="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div class="card-body">
						<div class="page-container">
							{#if data.user}
								<p>Logged in as {data.user.username}</p>
							{:else}
								<form method="post" action="?/login" use:enhance>
									<label class="input validator">
										<svg
											class="h-[1em] opacity-50"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
										>
											<g
												stroke-linejoin="round"
												stroke-linecap="round"
												stroke-width="2.5"
												fill="none"
												stroke="currentColor"
											>
												<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
												<circle cx="12" cy="7" r="4"></circle>
											</g>
										</svg>
										<input name="username" />
									</label>

									<label class="input validator">
										<svg
											class="h-[1em] opacity-50"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
										>
											<g
												stroke-linejoin="round"
												stroke-linecap="round"
												stroke-width="2.5"
												fill="none"
												stroke="currentColor"
											>
												<path
													d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
												></path>
												<circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
											</g>
										</svg>
										<input type="password" name="password" />
									</label>

									<!-- svelte-ignore a11y_click_events_have_key_events -->
									<span
										role="button"
										tabindex="0"
										onclick={() => goto('auth/lucia/forgot-password')}>Forgot Password?</span
									>
									<p style="color: red">{form?.message ?? ''}</p>
									<button class="btn btn-primary">Login</button>
									<button class="btn btn-primary" onclick={() => goto('/auth/lucia/register')}
										>Register</button
									>
								</form>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.page-container {
		& form {
			border-radius: 12px;
			padding: 40px 30px;
			display: flex;
			flex-direction: column;
			gap: 20px;
			animation: fadeIn 0.5s ease-in-out;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
