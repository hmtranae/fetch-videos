import axios from 'axios'

const KEY = 'AIzaSyAmRFoAcYR2GpzncyXP-4FEDwf8tgxOyDY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});
