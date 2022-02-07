export async function get({ request, platform }) {
	// const KV = platform.env.KV;
    const KV2 = platform.env.KV2;

    return {
        body: {
            env: Object.entries(platform.env),
            kv_svelte: await platform.env.KV.get('svelte'),
            kv2_svelte: await KV2.get('svelte'),
        }
    };
}
