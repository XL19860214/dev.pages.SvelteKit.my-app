export async function get({ request, platform }) {
	// const KV = platform.env.KV;

    return {
        body: {
            env: Object.entries(platform.env),
            kv_svelte: await platform.env.KV.get('svelte')
        }
    };
}
