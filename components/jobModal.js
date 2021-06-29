import React, { useState, useRef } from "react";
import Link from 'next/link'

import jobContents from '../static/jobContent'
import Ref from './reference'

import { isMobile } from '../utils/index'

export default function JobModal(props) {
  const [selected, setSelected] = useState('');
  const [maxHeight] = useState(isMobile() ? 2000 : 700);

  const job = jobContents().find(v => v.key === props.targetKey)
  const handleSelect = (index) => {
    let selectedList = selected.length ? selected.split(',') : []
    const selectedIndex = selectedList.findIndex(v => v === index)
    let result = []
    if (selectedIndex > -1) {
      result = selectedList.filter(v => v !== index)
    } else {
      result = [...selectedList, index]
    }
    setSelected(result.join(','))
  }
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 py-20 sm:py-40 z-50 outline-none focus:outline-none"
      >
        <div className="modalFrame relative w-auto mx-auto max-w-5xl px-4 sm:px-0">
          {/*content*/}
          <div className="rounded-xl shadow-lg relative flex flex-col w-full text-gray-900 bg-gray-50 outline-none focus:outline-none py-12 px-8 sm:py-20 sm:px-40 space-y-4 sm:space-y-12">
            {/*header*/}
            <div className="flex items-start justify-between border-solid">
              <p className="text-2xl font-bold">{job.title}</p>
              <button
                className="outline-none focus:outline-none"
                onClick={() => props.setShowModal(false)}
              >
                <img src="close.svg" />
              </button>
            </div>
            {/* 岗位简介 Start */}
            {
              job.describe.length
                ? (
                  <div className="text-lg">
                    {
                      job.describe.map(desc => {
                        return (
                          <div className="mb-4">{desc}</div>
                        )
                      })
                    }
                  </div>
                )
                : <></>
            }
            {/* 岗位简介 End */}

            {/* 扩展阅读 Start */}
            {
              job.article.length
                ? (
                  <div className="sm:pr-20">
                    {
                      job.article.map(article => {
                        return (
                          <>
                            <div className="mb-8">
                              <p className="text-justify text-gray-900 text-opacity-60 mb-2">{article.preTitle}</p>
                                <Ref
                                  link={article.link}
                                  title={article.title}
                                  time={article.time}
                                />
                            </div>  
                          </>
                        )
                      })
                    }
                  </div>
                )
                : <></>
            }
            {/* 扩展阅读 End */}

            {/* 开发岗位 Start */}
            

            <div className="w-full mx-auto">
              <h3 className="text-lg font-bold mb-4">开放岗位</h3>
              <ul className="shadow-box">
                {
                  job.jobList.map((j, index) => {
                  return (
                    <li className="bg-white relative border border-gray-300 mb-4 rounded-lg cursor-pointer group hover:shadow-md" key={index}>
                      <div className="flex flex-wrap sm:flex-nowrap justify-between w-full px-3 py-2 sm:px-8 sm:py-4 text-left relative" onClick={() => handleSelect(index+'')}>
                        <p className="w-full sm:w-auto text-base sm:text-lg group-hover:text-blue-600">{j.title}</p>
                        <p className="w-full sm:w-auto flex items-center text-gray-400">
                          <span className="text-sm mr-4">{j.base}</span>
                          <img className={`w-3 h-3 sm:w-5 sm:h-5 transition-all duration-300 absolute right-2 top-5 ${selected.match(index) ? 'transform -rotate-180' : ''}`} src="down.svg"></img>
                        </p>
                      </div>

                      <div
                        className={`relative overflow-hidden transition-all max-h-0 duration-300 px-4 sm:px-8`}
                        style={{
                          maxHeight: `${selected.match(index) ? maxHeight : 0}px`
                        }}
                      >
                        <div className="text-md font-bold text-blue-500 mb-2">岗位职责</div>
                        {j.responsibility.title.length ? <p>{j.responsibility.title}</p> : <></>}
                        <ul className="pl-6 sm:pl-8 mb-4 list-disc">
                          {
                            j.responsibility.list.map(res => {
                              return <li key={res}>{res}</li>
                            })
                          }
                        </ul>

                        <div className="text-md font-bold text-blue-500 mb-2">任职要求</div>
                        {j.request.title.length ? <p>{j.request.title}</p> : <></>}
                        <ul className="pl-6 sm:pl-8 mb-4 list-decimal">
                          {
                            j.request.list.map(req => {
                              return <li key={req}>{req}</li>
                            })
                          }
                        </ul>

                        {
                          Object.keys(j.extra).length
                            ? (
                              <>
                                <div className="text-md font-bold text-blue-500 mb-2">加分项</div>
                                {j.extra.title.length ? <p>{j.extra.title}</p> : <></>}
                                <ul className="pl-6 sm:pl-8 list-decimal">
                                  {
                                    j.extra.list.map(ext => {
                                      return <li key={ext}>{ext}</li>
                                    })
                                  }
                                </ul>
                              </>
                            )
                            : <></>
                        }

                        <div className="w-48 mx-auto mb-6">
                          <Link href={j.link}>
                            <a className="block text-base text-center text-white px-8 py-2 bg-blue-600 rounded-full hover:bg-blue-500 mt-8" target="_blank">立即投递简历 ↗</a>
                          </Link>
                        </div>
                      </div>
                    </li>
                  )
                  })
                }
              </ul>
            </div>
            {/* 开发岗位 End */}
          </div >
        </div >
      </div >
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}