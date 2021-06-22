import Link from "next/link";
import React from "react";

export default function Media( props ) {
  return (
    <Link href={props.link}>
      <a target="_blank">
        <div className="w-full sm:w-2/3 space-y-3 px-6 py-8 bg-white shadow rounded-lg mx-auto hover:shadow-xl transform hover:-translate-y-4 transition-transform">
          <img className="w-1/3" src={props.logo}/>
          <p className="text-xl text-blue-600">{props.title}</p>
          <p className="text-sm text-gray-900">{props.desc}</p>
        </div>
      </a>
    </Link>   
  )
}
