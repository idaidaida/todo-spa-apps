export async function callApi(url){
    return fetch(url)
        .then( res => {
            if(res.ok){
                return res.json();
            }else{
                return Promise(new Error("error occured"))
            }
        });
}