const StringShortener = (str) => {
    const targetLen = 260 //target string length
    if (str.length <= targetLen) return str
    str = str.substring(0,targetLen)
    let i = str.lastIndexOf(' ')
    str = str.substring(0,i)
    str+="..."
    return str
}

const DateParser = (str) => {
    return parseInt(str.substring(5,7),10).toString()+"/"+parseInt(str.substring(8,10),10).toString()+"/"+parseInt(str.substring(0,4),10).toString()
}

export {StringShortener, DateParser}