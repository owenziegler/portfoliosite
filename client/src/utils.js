/*
utils.js

description:
    this file holds various functions that are useful across the entire program.
*/


//Shortens a string to 260 characters, culls down to the last full word, and adds an ellipsis.
//This function is used in PostPreview to get a shortened version of the displayed post's body.
//input: string to be shortened
//output: shortened string
const StringShortener = (str) => {
    const targetLen = 260 //target string length
    if (str.length <= targetLen) return str //if the string is shorter than the target, don't change anything
    str = str.substring(0,targetLen) //shorten the string
    let i = str.lastIndexOf(' ') //find the last instance of a space
    str = str.substring(0,i) //remove the final fragment of a word, if one exists
    str+="..." //append an ellipsis
    return str //return the shortened string
}

//Parses a date from the format used by MongoDB into a readable date.
//input: original date string
//output: parsed date string
const DateParser = (str) => {
    return parseInt(str.substring(5,7),10).toString()+"/"+parseInt(str.substring(8,10),10).toString()+"/"+parseInt(str.substring(0,4),10).toString()
}

//Determines if the client is running in a production environment, and returns the appropriate
//API URL for the situation.
//input: none
//output: API URL string
const getApiUrl = () => {
    return process.env.NODE_ENV === 'production' //if the environment is production...
        ? process.env.REACT_APP_PRODUCTION_API_URL //return the production API URL
        : process.env.REACT_APP_DEVELOPMENT_API_URL //return the development API URL
   //return process.env.REACT_APP_PRODUCTION_API_URL
}

export {
    StringShortener, 
    DateParser,
    getApiUrl
}