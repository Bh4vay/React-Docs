import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef();

    const data = [
        {
            desc :  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize : "0.5MB",
            close :true,
            tag : {isOpen : true, tagTitle : "Download Now", tagColor : "green"}
        },
        {
            desc :  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize : "0.9MB",
            close :false,
            tag : {isOpen : true, tagTitle : "Download Now", tagColor : "blue"}
        },
        {
            desc :  "Lorem ipsum dolor sit amet consectetur adipisicing.",
            fileSize : "0.3MB",
            close :true,
            tag : {isOpen : true, tagTitle : "Upload Now", tagColor : "blue"}
        }
    ]


    return (
        <div ref={ref} className="w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap p-5">
            {
            data.map((item, index) => (
                <Card data = {item} key = {index} reference = {ref}/>
            ))  
            }          
        </div>
    )
}

export default Foreground;