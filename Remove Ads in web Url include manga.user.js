// ==UserScript==
// @name         Remove Ads in web Url include manga
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include     /^https:\/\/.*[manga | niceoppai].*/
// @icon          https://www.google.com/s2/favicons?domain=manga168.com
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
const $ = window.jQuery = window.$

const removeElmFromClass = (className)=>{
    //console.log({className})
    const elms = $(className)
    //console.log({elms})
    elms.each(function(){
        const elm = this
        //console.log({elm})
        elm.remove()
    })

}
const onWindowWillLoad = (callback)=>()=>
{
    if (document.readyState === 'complete') {
        //dom is ready, window.onload fires later
    }
    callback?.()
};

const cleanAds = ()=>{
    const ads = [
        '[class*=ads]',
        '[id*=ads]',
        '#content > center',
        '[class*=afc_popup]',
        '#block-14'
    ]
    ads.forEach(removeElmFromClass)
}
cleanAds()
document.onreadystatechange =onWindowWillLoad()

$(window).on('load', function(){

    console.log('window loaded')

})