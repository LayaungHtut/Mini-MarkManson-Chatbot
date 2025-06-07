<script lang="ts">
	let { checked = true } = $props<{ checked?: boolean }>();
</script>

<div class="tabs tabs-lift">
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
					<button class="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	</div>

	<!-- TAB - 2 -->
	<input type="radio" name="my_tabs_3" class="tab" aria-label="Tab 2" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<div class="hero bg-base-200 min-h-screen">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<img
					alt="Hero"
					src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
					class="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<h1 class="text-5xl font-bold">Box Office News!</h1>
					<p class="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button class="btn btn-primary">Get Started</button>
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
						<fieldset class="fieldset">
							<label class="label" for="email-input">Email</label>
							<input id="email-input" type="email" class="input" placeholder="Email" />
							<label class="label" for="password-input">Password</label>
							<input id="password-input" type="password" class="input" placeholder="Password" />
							<div><a href="/" class="link link-hover">Forgot password?</a></div>
							<button class="btn btn-neutral mt-4">Login</button>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
