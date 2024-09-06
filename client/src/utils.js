/*
utils.js

description:
    this file holds various functions that are useful across the entire program.
*/

const StringShortener = (str) => {
    const targetLen = 260 //target string length
    if (str.length <= targetLen) return str //if the string is shorter than the target, don't change anything
    str = str.substring(0,targetLen) //shorten the string
    let i = str.lastIndexOf(' ') //find the last instance of a space
    str = str.substring(0,i) //remove the final fragment of a word, if one exists
    str+="..." //append an ellipsis
    return str //return the shortened string
}

const DateParser = (str) => {
    return parseInt(str.substring(5,7),10).toString()+"/"+parseInt(str.substring(8,10),10).toString()+"/"+parseInt(str.substring(0,4),10).toString()
}

export {StringShortener, DateParser}