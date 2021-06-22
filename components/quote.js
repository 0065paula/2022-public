import Link from "next/link";
import React from "react";

export default function Quote( props ) {
  return (
    <div className="flex flex-row col-span-1 space-x-1.5 p-6 sm:p-8 bg-white rounded-2xl">
      <img className="w-8 h-8 rounded-lg" src="icon_quote.svg"/>
      <div className="space-y-8 pr-4 sm:pr-6 text-base sm:text-lg">
        <p className="leading-7 text-gray-900">{props.content1}</p>
        <p className="leading-7 text-gray-900">{props.content2}</p>
        <div className="space-y-0.5 items-start justify-start">
          <p className="font-semibold text-gray-900">{props.name}</p>
          <p className="text-sm text-gray-700 text-opacity-60">{props.title}</p>
        </div>
      </div>
    </div> 
  )
}
