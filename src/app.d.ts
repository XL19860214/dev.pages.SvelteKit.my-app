/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}

	interface Platform {
		env: {
			COUNTER: DurableObjectNamespace;
		};
	}

	interface Session {}

	interface Stuff {}
}

export async function post({ request, platform }) {
	const counter = platform.env.COUNTER.idFromName('A');
}
