<script lang="ts">
    let email = $state('');
    let message = $state('');
    let success = $state(false);
  
    async function submit(event: SubmitEvent) {
      event.preventDefault();
      const res = await fetch('/auth/lucia/forgot-password', {   
        method: 'POST',
        body: new FormData(event.target as HTMLFormElement),
      });
      const data = await res.json();
      if (data.success) {
        success = true;
        message = 'Check your email for the password reset link.';
      } else {
        message = 'Error sending reset link. Please try again.';
      }
    }
  </script>
  
  
  <form onsubmit={submit} class="flex flex-col gap-4 max-w-sm mx-auto mt-10">
    <h1 class="text-2xl font-bold">Forgot Password</h1>
    <input
      type="email"
      bind:value={email}
      name="email"
      class="p-2 border rounded"
      required
      placeholder="Your email"
      disabled={success}
    />
    <button
      class="p-2 bg-blue-500 text-white rounded"
      type="submit"
      disabled={success}
    >
      {success ? 'Link Sent' : 'Send Reset Link'}
    </button>
  
    {#if message}
      <p class="text-center mt-4">{message}</p>
    {/if}
  </form>
  