export default function jobContents() {
  return [
    // 分布式存储
    {
      className: 'jobCard sm:col-span-2 md:col-span-4',
      key: 'distributedMemory',
      title: '分布式存储',
      describe: [
        '存储系统的价值取决于它所存储的数据的价值。SmartX 提供高性能，高可靠，以及灵活扩展的分布式块存储，承载银行，证券，保险，制造，医疗等领域的最核心的业务系统，赋能客户从容应对复杂多变的业务场景和快速增长的存储需求。',
        '作为 SmartX 的分布式存储方向的软件工程师，你将接触到最前沿的分布式存储技术以及硬件设备，维护并优化现有系统。同时你将参与设计开发下一代更先进的软件架构。你所编写的软件将运行在数千台服务器，承载数十 PB 核心数据的存储需求。通过技术的手段，提高世界企业 IT 能力，让 IT 更简单！'
      ],
      article: [
        {
          preTitle: '阅读知乎专栏文章，了解我们在高性能分布式存储领域进行的探索：',
          title: 'RDMA 在数据中心的可靠传输',
          time: '预计阅读时间 11 分钟',
          link: 'https://zhuanlan.zhihu.com/p/257228128'
        }
      ],
      jobList: [
        {
          title: '软件工程师 - 分布式存储 ',
          base: '北京/深圳/上海',
          link: 'https://app.mokahr.com/campus_apply/smartx/4183#/job/cc10a2d8-2e9f-4da0-8440-8c2301ed64a7',
          responsibility: {
            title: '负责分布式存储系统核心功能的开发和维护：',
            list: [
              '存储引擎：融合各种存储介质，提供高速稳定的文件系统级别的本地存储服务；',
              '分布式数据管理：通过数据生命周期管理，分布式链路协议，弹性负载伸缩等等功能将单点的存储引擎转化为高可靠高可用的集群服务；',
              '链路协议：通过 vHost,  NVMeoF，RDMA 等多种协议高速灵活连接不同资源；',
              '内核与虚拟化：与社区一起维护与演进 Libvirt，QEMU，Kernel ，OVS 等等构建一个稳定系统所必须的基石模块；',
              '正确性验证与状态透视：在理解与掌握系统细节的基础上使用多种不同的方式来验证存储系统的正确性，稳定性与性能变化。开发多种工具监控与呈现存储系统的运行细节。',
            ]
          },
          request: {
            title: '',
            list: [
              '热爱编程，有良好的编程习惯，注重代码风格；',
              '熟悉和理解常用的数据结构和算法；',
              '熟悉 Linux 环境下的程序开发，熟悉操作系统基本原理；',
              '有良好的学习能力和沟通能力。'
            ]
          },
          extra: {
            title: '',
            list: [
              '完成过 MIT 6.824，MIT 6.828 等相关课程；',
              '在各种编程竞赛中获得奖项，包括 ACM 等；',
              '有 HDFS、Ceph、GlusterFS、Sheepdog 或其他分布式系统的学习与开发经验。'
            ]
          }
        }
      ]
    },
    // 虚拟化
    {
      className: 'jobCard sm:col-span-2 md:col-span-2',
      key: 'virtualization',
      title: '虚拟化平台',
      describe: [
        '虚拟化可以为企业大幅减少 IT 基础架构支出，加速应用和资源的调配速度，降低运维成本。SmartX 虚拟化平台基于业内最简单高效的超融合架构，承载着银行、证券、保险、制造、医疗等领域的最核心业务系统。',
        '作为 SmartX 虚拟化平台研发工程师，我们关注细节，热衷探索最新的技术，挑战最难的问题，追求极致的性能。在这里你将有机会与众多最优秀的工程师一起打造业界领先的虚拟化计算平台，共同为客户提供更敏捷、更稳定、更高性能的产品，为客户业务保驾护航。'
      ],
      article: [
        {
          preTitle: '阅读知乎专栏文章，了解我们在虚拟化领域一次故障探索中收获的经验：',
          title: 'QEMU 热迁移导致的 Windows 虚拟机 BSoD',
          time: '预计阅读时间 4 分钟',
          link: 'https://zhuanlan.zhihu.com/p/366869641'
        }
      ],
      jobList: [
        {
          title: '软件工程师 - 虚拟化研发工程师',
          base: '成都/北京/深圳',
          link: 'https://app.mokahr.com/campus_apply/smartx/4183#/job/1f71918a-e06f-4bfc-9cd4-8d282e1e1ff3',
          responsibility: {
            title: '',
            list: [
              '在基于 libvirt/Qemu/KVM 等虚拟化技术的统一管理平台上设计和开发新功能、优化已有组件；',
              '撰写细致的设计文档，设计和实现健壮、清晰的 RESTful API ；',
              '与测试、产品、售前和售后部门密切配合，不断提升产品质量和竞争力。'
            ]
          },
          request: {
            title: '',
            list: [
              '热爱编程，具有以下任一种语言的扎实的编程经验：Python、Golang；',
              '具有 Web 后台开发经验，至少熟练使用一款 Linux（RedHat/CentOS/Ubuntu等）操作系统；',
              '具有基于以下至少一种数据库使用开发的经验，包括 MySQL、MongoDB、Redis、Cassandra、ElasticSearch、ZooKeeper 等；',
              '能撰写细致的设计文档，包含清晰的接口定义，正确有效地拆分任务；',
              '代码风格干净简洁、单元测试设计完备。'
            ]
          },
          extra: {
            title: '',
            list: [
              '有基于 KVM/Qemu/Libvirt/Openstack/Kubernetes 等项目使用和开发经验。'
            ]
          }
        }
      ]
    },
    // 软件定义网络
    {
      className: 'jobCard sm:col-span-2 md:col-span-2',
      key: 'SDN',
      title: '软件定义网络',
      describe: [
        '在云原生时代，软件定义网络将变得极为重要，它不但连接起云原生和传统应用，是应用交付的基础，也是数据中心安全防护的根基。在 SmartX 你将有机会与最优秀的分布式系统工程师一起工作，为下一代基础设施构建易用、稳定、高性能且高可用的网络和安全产品，让软件定义网络真正普及到未来的基础设施中。'
      ],
      article: [],
      jobList: [
        {
          title: '软件工程师 - 软件定义网络',
          base: '北京',
          link: 'https://app.mokahr.com/campus_apply/smartx/4183#/job/81c6b299-517d-426c-87c1-b5fe3dccfc36',
          responsibility: {
            title: '',
            list: [
              '参与设计开发同时支持 K8s 及 KVM 虚拟化平台的 SDN 网络，包括但不限于 L2、L3 网络功能，分布式防火墙，微分段，Service Chain，VPC 等功能；',
              '设计并实现健壮、清晰的 RESTful API；',
              '与测试、产品、售前和售后同事密切配合，不断提升产品质量和竞争力。'
            ]
          },
          request: {
            title: '',
            list: [
              '熟悉网络知识：交换机、路由器、防火墙、VPC、流量监控；',
              '热爱编程，有良好的编程习惯，注重代码风格，具有以下任一种语言的扎实的编程经验：Golang、C；',
              '熟悉和理解常用的数据结构和算法；',
              '有良好的学习能力和沟通能力。'
            ]
          },
          extra: {
            title: '',
            list: [
              '有过 K8s 或 SDN 开发经验优先。'
            ]
          }
        }
      ]
    },
    // 分布式管理平台
    {
      className: 'jobCard sm:col-span-2 md:col-span-2',
      key: 'SRE',
      title: '分布式管理平台',
      describe: [
        '稳定可靠、简单易用是 SmartX 分布式系统软件产品的核心基础。',
        '通过提供分布式系统全方面的软硬件监控报警、健康巡检、服务 HA 机制等功能，极大的提高系统的稳定性，确保用户业务的高可用。',
        '通过提供自动化的安装、部署、升级、节点生命周期管理等功能，极大地降低软件学习和管理成本，避免不必要的误操作，提高系统的易用性。 ',
        '作为 SmartX 的分布式系统管理平台的软件工程师，你将接触到最前沿的分布式系统相关技术：包含分布式存储系统、监控报警系统、Service Mesh、K8s、虚拟化产品（KVM / ESXi / XenServer）等。 在熟悉公司软件产品架构和原理基础之上，维护并优化现有的管理平台，同时设计并开发新的管理或运维自动化功能，最终达到用户端 zero-touch 目标。'
      ],
      article: [],
      jobList: [
        {
          title: '软件工程师 - 分布式系统管理平台',
          base: '北京/深圳/上海',
          link: 'https://app.mokahr.com/campus_apply/smartx/4183#/job/73f00829-ad96-412d-9ed5-24cc1cfa6ed8',
          responsibility: {
            title: '',
            list: [
              '参与设计并实现分布式系统软件管理，包含集群的安装、部署、软件在线升级、集群状态监控、节点的生命周期管理、日志监控分析等；',
              '参与设计并实现分布式系统硬件管理，包含硬件的在线更换、硬件拓扑可视化、新型硬件支持等；',
              '实现集群的健康状态监控： 包含各项监控指标采集、监控状态巡检工具等；',
              '撰写细致的设计文档，设计和实现健壮、清晰的 RESTful API ；',
              '与测试、产品、售前和售后部门密切配合，不断提升产品质量和竞争力。'
            ]
          },
          request: {
            title: '',
            list: [
              '热爱编程，具有以下任意一种语言的扎实的编程经验：C/C++、Python、Golang、Java；',
              '熟悉使用 Linux 操作系统（CentOS/RedHat/Ubuntu 其一），有 Shell 编程经验；',
              '了解数据库的基本原理，熟悉数据库交互编程；',
              '代码风格干净简洁、单元测试设计完备。'
            ]
          },
          extra: {}
        }
      ]
    },
    // 云原生
    {
      className: 'jobCard sm:col-span-2 md:col-span-2',
      key: 'cloudNative',
      title: '云原生',
      describe: [
        '我们相信云原生将是基础设施新的事实标准，云原生技术帮助构建容错性好、易于管理和便于观察的松耦合系统，能有效提高软件开发、测试、部署、运维等各个环节的效率。',
        '但与此同时，云原生和 Kubernetes 在生产环境中加以应用仍有不少问题需要解决。作为 SmartX 的云原生研发工程师，你将和其他小伙伴一起，结合 SmartX 在分布式存储、虚拟化和大规模集群管理上的丰富积累，打造新一代的云原生基础设施，从基础设施层面解决传统应用云原生化的难题。'
      ],
      article: [],
      jobList: [
        {
          title: '软件工程师 - 云原生',
          base: '北京/深圳/上海',
          link: 'https://app.mokahr.com/campus_apply/smartx/4183#/job/8c8d5a8e-ce56-491f-b6ff-4baa7458dd07',
          responsibility: {
            title: '',
            list: [
              '负责研发云原生基础设施，包含 Kubernetes 多集群管理、应用商店、云原生网络及存储组件 Operator 开发。'
            ]
          },
          request: {
            title: '',
            list: [
              '优秀的逻辑思维能力、沟通表达能力和团队协作能力；',
              '热爱编程，注重代码风格，熟悉 Linux 环境，熟练使用 Golang；',
              '了解 Docker/Kubernetes 的使用和技术原理。'
            ]
          },
          extra: {
            title: '',
            list: [
              '有 Kubernetes 开发经验优先。'
            ]
          }
        }
      ]
    },
    // 测试
    {
      className: 'jobCard sm:col-span-2 md:col-span-2',
      key: 'measurement',
      title: '测试',
      describe: [
        '简单易用，稳定可靠，是 SmartX 软件产品的核心基础。打造高质量产品的过程，就是不断“破坏”，不断完善的过程。',
        '作为 SmartX 的软件测试工程师，你将不仅仅是一个测试执行者，而是将和开发工程师一起合作，参与到复杂的分布式系统的设计环节，并在软件质量方面提供有效和深入的见解。通过最先进的技术手段，不断提高测试执行效率和测试代码覆盖率，你将成为软件质量最有力的保障者。'
      ],
      article: [],
      jobList: [
        {
          title: '软件工程师 - 功能测试',
          base: '北京',
          link: 'https://app.mokahr.com/campus_apply/smartx/4183#/job/33e4f2e2-f698-46ef-a2e4-a5678e28f24c',
          responsibility: {
            title: '',
            list: [
              '按照已有测试用例执行、bug 汇报和追踪；',
              '参与小型功能整个生命周期：需求讨论分析、研发技术方案评审、功能测试用例设计、测试执行； 与研发人员深度合作，一同确保产品迭代质量；',
              '学习使用公司已有的自动化测试框架，将产品功能测试用例自动化实现，不断提高测试自动化比例。'
            ]
          },
          request: {
            title: '',
            list: [
              'CS 或相关专业背景，拥有基本 CS 相关知识：计算机系统结构、网络原理等；',
              '至少熟练使用一款 Linux（redhat/centos/ubuntu等）操作系统；',
              '认真负责，具有良好的沟通能力、文档编写能力和执行力，追求极致的软件质量。'
            ]
          },
          extra: {
            title: '',
            list: [
              '拥有软件后台测试经验： 涉及 API 测试、性能测试或故障测试；',
              '了解虚拟化相关项目的基本知识，包括 Openstack、VMware、XenServer、Kubernetes 等。'
            ]
          }
        },
        {
          title: '软件工程师 - 测试开发',
          base: '北京',
          link: 'https://app.mokahr.com/campus_apply/smartx/4183#/job/c3238a60-6387-47ca-a069-2ce28620eca8',
          responsibility: {
            title: '',
            list: [
              '负责公司内部自动化测试平台的迭代和新功能开发，提高研发和测试人员使用便利性和测试效率；',
              '负责公司产品系统集成测试的自动化，包含：功能测试自动化、故障模拟测试、高可用测试、压力测试、规格测试、长期测试等；',
              '与开发团队深度合作，推动提高开发团队代码测试覆盖率、故障定位速度、测试环境搭建速度、 CI/CD 执行效率等。'
            ]
          },
          request: {
            title: '',
            list: [
              'CS 或相关专业背景，拥有基本 CS 相关知识：计算机系统结构、网络原理、常用数据结构等，至少熟练使用一款 Linux（redhat/centos/ubuntu等）操作系统；',
              '热爱编程，具有以下任一种语言的扎实的编程经验：Python、Golang；',
              '代码风格干净简洁，具有极高的编码质量标准。'
            ]
          },
          extra: {
            title: '',
            list: [
              '具有分布式系统的测试开发经验；',
              '了解虚拟化相关项目的基本知识，包括 Openstack、VMware、XenServer、Kubernetes 等。'
            ]
          }
        }
      ]
    },
    // 前端
    {
      className: 'jobCard sm:col-span-2 md:col-span-2',
      key: 'fe',
      title: '前端',
      describe: [
        '作为管理产品和内部效率工具工程师，你将在用户体验和开发效率上追求极致，并且紧跟技术的发展潮流，为 SmartX 强大的技术芯披上华丽的外衣。',
      ],
      article: [
        {
          preTitle: '访问 Github，了解 SmartX 工程师的业务项目 rrweb：',
          title: 'rrweb - record and replay the web',
          time: '9.6k Stars',
          link: 'https://github.com/rrweb-io/rrweb'
        },
        {
          preTitle: '阅读知乎专栏文章，了解 rrweb 背后的故事：',
          title: 'rrweb：打开 web 页面录制与回放的黑盒子',
          time: '预计阅读时间 7 分钟',
          link: 'https://zhuanlan.zhihu.com/p/60639266'
        }
      ],
      jobList: [
        {
          title: '软件工程师 - Web 前端工程师',
          base: '北京/深圳/上海',
          link: 'https://app.mokahr.com/campus_apply/smartx/4183#/job/27d99a7a-0aea-43bb-82e0-6bf65ecdbafb',
          responsibility: {
            title: '',
            list: [
              '参与开发 Web 控制台的前端页面、业务逻辑及后端 Web API；',
              '参与开发内部系统、开发者工具，提升内部工作效率；',
              '与团队一起探索管理产品的最佳实践。'
            ]
          },
          request: {
            title: '',
            list: [
              '熟练使用 JavaScript，具有良好的编程思维；',
              '热爱编程，对新技术敏感，有足够的好奇心，敢于自我挑战。'
            ]
          },
          extra: {
            title: '',
            list: [
              '开源社区的活跃者，参与知名开源项目或有自己长期维护的开源项目；',
              '具有良好的视觉审美，对用户体验有自己的见解。'
            ]
          }
        }
      ]
    },
    // 产品
    {
      className: 'jobCard sm:col-span-2 md:col-span-1',
      key: 'product',
      title: '产品',
      describe: [
        '如果把 SmartX 的产品看成是一部电影，产品经理就是电影的导演。',
        '作为一个为用户着迷的公司，产品经理通过不断深入理解用户场景，并将自己对技术和行业的理解赋予产品的每个细节之中，确保产品在用户端取得成功。产品经理的工作为公司指明方向，并创造改变业界生态的产品。',
      ],
      article: [],
      jobList: [
        {
          title: '云计算产品经理',
          base: '北京',
          link: 'https://app.mokahr.com/campus_apply/smartx/4183#/job/5d108e83-b2bd-4c0e-a446-425f0d809395',
          responsibility: {
            title: '',
            list: [
              '深入调研和分析国内外云计算领域的优秀产品，准确跟进行业应用及技术动态，根据公司战略制定清晰的产品演进计划和迭代思路；',
              '通过高频度的客户沟通和拜访，并与一线业务团队紧密协作，充分理解客户业务场景并准确梳理客户需求；',
              '负责产品需求分析、功能设计、业务流程设计、产品原型设计等，通过高质量的产品需求说明书有效推动产品开发和落地；',
              '高效连通销售和研发团队，促进组织内信息共享，通过交付高质量的产品为销售赋能。'
            ]
          },
          request: {
            title: '',
            list: [
              '全日制统招本科及以上学历，计算机、软件工程等相关专业；',
              '优秀的技术理解力，对云计算领域的分布式存储、虚拟化、Kubernetes、 网络等技术拥有浓厚的兴趣和持续学习的动力；',
              '优秀的沟通表达能力、学习能力、文档能力及技术理解力；',
              '良好的产品意识，擅长从用户角度考虑问题，对用户需求有较好的分析和拆解能力。'
            ]
          },
          extra: {}
        }
      ]
    },
    // 设计
    {
      className: 'jobCard sm:col-span-2 md:col-span-1',
      key: 'design',
      title: '设计',
      describe: [
        '企业级应用、高科技产品的产品设计是一个高速发展的专业领域，区别于消费级互联网产品已经高度固化的设计模式，这里有广袤的探索空间，可以充分发挥设计思维和创意。',
        '在 SmartX，我们的设计工作充满挑战，为复杂的科技产品定义友好、易用、富有情感的使用体验，用设计的力量化繁为简，创造美和价值。',
      ],
      article: [],
      jobList: [
        {
          title: '产品设计师',
          base: '北京/上海',
          link: 'https://app.mokahr.com/campus_apply/smartx/4183#/job/76d52be2-21e9-462b-b892-9f999dcd2cbe',
          responsibility: {
            title: '',
            list: [
              '理解数据中心管理软件产品需求和用户场景，进行产品设计；',
              '配合产品经理和工程师，梳理用户流程，传达设计方案；',
              '进行用户调研，根据反馈不断优化产品体验；',
              '沉淀设计模式和方法论，提高设计效率。'
            ]
          },
          request: {
            title: '',
            list: [
              '熟悉 Figma 或 Sketch，掌握交互原则、设计方法，具有良好的视觉审美和一定视觉设计能力；',
              '热爱科技产品，对技术类、数据可视化类产品有深厚的兴趣和一定了解；',
              '申请时需提供作品集。'
            ]
          },
          extra: {
            title: '',
            list: [
              '对前端开发技术有了解，掌握一定 CSS，JavaScript 或其他代码能力。'
            ]
          }
        }
      ]
    },
  ]
}
