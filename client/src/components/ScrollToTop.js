/*
ScrollToTop.js

description:
ScrollToTop is a utility componenent that scrolls to the top when the user changes the page.
*/
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
const ScrollToTop = () => {
    const {pathname} = useLocation()
    console.log("test")
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])
    return null
}
export default ScrollToTop