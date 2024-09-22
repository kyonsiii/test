//Cookie関連
function setCookie(key, value, days){
    let expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${key}=${value};expires=${expires.toUTCString()};path=/`;
}


function getCookie(key){
    let keyEQ = key + "=";
    return document.cookie.split(';')
            .map(a => a.trim())
                .find(c => c.startsWith(keyEQ))
                ?.substring(keyEQ.length) || null;
}