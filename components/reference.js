import Link from "next/link";
import React from "react";

export default function Ref( props ) {
  return (
    <Link href={props.link}>
      <a target="_blank">
        <div className="flex flex-row justify-between space-x-4 px-4 py-3 bg-white shadow rounded-lg w-full md:w-2/3 group hover:shadow-xl transform hover:-translate-y-1 transition-transform">
          <div className="space-y-2">
            <p className="w-full text-lg font-semibold group-hover:text-blue-500">{props.title}</p>
            <p className="text-sm text-justify text-black text-opacity-50">{props.time}</p>
          </div>
          <img src="icon_goto.svg" width={24} height={24} />
        </div>
      </a>
    </Link>   
  )
}
