/*
utils.js

description:
    this file holds various functions that are useful across the entire program.
*/

//Parses a date from ISO 8601 format into a readable date.
//input: ISO 8601 (or other standard formats) date string
//output: readable date string
const dateParser = (str) => {
    const parsedDate = new Date(str).toLocaleDateString()
    return parsedDate;
}

//Shortens a string to 260 characters, culls down to the last full word, and adds an ellipsis.
//This function is used in PostPreview to get a shortened version of the displayed post's body.
//input: string to be shortened
//output: shortened string
const stringShortener = (str) => {
    const targetLen = 260 //target string length
    if (str.length <= targetLen) return str //if the string is shorter than the target, don't change anything
    str = str.substring(0,targetLen) //shorten the string
    let i = str.lastIndexOf(' ') //find the last instance of a space
    str = str.substring(0,i) //remove the final fragment of a word, if one exists
    str+="..." //append an ellipsis
    return str //return the shortened string
}

//Determines if the client is running in a production environment, and returns the appropriate
//API URL for the situation.
//input: none
//output: API URL string
const getApiUrl = () => {
    //return process.env.REACT_APP_PRODUCTION_API_URL //uncomment this if you're working from an unapproved IP address
    return process.env.NODE_ENV === 'production' //if the environment is production...
        ? process.env.REACT_APP_PRODUCTION_API_URL //return the production API URL
        : process.env.REACT_APP_DEVELOPMENT_API_URL //return the development API URL
}

export {
    stringShortener, 
    dateParser,
    getApiUrl
}