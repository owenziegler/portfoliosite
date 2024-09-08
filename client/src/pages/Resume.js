/*
Resume.js

description:
    this page is where users can read and download a copy of my resume.
*/
const Resume = () => {
    //based on example at https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
    const handleDownload = async () => {
        const response = await fetch('/public/documents/resume.pdf') //fetch document
        const blob = await response.blob() //convert to blob
        if(response.ok) { //if the response code was 200-299
            const docURL = window.URL.createObjectURL(blob) //create a URL for the blob
            const link = document.createElement('a') //create a new link element
            link.href = docURL //tie the link to the document URL
            link.download = 'Owen_Ziegler_Resume.pdf' //set filename to download as
            document.body.appendChild(link) //add link to the page
            link.click() //click the link
            document.body.removeChild(link) //remove the link from the page
        }
    }
    return (
        <div className="content">
            <h2>Resume</h2>
            <p>
                Please click the button below to download a copy of my resume.
            </p>
            <button onClick={handleDownload}>Download PDF</button>
        </div>
    )
}
export default Resume