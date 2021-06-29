import { useEffect, useState } from 'react'

import timeline from '../static/timeline'
import Media from '../components/media'

const CARD_HEIGHT = 120 + 2 * 16 // 自身高 120 + 上边距 2rem

export default function TimeLine(props) {
  const [start, setStart] = useState(props.mobile ? 3600 : 2500);
  const [timer, setTimer] = useState();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > start && window.scrollY < start + CARD_HEIGHT * 2) {
      setActiveIndex(0)
    } else if (window.scrollY > start + CARD_HEIGHT * 2 && window.scrollY < start + CARD_HEIGHT * 4) {
      setActiveIndex(1)
    } else if (window.scrollY > start + CARD_HEIGHT * 4 && window.scrollY < start + CARD_HEIGHT * 5) {
      setActiveIndex(2)
    } else if (window.scrollY > start + CARD_HEIGHT * 5 && window.scrollY < start + CARD_HEIGHT * 6) {
      setActiveIndex(3)
    } else if (window.scrollY > start + CARD_HEIGHT * 6 && window.scrollY < start + CARD_HEIGHT * 8) {
      setActiveIndex(4)
    } else if (window.scrollY > start + CARD_HEIGHT * 8 && window.scrollY < start + CARD_HEIGHT * 10) {
      setActiveIndex(5)
    }
  }

  const handleClick = (index) => {
    setActiveIndex(index)
    // TODO: 控制屏幕滚动
  }

  useEffect(() => {
    setStart(props.mobile ? 3600 : 2500)
    setTimer(setTimeout(() => {
      clearTimeout(timer)
      window.addEventListener('scroll', handleScroll)
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
      <div className="col-span-1 sm:col-span-2 sm:col-start-2 sticky z-40 sm:z-0">
        <ul className="timelineAxis sticky top-48 grid grid-cols-3 sm:block">
          {['2013', '2015', '2017', '2019', '2020', '2021'].map((year, index) => {
          return (
            <li className={`${activeIndex === index ? 'active' : ''}`} key={year} onClick={(index) => handleClick(index)}>
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
            <li className={`mt-8 ${activeIndex === card.activeIndex ? 'active' : ''}`} key={index}>
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