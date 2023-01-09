
export const getGifs = async(category) => {

    const URL = `https://api.giphy.com/v1/gifs/search?api_key=EtbYkTts3yhfvtlv6tiDe6eXJQRR4fmd&q=${category}&limit=20`
    
    const resp = await fetch( URL );

    const { data } = await resp.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs)

    return gifs
}
