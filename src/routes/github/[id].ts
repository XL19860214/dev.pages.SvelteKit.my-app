export async function get({ params }) {
    return {
        body: {
            id: params.id
        }
    }
}
