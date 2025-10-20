// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/index.html";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-datasets",
          title: "Datasets",
          description: "实验室公开的数据集",
          section: "Navigation",
          handler: () => {
            window.location.href = "/datasets/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Composition of Laboratory Personnel.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-digital-human-r-amp-d-platform-demonstration",
        
          title: "Digital Human R&amp;D Platform Demonstration",
        
        description: "This project demonstrates the Digital Human R&amp;D Platform",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/DigitalHuman/";
          
        },
      },{id: "post-an-eye-tracking-video-demonstration-project",
        
          title: "An Eye Tracking Video Demonstration Project",
        
        description: "This project demonstrates the experimental group eye tracking demo video",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/EyeTracking/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-一种多模态数据同步可视化系统发明",
          title: '一种多模态数据同步可视化系统发明！',
          description: "",
          section: "News",},{id: "news-软件学院在2021世界机器人大赛-bci脑控机器人大赛-技术赛中取得佳绩",
          title: '软件学院在2021世界机器人大赛—BCI脑控机器人大赛-技术赛中取得佳绩',
          description: "",
          section: "News",},{id: "news-校企合作树新风-徐韬副教授荣获首届华为昇腾众智星光奖",
          title: '校企合作树新风——徐韬副教授荣获首届华为昇腾众智星光奖',
          description: "",
          section: "News",},{id: "news-祝贺-软件学院徐韬副教授团队在中国国际-互联网-大学生创新创业大赛陕西赛区中斩获一金一银",
          title: '祝贺！软件学院徐韬副教授团队在中国国际“互联网+”大学生创新创业大赛陕西赛区中斩获一金一银',
          description: "",
          section: "News",},{id: "news-our-paper-titled-dagam-a-domain-adversarial-graph-attention-model-for-subject-independent-eeg-based-emotion-recognition-is-accepted-by-journal-of-neural-engineering-2023-20-jan-2023",
          title: 'Our paper, titled “DAGAM: a domain adversarial graph attention model for subject-independent EEG-based...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-ravengaze-a-dataset-for-gaze-estimation-leveraging-psychological-experiment-through-eye-tracker-is-accepted-by-2023-ieee-17th-international-conference-on-automatic-face-and-gesture-recognition-fg-2023-16-feb-2023",
          title: 'Our paper, titled “RavenGaze: A Dataset for Gaze Estimation Leveraging Psychological Experiment Through...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-confused-or-not-decoding-brain-activity-and-recognizing-confusion-in-reasoning-learning-using-eeg-is-accepted-by-journal-of-neural-engineering-2023-28-feb-2023",
          title: 'Our paper, titled “Confused or not: decoding brain activity and recognizing confusion in...',
          description: "",
          section: "News",},{id: "news-徐韬副教授受邀参加-2023-cann训练营第一季-做相关教学-march-15-2023",
          title: '徐韬副教授受邀参加【2023 · CANN训练营第一季】做相关教学！(March 15. 2023)',
          description: "",
          section: "News",},{id: "news-徐韬副教授受邀参加-华为伙伴暨开发者大会-2022-做主题演讲-june-15-2023",
          title: '徐韬副教授受邀参加“华为伙伴暨开发者大会 2022”做主题演讲(June 15. 2023)',
          description: "",
          section: "News",},{id: "news-祝贺-软件学院2020级王佳宝毕业论文-基于脑电信号的时空域图神经网络情绪识别研究-被评为2023年西北工业大学优秀硕士学位论文-september-4-2023",
          title: '祝贺！软件学院2020级王佳宝毕业论文《基于脑电信号的时空域图神经网络情绪识别研究》被评为2023年西北工业大学优秀硕士学位论文！(September 4. 2023)',
          description: "",
          section: "News",},{id: "news-徐韬老师作为校友在铁一中开学典礼发言-使命与选择-september-08-2023",
          title: '徐韬老师作为校友在铁一中开学典礼发言《使命与选择》(September 08. 2023)',
          description: "",
          section: "News",},{id: "news-ai陕耀-昇腾ai创新大赛2023-第二届-昇腾杯-秦创原人工智能开发者大赛决赛暨昇腾ai开发创享日圆满结束-软件学院徐韬副教授团队斩获双银-september-28-2023",
          title: 'AI陕耀 | 昇腾AI创新大赛2023—第二届“昇腾杯”秦创原人工智能开发者大赛决赛暨昇腾AI开发创享日圆满结束！——软件学院徐韬副教授团队斩获双银！(September 28. 2023)',
          description: "",
          section: "News",},{id: "news-软件学院合作开发的数字人亮相第四届中国-广西-东盟人工智能大会-september-29-2023",
          title: '软件学院合作开发的数字人亮相第四届中国(广西)—东盟人工智能大会(September 29. 2023)',
          description: "",
          section: "News",},{id: "news-软件学院徐韬副教授入选2023年度教育部-华为-智能基座-优秀教师奖励计划-december-07-2023",
          title: '软件学院徐韬副教授入选2023年度教育部-华为“智能基座”优秀教师奖励计划(December 07. 2023)',
          description: "",
          section: "News",},{id: "news-活动报名-智能心理访谈体验来了-december-14-2023",
          title: '【活动报名】智能心理访谈体验来了！(December 14. 2023)',
          description: "",
          section: "News",},{id: "news-西北工业大学-华为强强联合-智能基座-建设结硕果-jan-23-2024",
          title: '西北工业大学—华为强强联合“智能基座”建设结硕果(Jan 23. 2024)',
          description: "",
          section: "News",},{id: "news-aigc-发展实践与机遇主题论坛-jan-28-2024",
          title: 'AIGC 发展实践与机遇主题论坛(Jan 28. 2024)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_16/";
            },},{id: "news-实验室风采-实验室联谊陕师大一同前往终南山踏青-mar-16-2024",
          title: '【实验室风采】实验室联谊陕师大一同前往终南山踏青！(Mar 16. 2024)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_17/";
            },},{id: "news-24届毕业生全员取得优秀毕业生-mar-25-2024",
          title: '24届毕业生全员取得优秀毕业生！(Mar 25. 2024)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_18/";
            },},{id: "news-实验室刘源等人携-智慧医心-斩获华为ict大赛中国区总决赛特等奖-受到多方媒体报道-apr-1-2024",
          title: '实验室刘源等人携“智慧医心”斩获华为ICT大赛中国区总决赛特等奖！受到多方媒体报道！(Apr 1. 2024)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_19/";
            },},{id: "news-在神经科学知名期刊frontiers-in-neuroscience-sci-2区-上组织专刊investigating-learning-and-cognitive-states-using-multimodal-approaches欢迎大家踊跃投稿",
          title: '在神经科学知名期刊Frontiers in Neuroscience (SCI 2区)上组织专刊Investigating Learning and Cognitive States Using Multimodal Approaches欢迎大家踊跃投稿！',
          description: "",
          section: "News",},{id: "news-华为全联接大会2024-昇腾cann深度开放-使能ai原生创新技术论坛圆满落幕",
          title: '华为全联接大会2024 | 昇腾CANN深度开放，使能AI原生创新技术论坛圆满落幕',
          description: "",
          section: "News",},{id: "news-西工大软件学院徐韬团队成功向华为昇腾cann-ops算子仓库贡献了多个高性能算子-成为国内首个完成该仓库外部合入的科研团队-受到多方媒体报道-apr-21-2025",
          title: '西工大软件学院徐韬团队成功向华为昇腾CANN-Ops算子仓库贡献了多个高性能算子，成为国内首个完成该仓库外部合入的科研团队！受到多方媒体报道！(Apr 21. 2025)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_23/";
            },},{id: "news-西工大软件学院徐韬团队参与长春航空展-受到多方媒体报道-october-14-2025",
          title: '西工大软件学院徐韬团队参与长春航空展！受到多方媒体报道！(October 14. 2025)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_24/";
            },},{id: "news-实验室抑郁症初筛系统受到央视采访报道-october-20-2025",
          title: '实验室抑郁症初筛系统受到央视采访报道！(October 20. 2025)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_25/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-audio-confuse",
          title: 'Audio Confuse',
          description: "音频诱发的困惑情绪识别脑电数据集",
          section: "Projects",handler: () => {
              window.location.href = "/datasets/audio_confuse";
            },},{id: "projects-cal",
          title: 'CAL',
          description: "EEG database for Confusion Analysis in Learning",
          section: "Projects",handler: () => {
              window.location.href = "/datasets/cal";
            },},{id: "projects-ravengaze",
          title: 'RavenGaze',
          description: "Gaze Estimation Dataset Evoked by Raven Progressive Matrices (RPM) Test",
          section: "Projects",handler: () => {
              window.location.href = "/datasets/RavenGaze/index.html";
            },},{id: "projects-ruiweneeg",
          title: 'RuiwenEEG',
          description: "瑞文实验诱发的情绪识别脑电数据集",
          section: "Projects",handler: () => {
              window.location.href = "/datasets/ruiwen";
            },},{id: "projects-白玉琼",
          title: '白玉琼',
          description: "工行软开中心",
          section: "Projects",handler: () => {
              window.location.href = "/projects/baiyuqiong/";
            },},{id: "projects-曹志鹏",
          title: '曹志鹏',
          description: "华为",
          section: "Projects",handler: () => {
              window.location.href = "/projects/caozhipeng/";
            },},{id: "projects-陈骁",
          title: '陈骁',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chenxiao/";
            },},{id: "projects-党旺",
          title: '党旺',
          description: "华为",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dangwang/";
            },},{id: "projects-邓义兴",
          title: '邓义兴',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dengyixing/";
            },},{id: "projects-范瑞龙",
          title: '范瑞龙',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fanruilong/";
            },},{id: "projects-jia-guo",
          title: 'Jia Guo',
          description: "Associate Professor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/guojia/";
            },},{id: "projects-郭忠昌",
          title: '郭忠昌',
          description: "中兴通讯",
          section: "Projects",handler: () => {
              window.location.href = "/projects/guozhongchang/";
            },},{id: "projects-bing-li",
          title: 'Bing Li',
          description: "Associate Professor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/libing/";
            },},{id: "projects-李朝阳",
          title: '李朝阳',
          description: "中国空间技术研究院杭州中心",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lichaoyang/";
            },},{id: "projects-李瑞强",
          title: '李瑞强',
          description: "华为",
          section: "Projects",handler: () => {
              window.location.href = "/projects/liruiqiang/";
            },},{id: "projects-刘源",
          title: '刘源',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/liuyuan/";
            },},{id: "projects-慕海洋",
          title: '慕海洋',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/muhaiyang/";
            },},{id: "projects-覃一航",
          title: '覃一航',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qinyihang/";
            },},{id: "projects-苏萌",
          title: '苏萌',
          description: "西安热工研究院有限公司",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sumeng/";
            },},{id: "projects-王佳宝",
          title: '王佳宝',
          description: "北京机电工程研究所",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wangjiabao/";
            },},{id: "projects-王纪元",
          title: '王纪元',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wangjiyuan/";
            },},{id: "projects-王旭",
          title: '王旭',
          description: "中兴通讯",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wangxu/";
            },},{id: "projects-王璇",
          title: '王璇',
          description: "中国移动",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wangxuan/";
            },},{id: "projects-吴波",
          title: '吴波',
          description: "迈瑞医疗",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wubo/";
            },},{id: "projects-吴昭颖",
          title: '吴昭颖',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wuzhaoying/";
            },},{id: "projects-tao-xu",
          title: 'Tao Xu',
          description: "Associate Professor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/xutao/";
            },},{id: "projects-伊浩圆",
          title: '伊浩圆',
          description: "科大讯飞",
          section: "Projects",handler: () => {
              window.location.href = "/projects/yihaoyuan/";
            },},{id: "projects-尹欣玥",
          title: '尹欣玥',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/yinxinyue/";
            },},{id: "projects-张高天",
          title: '张高天',
          description: "华为",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhanggaotian/";
            },},{id: "projects-张江源",
          title: '张江源',
          description: "百度",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhangjiangyuan/";
            },},{id: "projects-张译",
          title: '张译',
          description: "美团",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhangyi/";
            },},{id: "projects-张芸萱",
          title: '张芸萱',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhangyunxuan/";
            },},{id: "projects-张志伟",
          title: '张志伟',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhangzhiwei/";
            },},{id: "projects-赵璇",
          title: '赵璇',
          description: "华为",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhaoxuan/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%75%74%61%6F@%6E%77%70%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/IntelligentInteractiveLab", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/37086491852/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bDXedd4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
