const API_KEY = process.env.REACT_APP_API_KEY;

async function fetchImages(keyword, limit) {
    const apiQueryString = `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo&per_page=${limit}`;

    const result = await fetch(apiQueryString, {
                        method: 'GET'
                    }).then(res => res.json());

    return result;
}

export default fetchImages;