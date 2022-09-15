
export const BASE_URL = 'mongodb://localhost'

export async function api (url, params = {}) {

    
    params = Object.assign ( {
        mode: 'cors',
        cache: 'no-cache'
    }, params )


    params.headers = Object.assign ( {
        Authorization: 'Bearer my-token',
        'Content-Type': 'application/json'
    }, params.headers )
  
    let response = await fetch(BASE_URL + url, params)
    let json = await response.json() || {}
    if (!response.ok) {
        let errorMessage = json.error || response.status
        throw new Error(errorMessage)
    }
  console.log("api mandeha");
    console.log(`params: ${params}`);


    return json;
}