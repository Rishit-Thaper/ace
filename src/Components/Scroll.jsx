import {React,useEffect} from 'react'

export default function Scroll() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div></div>
  )
}
