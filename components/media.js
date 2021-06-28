import Link from "next/link";
import React from "react";

export default function Media( props ) {
  return (    
        <div 
          className="mediaCard flex w-full px-4 py-4 bg-white shadow rounded-lg mx-auto hover:shadow-xl transform hover:-translate-y-1 transition-transform"
          style={{
            // backgroundImage: `url({props.logo})`
          }}
        >
          <div className="mediaText">
            <p className="text-sm text-gray-400 mb-1">{props.time}</p>
            <p className="text-lg text-gray-900 font-bold mb-2">{props.title}</p>
            <Link href={props.link}>
              <a target="_blank" className="mediaLink block text-base text-blue-500 hover:text-blue-600">了解详情</a>
            </Link>
          </div>
        </div>
         
  )
}
