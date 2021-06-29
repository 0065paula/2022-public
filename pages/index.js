import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Media from '../components/media'
import Ref from '../components/reference'
import Quote from '../components/quote'
import JobModal from '../components/jobModal'
import Timeline from '../components/timeLine'

import jobContents from '../static/jobContent'

import { isMobile } from '../utils/index'

import React, { useState, useEffect } from 'react'

export default function Home() {
  const [mobile, setMobile] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalTargetKey, setModalTargetKey] = useState('distributedMemory')

  useEffect(() => {
    setMobile(!!isMobile())
  }, [])

  return (
    <div id="top" className="bg-gray-100 overflow-x-hidden">
      {/* Top Nav Starts */}
      <div className="fixed z-20 bg-gray-100 bg-opacity-60 w-screen backdrop-filter backdrop-blur-xl">
        <div className="max-w-screen-xl flex items-center justify-between px-4 py-2 sm:px-8 sm:py-7 mx-auto">
            {/* SmartX Logo */}
            <Link href="#top">
              <img
                src="/smartx-logo-horizontal.svg"
                alt="SmartX Logo"
                width={140}
                height={32}
                className="cursor-pointer"
              />            
            </Link>
            
            {/* Link to Moka */}
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <Link href="https://app.mokahr.com/campus_apply/smartx/4183">
                <a className="text-sm md:text-base font-medium leading-7 text-right text-gray-900 hover:text-blue-500" target="_blank">全部校园招聘职位 ↗</a>
              </Link>
              <Link href="https://app.mokahr.com/m/candidate/applications/deliver-query/smartx">
                <a className="text-sm md:text-base leading-7 text-right text-gray-500 hover:text-blue-500" target="_blank">查询招聘进展</a>
              </Link>  
              <Link href="#assist">
                <a className="scrollSmooth text-sm md:text-base leading-7 text-right text-gray-500 hover:text-blue-500 ">添加招聘小助手</a>
              </Link>              
            </div>                   
        </div>       
      </div>
      {/* Top Nav Ends */}

      {/* Hero Section Starts */}
      <section className="heroSection sm:h-screen pt-48 pb-16 sm:pb-0 px-4">
        {/* Heading Content Starts */}
        <div className="relative flex flex-col space-y-10 items-center justify-center py-6 md:py-10 lg:py-12 bg-white bg-opacity-90 rounded-3xl mx-auto w-full md:w-2/3 lg:w-2/5 max-w-xl min-w-max backdrop-filter backdrop-blur-sm">
          <div className="w-60 h-40">
              <img
                src="/hiring_logo.svg"
                alt="2021 SmartX 校园招聘"
                width={240}
                height={168}
              />
          </div>
          <div className="px-6 py-3">
              <p className="text-2xl sm:text-3xl font-semibold text-center text-gray-900">一起打造 IT 世界的基础设施</p>
          </div>
          {/* Preview Badge */}
          <div className="absolute hidden sm:block sm:-top-20 sm:-right-20 transform rotate-0 hover:-rotate-12 transition duration-50 ease-out">
            <img
              className="w-40 h-40"
              src="/pre_badge.png"
              alt="提前批"
            />
          </div>
        </div>
        {/* Heading Content Ends */}
      </section>
      {/* Hero Section Ends */}

      {/* Pre Section Starts */}
      <section className="py-14 w-full bg-gray-200">
        <div className="w-full sm:w-5/6 px-8 py-6 mx-auto rounded-2xl text-center">
          <p className="titleClipText titleClipTextPurpleYellow text-2xl sm:text-3xl font-semibold mb-2">提前批，等你抢占先机</p>
          <p className="text-small text-gray-500 mb-8">7 月 1 日 ~ 7 月 31 日</p>
          <ul className="flex flex-wrap sm:flex-nowrap mb-12 space-y-12 sm:space-y-0 sm:space-x-4">
            <li className="w-full sm:w-1/3 flex flex-col items-center">
              <img src="SSP.svg" width={72} />
              <h5 className="w-full mt-4 text-md sm:text-lg font-medium">获得 SSP offer 几率高</h5>
            </li>
            <li className="w-full sm:w-1/3 flex flex-col items-center">
              <img src="Chance.svg" width={72} />
              <h5 className="w-full mt-4 text-md sm:text-lg font-medium">不影响正式批的投递，获得多一次尝试机会</h5>
            </li>
            <li className="w-full sm:w-1/3 flex flex-col items-center">
              <img src="Speed.svg" width={72} />
              <h5 className="w-full mt-4 text-md sm:text-lg font-medium">一周内完成面试流程，流程快效率高</h5>
            </li>
          </ul>
          <Link href="https://app.mokahr.com/campus_apply/smartx/4183">
            <a className="block w-52 py-1 border-2 rounded-full border-blue-500 text-lg text-center text-blue-500 mx-auto hover:text-white hover:border-blue-500 hover:bg-blue-500" target="_blank">全部校园招聘职位 ↗</a>
          </Link> 
        </div>
      </section>
      {/* Pre Section Ends */}

      {/* Job Listing Section Starts */}
      <section className="py-14 w-full max-w-screen-xl mx-auto px-8">
        {/* Title Area Starts */}
        <div className="flex flex-col space-y-2 sm:space-y-6 items-center justify-start mx-auto mb-16">
          <h4 className="text-xl font-medium text-center text-gray-700 text-opacity-60">校招岗位</h4>
          <h2 className="titleClipTextGreenPurple titleClipText block text-3xl sm:text-5xl font-bold text-center space-y-2"><p>用真正有价值的工作</p><p>激发你的潜能</p></h2>
        </div>
        {/* Title Area Ends */}

        {/* Job Listing Content Starts */}

        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 ">
          {
            jobContents().map(job => {
              return (
                <div className={job.className} key={job.key} onClick={() => {
                  setShowModal(true)
                  setModalTargetKey(job.key)
                }}>
                  <h3>{job.title}</h3>
                </div>
              )
            })
          }
        </div>
        {showModal ? <JobModal targetKey={modalTargetKey} setShowModal={setShowModal} /> : null}
        {/* Job Listing Content Starts */}
      </section>
      {/* Job Listing Section Ends */}

      {/* About Section Starts */}
      <section className="py-14 w-full max-w-screen-xl mx-auto space-y-12 sm:space-y-24 px-8">
        {/* Title Area Starts */}
        <div className="flex flex-col space-y-2 sm:space-y-6 items-center justify-start mx-auto">
          <h4 className="text-xl font-medium text-center text-gray-700 text-opacity-60">了解 SmartX</h4>
          <h2 className="titleClipText titleClipTextOrangeBlue block text-3xl sm:text-5xl font-bold text-center space-y-2">为企业提供稳定、高性能、易用的 IT 基础架构</h2>
        </div>
        {/* Title Area Ends */}

        {/* Vision Starts */}
        <div className="visionCardWrapper w-full sm:w-2/3 mx-auto p-8 border-8">
          <p className="text-xl font-medium text-gray-700 text-opacity-60 mb-2">愿景</p>
          <p className="text-3xl font-bold text-gray-900 mb-8">让 IT 更简单。</p>
          <p className="text-2xl font-light text-gray-900">我们致力于创建可扩展且易于使用的计算和数据基础设施，提升企业 IT 能力，让企业集中精力在帮助商业运转的应用和创新上。</p>
        </div>
        {/* Vision Ends */}

        {/* About Page 1 Starts */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-12 sm:gap-4">
          <Timeline mobile={mobile}></Timeline>
        </div>
        {/* About Page 1 Content Ends */}
      {/* About Page 1 Ends */}


        {/* About Page  Starts */}
        <div className="">
          {/* Heading Starts */}
          <div className="space-y-4 sm:space-y-8 col-span-1 sm:col-span-8 sm:col-start-3">
            <h4 className="textClipGradientBlue text-2xl sm:text-4xl font-semibold text-center">服务 500+ 客户</h4>
            <div className="text-md sm:text-xl font-normal text-center text-gray-800 px-12">涉及国计民生方方面面，亦被多家海外客户信任。承载企业经营的关键 IT 业务系统。</div>
          </div>
          {/* Heading Ends */}
          {/* About Page 3 Content Starts */}
          <div className="mt-16 grid grid-cols-4 sm:col-span-10 sm:col-start-2 gap-2">
            <img className="col-span-1 mx-auto" src="Case_01.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_02.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_03.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_04.png" width={200} height={100} />

            <img className="col-span-1 mx-auto" src="Case_05.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_06.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_07.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_08.png" width={200} height={100} />

            <img className="col-span-1 mx-auto" src="Case_09.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_10.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_11.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_12.png" width={200} height={100} />

            <img className="col-span-1 mx-auto" src="Case_13.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_14.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_15.png" width={200} height={100} />
            <img className="col-span-1 mx-auto" src="Case_16.png" width={200} height={100} />
          </div>
          {/* About Page 3 Content Ends */}
        </div>
        {/* About Page 3 Ends */}
      </section>
      {/* About Section Ends */}

      {/* How Section Starts */}
      <section className="py-14 w-full max-w-screen-xl mx-auto space-y-16 px-8">
        {/* Title Area Starts */}
        <div className="flex flex-col space-y-2 sm:space-y-6 items-center justify-start mx-auto">
          <h4 className="text-xl font-medium text-center text-gray-700 text-opacity-60">在 SmartX，我们这样工作</h4>
          <h2 className="titleClipText titleClipTextGreenOrange block text-4xl sm:text-5xl font-bold text-center space-y-2"><p>在适合你的土壤</p><p>获得更快的成长</p></h2>
        </div>
        {/* Title Area Ends */}

        {/* How Content Starts */}

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 space-y-12">
          <div className="space-y-8 col-span-1 sm:col-span-6 sm:col-start-4">
            <p className="text-2xl sm:text-4xl font-semibold text-gray-900">深入细节，不向未知妥协</p>
            <p className="text-lg sm:text-xl text-gray-900">从原理和本质上去分析问题并解决。刨根问底，从表面问题挖决出背后的原因。做好执行的每个细节。</p>
            <div className="flex flex-col space-y-2">
              <p className="text-justify text-gray-900 text-opacity-60">阅读知乎专栏文章，了解我们如何在遇到问题时，进行抽丝剥茧的分析：</p>
              <Ref 
                link = "https://zhuanlan.zhihu.com/p/60188395"
                title = "LevelDB Compaction 引发的 Data Inconsistency"
                time = "预计阅读时间 5 分钟"
              />
              <Ref 
                link = "https://zhuanlan.zhihu.com/p/345592034"
                title = "由 OOM 引发的 ext4 文件系统卡死"
                time = "预计阅读时间 3 分钟"
              />
            </div>
        </div>
        <div className="space-y-8 sm:col-span-6 sm:col-start-4">
            <p className="text-2xl sm:text-4xl font-semibold text-gray-900">自主，自驱</p>
            <p className="text-lg sm:text-xl text-gray-900">不以工作时长来衡量成果，不以规章、流程、会议来约束创造力，而是以成长作为自身的最强驱动力。让每一个员工有足够的空间主动创造价值。</p>
        </div>
      </div>
        {/* Quotes */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-center text-blue-600">听听 SmartX 人怎么说</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <Quote 
            content1="对我来说，SmartX 是一家很特别的公司，这里的人有足够的实力和耐心，做许多很难的事情。选择深耕基础架构领域的创业公司很少，SmartX 难得可贵地在这一领域立足，做最有挑战性的工作。"
            content2="在这里工作了半年时间，我很喜欢这种不断学习，不断挑战，不断突破的工作方式，对个人的技术成长的帮助也非常大。"
            name="俞同学"
            title="后端开发工程师 · 2021 年秋招加入"
          />
          <Quote 
            content1="SmartX 能充分考虑个人意愿，让每个人做自己感兴趣的事情。在这里，我能够专注于自己非常喜欢的项目，开发非常有新意的产品。"
            content2="公司灵活自由的工作时间，让我不需要担心通勤打卡方面的问题；宽松的工作氛围，能让我保持较高的工作效率。"
            name="冯同学"
            title="前端开发实习生 · 2020 年加入"
          />
          <Quote 
            content1="一周时间就完成了从测评、面试、沟通到入职。公司的工作氛围非常好，能感受到大家是想认真地把东西做好，工作起来非常舒畅。"
            content2="入职一年多，从一个计算机小白开始，在工作中和公司的各类学习分享中学到了很多云计算和存储方面的知识，也开始不为自己设限，拓展更多有趣的领域。"
            name="穆同学"
            title="产品经理 · 2020 年加入"
          />
          <Quote 
            content1="SmartX 对新成员非常友好。新入职的第一个月，mentor 每天都会安排时间进行答疑；公司内部文档丰富，新人能够快速建立起对工作内容的认知。"
            content2="公司鼓励探究并不断突破自我。入职即可参与核心项目的研发。我们不以完成任务为终点，而是在此基础上追求极致的性能与最佳的用户体验，最终目标是实现产品提升和自身能力的飞跃。"
            name="张同学"
            title="后端开发工程师 · 2020 年秋招加入"
          />
        </div>
      </section>
      {/* How Section Ends */}

      {/* Why Section Starts */}
      <section className="py-14 w-full max-w-screen-xl mx-auto space-y-16 px-8">
        {/* Title Area Starts */}
        <div className="flex flex-col space-y-2 sm:space-y-6 items-center justify-start mx-auto">
          <h4 className="text-xl font-medium text-center text-gray-700 text-opacity-60">选择 SmartX 的理由</h4>
          <h2 className="titleClipText titleClipTextBlueGreen block text-3xl sm:text-5xl font-bold text-center space-y-2"><p>目标远大，脚踏实地</p><p>有挑战，有收获</p></h2>
        </div>
        {/* Title Area Ends */}

        {/* Why Content Starts */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <li className="space-y-4 sm:space-y-6 px-6 pt-5 pb-8 rounded-xl group hover:bg-blue-600 transition-all">
              <h4 className="text-2xl font-semibold text-blue-600 group-hover:text-white transition-all">专业成长</h4>
              <div className="text-lg text-gray-800 group-hover:text-white space-y-4">
                <p>Mentor 一对一指引，深入探索技术领域，一起了解最新技术进展，学习顶尖论文，在实践中不断成长。</p>
                <p>进入核心团队，直接参与到具有挑战性的核心项目中，拥有更大成长空间，深入了解底层技术产品，并且能够看到行业及公司发展全局。</p>
              </div>  
          </li>
          <li className="space-y-6 px-6 pt-5 pb-8 rounded-xl group hover:bg-purple-600 transition-all">
              <h4 className="text-2xl font-semibold text-purple-600 group-hover:text-white transition-all">工程师文化</h4>
              <div className="text-lg text-gray-800 group-hover:text-white space-y-4">
                <p>自我驱动，信息平等，追求高效和自动化，不害怕犯错，在一次次问题分析中变得更好。</p>
                <p>自由而灵活的工作氛围，为创新培育最适合的土壤。</p>
              </div>
          </li>
          <li className="space-y-6 px-6 pt-5 pb-8 rounded-xl group hover:bg-green-600 transition-all">
              <h4 className="text-2xl font-semibold text-green-600 group-hover:text-white transition-all">扁平管理</h4>
              <div className="text-lg text-gray-800 group-hover:text-white space-y-4">摒除大公司的冗杂人事，始终保持快速沟通的做事方式。弹性工作制，不打卡，以结果为导向，拒绝形式化的 996。</div>
          </li>
          <li className="space-y-6 px-6 pt-5 pb-8 rounded-xl group hover:bg-red-600 transition-all">
              <h4 className="text-2xl font-semibold text-red-600 group-hover:text-white transition-all">公司前景</h4>
              <div className="text-lg text-gray-800 group-hover:text-white space-y-4">
                <p>完全自主研发超融合及分布式存储产品，颠覆传统企业 IT 基础设施，定位千亿级企业云市场。</p>
                <p>专注做难的事，让我们有足够高的门槛，在竞争中保持独特优势。</p>
              </div>
          </li>
          <li className="space-y-6 px-6 pt-5 pb-8 rounded-xl group hover:bg-yellow-600 transition-all">
              <h4 className="text-2xl font-semibold text-yellow-600 group-hover:text-white transition-all">价值实现</h4>
              <div className="text-lg text-gray-800 group-hover:text-white space-y-4">
                <p>为客户提供优质的 IT 基础设施，让他们专注于自己的领域，创造更多经济与社会价值。</p>
                <p>在核心系统领域深耕，构建自主知识产权护城河，打造国际上最领先的基础设施产品。</p>
              </div>
          </li>
          <li className="space-y-6 px-6 pt-5 pb-8 rounded-xl group hover:bg-indigo-900 transition-all">
              <h4 className="text-2xl font-semibold text-indigo-900 group-hover:text-white transition-all">福利待遇</h4>
              <div className="text-lg text-gray-800 group-hover:text-white space-y-4">
                <p>极具市场竞争力待遇，表现优异者可获得期权激励。</p>
                <p>全额五险一金、餐补、商业医疗保险、12 天带薪年假、MacBook Pro 笔记本、团建基金、零食饮料…一切都为了给你带来实实在在的好处。</p>
              </div>
          </li>
        </ul>
         {/* Why Content Ends */}
      </section>
      {/* Why Section Ends */}
      
      {/* Join Section Starts */}
      <section className="w-screen bg-white">
        <div className="py-14 w-full max-w-screen-xl mx-auto space-y-16 px-8">
          {/* Title Area Starts */}
          <div className="flex flex-col space-y-2 sm:space-y-6 items-center justify-start mx-auto">
            <h2 className="titleClipText titleClipTextRedGreen block text-3xl sm:text-5xl font-bold text-center">加入 SmartX</h2>
          </div>
          {/* Title Area Ends */}

          {/* Join Content Starts */}
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-5 gap-8 text-center">
            <div className="flex flex-col items-center space-y-1">
              <img src="icon_submit.svg" width={56} height={56} />
              <div className="text-xl font-semibold text-gray-900">简历投递</div>
            </div>
            <img className="hidden sm:block" src="arrow.svg" />
            <img className="sm:hidden" src="arrow_vertical.svg" />
            <div className="flex flex-col items-center space-y-1">
              <img src="icon_interview.svg" width={56} height={56} />
              <div className="text-xl font-semibold text-gray-900">2~3 轮技术面试</div>
            </div>
            <img className="hidden sm:block" src="arrow.svg" />
            <img className="sm:hidden" src="arrow_vertical.svg" />
            <div className="flex flex-col items-center space-y-1">
              <img src="icon_offer.svg" width={56} height={56} />
              <div className="text-xl font-semibold text-gray-900">收获 Offer</div>
            </div>
            <div className="sm:col-span-5">
              <Link href="https://app.mokahr.com/campus_apply/smartx/4183">
                <a className="block text-base text-center text-white px-8 py-2 bg-blue-600 rounded-full hover:bg-blue-500" target="_blank">立即投递简历 ↗</a>
              </Link>
              <div className="text-sm text-center text-gray-700 text-opacity-60 mt-2">
                已经投递？
                <Link href="https://app.mokahr.com/m/candidate/applications/deliver-query/smartx"><a className="hover:text-blue-600" target="_blank">查看状态</a></Link>
              </div>
            </div>
          </div>
          {/* Join Content Ends */}
        </div>
      </section>
      {/* Join Section Ends */}

      {/* Contact Section Starts */}
      <section className="py-14 w-full max-w-screen-xl mx-auto space-y-16 px-8">
        {/* Title Area Starts */}
        <div className="space-y-2 sm:space-y-6 mx-auto">
          <h3 id="assist" className="text-3xl font-semibold text-center text-gray-700 text-opacity-60">联系我们</h3>
        </div>
        {/* Contact Content Starts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center col-span-1 space-y-6 px-6 py-12 bg-blue-600 rounded-2xl ">
            <h5 className="w-full text-white text-xl font-bold">关于校园招聘还有问题？</h5>
            <p className="w-full text-white">添加 SmartX 招聘小助手企业微信，大胆问出你想知道的一切。</p>
            <img className="w-32 h-32" src="qrcode_hr.png"/>
          </div>
          <div className="sm:col-span-2 space-y-6 px-6 py-12 bg-gray-300 rounded-2xl text-gray-900">
            <h5 className="w-full text-xl font-bold mb-6">了解更多</h5>
            <p>访问 <Link href="www.smartx.com"><a className="hover:text-blue-600">www.smartx.com</a></Link>，了解产品与公司。 </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 gap-4">
              <h5 className="sm:col-span-2 text-xl font-bold">关注技术团队</h5>
              <div className="flex items-center space-x-2">
                <img src="qrcode_tech.png" className="w-24"></img>
                <p className="text-xs">扫码关注 SmartX 技术团队公众号</p>
              </div>
              <div className="flex flex-col space-y-4">
                <Link href="https://www.zhihu.com/column/c_130773972">
                  <a className="flex items-center space-x-2" target="_blank">
                    <img src="zhihu.png" className="w-10"></img>
                    <p className="text-xs">SmartX 技术博客 @知乎</p>
                  </a>
                </Link>
                <Link href="https://space.bilibili.com/531472943">
                  <a className="flex items-center space-x-2" target="_blank">
                    <img src="B.png" className="w-10"></img>
                    <p className="text-xs">SmartX 技术团队 @Bilibili</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Ends */}

      {/* Footer Section Starts */}
      <footer className="flex items-start justify-between p-8 leading-normal w-full max-w-screen-xl mx-auto text-small border-gray-300 border-t">
        <div className="text-gray-900 text-opacity-30">© 2021 SmartX, Inc. All rights reserved.</div>
        <Link href="www.smartx.com"><a className="text-gray-700 text-opacity-60 hover:text-blue-600">smartx.com</a></Link>
      </footer>
      {/* Footer Section Ends */}
    </div>
  )
}
