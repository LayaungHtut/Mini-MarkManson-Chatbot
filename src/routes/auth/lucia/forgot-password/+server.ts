import { requestPasswordReset } from '$lib/server/auth';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const form = await request.formData();
	const email = form.get('email');

	console.log('Received email:', email);

	if (!email || typeof email !== 'string') {
		return json({ success: false }, { status: 400 });
	}

	await requestPasswordReset(email);

	return json({ success: true });
}
