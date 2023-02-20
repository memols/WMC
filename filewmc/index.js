function loadScript(src) 
{

    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        console.log(script.src);

        script.onload = () => {
            resolve(script);
            alert(`Script is loaded!`);
        }
        script.onerror = () => {
            reject(new Error(`Script load error for ${src}`));
            alert(`Script-error!`);
        }

        document.head.append(script);
    })
}


loadScript("./hello-world.js")
    .then(function resultFunc(){
    console.log("Promise: Everythings ok!")})
    .catch(function errFunc(){
    console.log("Promise: An Error occured!");
});