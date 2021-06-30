import { useEffect, useState } from 'react'

import timeline from '../static/timeline'
import Media from '../components/media'

const START = 2500
const AREA_2013_SCROLL = START + 92 * 2 + 4 * 16
const AREA_2015_SCROLL = AREA_2013_SCROLL + 92 * 2 + 4 * 16
const AREA_2017_SCROLL = AREA_2015_SCROLL + 120 + 2 * 16
const AREA_2019_SCROLL = AREA_2017_SCROLL + 120 + 2 * 16
const AREA_2020_SCROLL = AREA_2019_SCROLL + 144 + 176 + 4 * 16
const AREA_2021_SCROLL = AREA_2020_SCROLL + 144 * 2 + 4 * 16

export default function TimeLine(props) {
  const [timer, setTimer] = useState();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > START && window.scrollY < AREA_2013_SCROLL) {
      setActiveIndex(0)
    } else if (window.scrollY > AREA_2013_SCROLL && window.scrollY < AREA_2015_SCROLL) {
      setActiveIndex(1)
    } else if (window.scrollY > AREA_2015_SCROLL && window.scrollY < AREA_2017_SCROLL) {
      setActiveIndex(2)
    } else if (window.scrollY > AREA_2017_SCROLL && window.scrollY < AREA_2019_SCROLL) {
      setActiveIndex(3)
    } else if (window.scrollY > AREA_2019_SCROLL && window.scrollY < AREA_2020_SCROLL) {
      setActiveIndex(4)
    } else if (window.scrollY > AREA_2020_SCROLL && window.scrollY < AREA_2021_SCROLL) {
      setActiveIndex(5)
    }
  }

  useEffect(() => {
    setTimer(setTimeout(() => {
      clearTimeout(timer)
      !props.mobile && window.addEventListener('scroll', handleScroll)
    }, 50))
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [props.mobile])

  return (
    <>
      <div className="space-y-4 sm:space-y-8 col-span-1 sm:col-span-12 md:col-span-8 md:col-start-3 mb-4 sm:mb-12">
        <h4 className="textClipGradientBlue text-2xl sm:text-4xl font-semibold text-center">发展历程</h4>
        <p className="text-md sm:text-xl font-normal text-center text-gray-800 px-12">成立 8 年。在初创公司中，我们很成熟。在 IT 基础架构领域，我们很年轻。一路走来，不断取得新成就。</p>
      </div>
      {/* Axis */}
      <div className="col-span-1 sm:col-span-2 sm:col-start-2">
        <ul className="timelineAxis sticky top-48 grid grid-cols-3 sm:block">
          {['2013', '2015', '2017', '2019', '2020', '2021'].map((year, index) => {
          return (
            <li className={`${activeIndex === index ? 'active' : ''}`} key={year}>
              {year}
            </li>
          );
        })}
        </ul>
      </div>

      {/* Cards */}
      <ul className="col-span-1 sm:col-span-6 sm:col-start-5 md:col-span-5 md:col-start-5">
        {timeline().map((card, index) => {
          return (
            <li className={`mt-8 ${activeIndex === card.activeIndex ? 'active' : ''} ${props.mobile ? 'active' : ''}`} key={index}>
              <Media
                link={card.link}
                logo={card.logo}
                title={card.title}
                time={card.time}
              />
            </li>
          );
        })}
      </ul>
    </>
  )
}