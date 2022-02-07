export async function get({ request, platform }) {
	// const KV = platform.env.KV;

    return {
        body: {
            env: Object.entries(platform.env)
            // value: await KV.get('svelte')
        }
    };
}
