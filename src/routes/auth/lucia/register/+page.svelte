<script lang="ts">
	let username = $state('');
	let password = $state('');
	let message = $state('');
	let email = $state('');

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);
		const response = await fetch('/auth/lucia/register', {
			method: 'POST',
			body: formData
		});

		if (response.redirected) {
			window.location.href = response.url;
			return;
		}

		try {
			const data = await response.json();
			message = data.message || 'Email or username already exists';
		} catch {
			message = 'An error occurred';
		}
	};
</script>

<div class="flex min-h-screen items-center justify-center">
	<form onsubmit={handleSubmit} class="w-full max-w-md rounded-lg p-8 shadow-md">
		<h2 class="mb-5 text-center text-2xl font-semibold text-gray-800">Create an Account</h2>

		<div class="mb-4">
			<label class="input validator flex items-center gap-2">
				<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<g
						stroke-linejoin="round"
						stroke-linecap="round"
						stroke-width="2.5"
						fill="none"
						stroke="currentColor"
					>
						<rect width="20" height="16" x="2" y="4" rx="2" />
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
					</g>
				</svg>
				<input
					type="email"
					id="email"
					name="email"
					bind:value={email}
					placeholder="Enter your email"
					required
				/>
			</label>
			<div class="mt-1 hidden text-xs text-red-500">Enter valid email address</div>

			<label class="input validator mt-4 flex items-center gap-2">
				<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
				<input
					type="text"
					id="username"
					name="username"
					bind:value={username}
					placeholder="Enter your username"
					required
				/>
			</label>

			{#if message && message.includes('username')}
				<div class="mt-1 text-xs text-red-500">{message}</div>
			{/if}
		</div>

		<div class="mb-4">
			<label class="input validator flex items-center gap-2">
				<svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
				<input
					type="password"
					id="password"
					name="password"
					bind:value={password}
					placeholder="Enter your password"
					required
				/>
			</label>

			{#if message && message.includes('password')}
				<div class="mt-1 text-xs text-red-500">{message}</div>
			{/if}
		</div>

		<button class="btn btn-primary w-full" type="submit">Register</button>

		{#if message && !message.includes('username') && !message.includes('password')}
			<div class="mt-3 text-center text-sm text-red-500">{message}</div>
		{/if}

		<p class="mt-3 text-center text-sm text-gray-700">
			Already have an account?
			<a href="/auth/lucia/login" class="link link-primary">Login here</a>
		</p>
	</form>
</div>
