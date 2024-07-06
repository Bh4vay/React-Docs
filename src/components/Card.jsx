import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {

    return (
        
        <motion.div 
        drag
        dragConstraints = {reference} 
        whileDrag={{scale : 1.2}}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className='relative w-[220px] h-[270px] rounded-[45px] bg-zinc-900/90 text-white px-6 py-8 flex-shrink-0'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'>
                {data.desc}
            </p>

            <div className='footer absolute bottom-0 w-full overflow-hidden left-0'>

                <div className='flex items-center justify-between mb-3 py-3 px-8'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-7 h-7 rounded-full flex items-center justify-center bg-zinc-600'>
                        {
                            data.close ? (<IoIosClose />) : (<MdOutlineFileDownload size=".7em" color='#fff'/>)
                        }
                    </span>
                </div>

                {
                    data.close && (
                        <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} rounded-b-[45px]`}>
                            <h3 className='text-sm font-semibold flex items-center justify-center'>
                                {data.tag.tagTitle}
                            </h3>
                        </div>
                    )
                }

            </div>

        </motion.div>
    )
}

export default Card