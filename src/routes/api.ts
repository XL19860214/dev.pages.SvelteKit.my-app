export async function get({ request, platform }) {
	const KV = platform.env.KV;

    return {
        body: {
            value: await KV.get('svelte')
        }
    };
}
