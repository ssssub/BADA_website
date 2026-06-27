const whale = `
  <img class="whale-watermark" src="/assets/고래꼬리 (1).png" alt="">`;

const brand = `
  <img class="brand-mark" src="/assets/고래꼬리 (1).png" alt="">`;

const navGroups = [
  {
    label: "About",
    href: "/About1",
    links: [["Who", "/About1#who"], ["Vision", "/About1#vision"]]
  },
  {
    label: "Activities",
    href: "/Activities",
    links: [
      ["Curriculum", "/Activities#curriculum"],
      ["Corporate Project", "/Activities#corporate-project"],
      ["Extracurricular Activities", "/Activities#extracurricular"]
    ]
  },
  {
    label: "Join",
    href: "/Join",
    links: [["Apply", "/Join#apply"], ["FAQ", "/Join#faq"]]
  },
  {
    label: "Lounge",
    href: "/Lounge",
    links: [["Member", "/Lounge#member"], ["공지사항", "/Lounge#notice"], ["채용공고", "/Lounge#recruit"]]
  }
];

const headerTemplate = () => `
  <header class="site-header" id="top">
    <div class="nav-shell">
      <a class="brand" href="/" aria-label="BADA 홈">${brand}<span>BADA</span></a>
      <nav class="desktop-nav desktop-nav-groups" aria-label="주요 메뉴">
        ${navGroups.map((group) => `
          <div class="nav-group">
            <a href="${group.href}">${group.label}</a>
            <div class="nav-dropdown">
              ${group.links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
            </div>
          </div>`).join("")}
      </nav>
      <a class="nav-cta" href="/Apply">함께하기 <span aria-hidden="true">↗</span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span class="sr-only">메뉴 열기</span>
      </button>
    </div>
    <nav class="mobile-menu" id="mobile-menu" aria-label="모바일 메뉴">
      ${navGroups.map((group) => `
        <div class="mobile-menu-group">
          <a class="mobile-menu-parent" href="${group.href}">${group.label}</a>
          ${group.links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
        </div>`).join("")}
    </nav>
  </header>`;

const footerTemplate = () => `
  <footer class="site-footer">
    <div class="container footer-top">
      <a class="brand brand-footer" href="/" aria-label="BADA 홈">${brand}<span>BADA</span></a>
      <div class="footer-links">
        ${navGroups.flatMap((group) => group.links).map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </div>
    <div class="container footer-bottom">
      <p>Copyright©2026 All rights reserved</p>
      <p>Image provided by Korea University Communications Team</p>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>`;

const pageHero = (eyebrow, title, description = "") => `
  <section class="subpage-hero">
    <div class="subpage-whale">${whale}</div>
    <div class="container subpage-hero-content">
      <span class="hero-kicker"><span class="status-dot"></span>${eyebrow}</span>
      <h1>${title}</h1>
      ${description ? `<p>${description}</p>` : ""}
    </div>
  </section>`;

const sectionNavigator = (label, items) => `
  <nav class="section-navigator" aria-label="${label} 소메뉴">
    <div class="container section-navigator-inner">
      <span class="section-navigator-label">${label}</span>
      <div class="section-navigator-links">
        ${items.map(([title, id]) => `<a href="#${id}" data-section-link="${id}">${title}</a>`).join("")}
      </div>
      <a class="section-top-button" href="#top" aria-label="페이지 맨 위로 이동">↑</a>
    </div>
  </nav>`;

const closingCta = () => `
  <section class="section subpage-cta">
    <div class="container">
      <div class="join-panel reveal">
        <div class="join-whale">${whale}</div>
        <div class="join-copy">
          <span class="eyebrow eyebrow-light">Join BADA</span>
          <h2>데이터로 비즈니스를 읽고 싶다면,<br>BADA가 그 시작입니다.</h2>
        </div>
        <div class="join-actions">
          <a class="button button-white" href="/Apply">함께하기 <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
  </section>`;

const homePage = () => `
  <main id="main">
    <section class="hero">
      <div class="hero-glow hero-glow-one"></div>
      <div class="hero-glow hero-glow-two"></div>
      <div class="hero-whale">${whale}</div>
      <div class="container hero-content">
        <div class="hero-kicker"><span class="status-dot"></span>고려대학교 비즈니스 애널리틱스학회 바다</div>
        <h1><span class="hero-title-line hero-title-main">Beyond Analytics,</span><span class="hero-title-line">Develop Answers.</span></h1>
        <p class="hero-copy">고려대학교 비즈니스애널리틱스 학회, BADA</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/Who">Learn more</a>
          <a class="button button-ghost" href="/Apply">함께하기 <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-meta">
          <div><strong>Business</strong><span>Business Insight 도출</span></div>
          <div><strong>Analytics</strong><span>데이터 기반 판단</span></div>
          <div><strong>Answers</strong><span>전략적 시각</span></div>
        </div>
      </div>
    </section>

    <section class="section intro-section">
      <div class="container">
        <div class="section-heading section-heading-wide reveal">
          <div>
            <span class="eyebrow">About BADA</span>
            <h2>Business Analytics는 데이터를 활용하여 기업이 직면한 Business Problem을 전략적으로 해결하는 프로세스를 말합니다.</h2>
          </div>
          <a class="section-link" href="/Who">About Us <span>↗</span></a>
        </div>
        <div class="value-grid">
          ${valueCard("01", "Analytical Foundation", "데이터 기반 문제 해결을 위한 분석적 사고 역량을 기릅니다.", "chart")}
          ${valueCard("02", "Practical Skillset", "실제 비즈니스 분석을 통해 실무 적용 능력을 강화합니다.", "arrow")}
          ${valueCard("03", "Collaborative Network", "학회원 간 교류를 통해 지속 가능한 네트워크를 형성합니다.", "people")}
        </div>
      </div>
    </section>

    <section class="section home-paths">
      <div class="container">
        <div class="section-heading reveal">
          <div><span class="eyebrow">Explore BADA</span><h2>각 페이지에서<br>더 자세히 확인하세요.</h2></div>
          <p>BADA의 소개, 교육 과정, 프로젝트와 지원 정보는 각각의 세부 페이지에 구성되어 있습니다.</p>
        </div>
        <div class="path-grid">
          ${pathCard("/About1#who", "01", "About", "학회 소개와 핵심 가치")}
          ${pathCard("/Activities#curriculum", "02", "Curriculum", "정규 세션과 교육 과정")}
          ${pathCard("/Activities#corporate-project", "03", "Corporate Project", "기업 데이터 기반 협업")}
          ${pathCard("/Activities#extracurricular", "04", "Activities", "BADAthon, 시니어 케이스, 스터디")}
          ${pathCard("/Join#apply", "05", "Apply", "지원 안내")}
          ${pathCard("/Lounge", "06", "Lounge", "회원, 공지사항, 채용공고")}
        </div>
      </div>
    </section>
    ${closingCta()}
  </main>`;

function valueCard(number, title, text, icon) {
  const icons = {
    chart: `<path d="M4 19V9m6 10V5m6 14v-7m4 7H2"/>`,
    arrow: `<path d="m4 16 5-5 4 4 7-8M15 7h5v5"/>`,
    people: `<circle cx="8" cy="8" r="3"/><circle cx="17" cy="7" r="2"/><path d="M2 20c0-4 2-6 6-6s6 2 6 6m0-6c4 0 7 2 7 6"/>`
  };
  return `
    <article class="value-card reveal">
      <span class="card-number">${number}</span>
      <div class="value-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${icons[icon]}</svg></div>
      <h3>${title}</h3><p>${text}</p>
    </article>`;
}

function pathCard(href, number, title, text) {
  return `
    <a class="path-card reveal" href="${href}">
      <span>${number}</span><div><h3>${title}</h3><p>${text}</p></div><i>↗</i>
    </a>`;
}

const whoSection = () => `
  <section class="section subpage-section mega-section" id="who" data-section="who">
    <div class="container story-grid">
        <div class="story-visual reveal">
          <img src="/assets/about-community.jpg" alt="고려대학교 본관 전경">
          <div class="image-badge">${brand}<span>고려대학교</span></div>
        </div>
        <div class="story-copy reveal">
          <span class="eyebrow">Who we are</span>
          <h2>BADA는 데이터와 분석을 통해 스스로를 성장시키며, 현실의 비즈니스 문제에 답하는 인재로 나아가고 있습니다.</h2>
          <p>저희 BADA는 특정 전공이나 직무에 국한되지 않고, 데이터와 분석을 통해 다양한 비즈니스 문제를 해결할 수 있는 인재를 양성하는 학회입니다. 이를 위해 단순한 도구 활용이 아닌, 분석적 사고와 문제 정의 능력을 기르는 데 중점을 두고 있습니다.</p>
          <p>이러한 역량에는 논리적 사고, 데이터 기반 판단, 그리고 전략적 시각이 포함되며, BADA 회원들은 세션·스터디·프로젝트를 통해 실제 비즈니스 분석 경험을 쌓으며 이러한 역량을 체계적으로 발전시키고 있습니다.</p>
          <div class="president-message">
            <span>President's Message</span><p>이 곳에 인사말이 들어갑니다.</p><strong>9대 회장 윤상섭</strong>
          </div>
        </div>
      </div>
  </section>`;

const visionSection = () => `
  <section class="section intro-section mega-section" id="vision" data-section="vision">
    <div class="container">
      <div class="section-heading reveal">
        <div><span class="eyebrow">Our Vision</span><h2>BADA는 다음과 같은<br>핵심 가치들을 바탕으로 성장합니다.</h2></div>
        <p>특정 전공이나 직무에 국한되지 않고, 데이터와 분석을 통해 다양한 비즈니스 문제를 해결할 수 있는 인재를 양성합니다.</p>
      </div>
      <div class="value-grid">
        ${valueCard("01", "Analytical Foundation", "데이터 기반 문제 해결을 위한 분석적 사고 역량을 기릅니다.", "chart")}
        ${valueCard("02", "Practical Skillset", "실제 비즈니스 분석을 통해 실무 적용 능력을 강화합니다.", "arrow")}
        ${valueCard("03", "Collaborative Network", "학회원 간 교류를 통해 지속 가능한 네트워크를 형성합니다.", "people")}
      </div>
      <p class="vision-detail reveal">이러한 역량에는 논리적 사고, 데이터 기반 판단, 그리고 전략적 시각이 포함되며, BADA 회원들은 세션·스터디·프로젝트를 통해 실제 비즈니스 분석 경험을 쌓으며 체계적으로 발전시키고 있습니다.</p>
    </div>
  </section>`;

const aboutPage = () => `
  <main id="main">
    ${pageHero("About", "About BADA", "학회 소개와 핵심 가치를 아래에서 확인하세요.")}
    ${sectionNavigator("About", [["Who", "who"], ["Vision", "vision"]])}
    ${whoSection()}
    ${visionSection()}
    ${closingCta()}
  </main>`;

const whoPage = () => `
  <main id="main">
    ${pageHero("About · Who", "About Us", "학회소개")}
    ${whoSection()}
    ${closingCta()}
  </main>`;

const visionPage = () => `
  <main id="main">
    ${pageHero("About · Vision", "BADA는 다음과 같은<br>핵심 가치들을 바탕으로 성장하고 있습니다.", "학회소개")}
    ${visionSection()}
    ${closingCta()}
  </main>`;

const curriculumRoadmap = () => `
  <div class="curriculum-roadmap reveal" aria-label="BADA Junior Senior 투트랙 커리큘럼">
    <div class="roadmap-intro">
      <div>
        <span class="eyebrow eyebrow-light">Two-track curriculum</span>
        <h3>Junior와 Senior가 각자의 단계에서<br>실전 프로젝트로 연결됩니다.</h3>
      </div>
      <p>산학 협력 프로젝트를 공통 경험으로 공유하며, Junior는 BADAthon으로 분석 경험을 확장하고 Senior는 수료 단계로 이어집니다.</p>
    </div>
    <div class="roadmap-lanes">
      <div class="roadmap-lane roadmap-lane-junior">
        <div class="roadmap-label">
          <span>Track 01</span>
          <strong>Junior</strong>
        </div>
        <div class="roadmap-steps">
          ${roadmapStep("01", "Foundation", "기초 세션")}
          ${roadmapStep("02", "Corporate", "산학 협력 프로젝트", "shared")}
          ${roadmapStep("03", "Challenge", "BADAthon")}
        </div>
      </div>
      <div class="roadmap-divider"></div>
      <div class="roadmap-lane roadmap-lane-senior">
        <div class="roadmap-label">
          <span>Track 02</span>
          <strong>Senior</strong>
        </div>
        <div class="roadmap-steps">
          ${roadmapStep("01", "Case Study", "시니어 케이스 프로젝트")}
          ${roadmapStep("02", "Corporate", "산학 협력 프로젝트", "shared")}
          ${roadmapStep("03", "Completion", "수료", "complete")}
        </div>
      </div>
    </div>
  </div>`;

function roadmapStep(number, label, title, modifier = "") {
  return `
    <article class="roadmap-step ${modifier}">
      <span class="roadmap-number">${number}</span>
      <div><small>${label}</small><strong>${title}</strong></div>
      <i aria-hidden="true">→</i>
    </article>`;
}

const curriculumSection = (showHeading = true) => `
  <section class="section curriculum-section mega-section" id="curriculum" data-section="curriculum">
    <div class="container">
      ${showHeading ? `
        <div class="section-heading reveal">
          <div><span class="eyebrow">Curriculum</span><h2>Junior / Senior<br>투트랙 커리큘럼</h2></div>
          <p>정규 세션 전반에 걸쳐 과제가 제공되며, 스스로 데이터를 분석하고 인사이트를 도출한 뒤 경영 전략까지 연결하는 연습을 진행합니다.</p>
        </div>` : ""}
      ${curriculumRoadmap()}
      <div class="curriculum-detail-heading reveal">
        <span class="eyebrow">Junior Foundation</span>
        <h3>기초 세션 세부 구성</h3>
      </div>
      <div class="curriculum-grid">
        ${curriculumCard("01", "Foundation", "기초 세션", "/assets/curriculum-foundation.jpg", "비즈니스 애널리틱스의 첫걸음을 내딛는 과정입니다. 데이터와 비즈니스의 관계를 이해하는 것에서 출발해, 실제 문제를 해결하기 위한 경영 전략적 사고방식을 체계적으로 학습합니다.", "단순히 숫자를 다루는 것이 아니라, 비즈니스 맥락 속에서 데이터를 읽고 해석하는 시각을 기르는 데 초점을 맞춥니다. 더불어 파이썬 기초 문법부터 데이터 시각화까지, 분석 결과를 효과적으로 표현하고 전달하는 실용적인 기술도 함께 습득합니다.")}
        ${curriculumCard("02", "Collection", "데이터 수집 세션", "/assets/curriculum-collection.jpg", "웹 크롤링과 API 활용을 통해 다양한 외부 데이터를 수집하고, 이를 실제 분석에 활용할 수 있는 형태의 데이터셋으로 구축하는 과정을 배웁니다.", "필요한 데이터를 스스로 찾아내고 가공하는 능력을 기르는 데 초점을 맞춥니다. 신뢰할 수 있는 데이터를 직접 확보하며 분석의 기반을 만들어봅니다.")}
        ${curriculumCard("03", "Methodology", "데이터 분석 방법론 세션", "/assets/curriculum-method.jpg", "머신러닝과 딥러닝을 기반으로, 회귀·분류·클러스터링·NLP 등 다양한 분석 기법을 학습합니다.", "정형 데이터부터 텍스트·이미지와 같은 비정형 데이터까지 문제에 맞는 분석 방법을 선택하고, 결과를 비즈니스 언어와 의사결정으로 연결합니다.")}
      </div>
    </div>
  </section>`;

const corporateSection = (showHeading = true) => `
  <section class="section mega-section corporate-section" id="corporate-project" data-section="corporate-project">
    <div class="container">
      ${showHeading ? `
        <div class="section-heading reveal">
          <div><span class="eyebrow">Corporate Project</span><h2>기업의 살아있는 데이터로<br>전략을 제안합니다.</h2></div>
          <p>대상 기업의 실제 데이터를 기반으로 핵심 과제를 정의하고 데이터 분석을 통해 실질적인 경영 전략 솔루션을 제안합니다.</p>
        </div>` : ""}
      <div class="project-panel reveal">
        <div class="project-copy">
          <span class="eyebrow eyebrow-light">Corporate Project</span>
          <h2>BADA는 쉽게 구할 수 있는 예제 데이터가 아닌, 기업의 살아있는 데이터를 다룹니다.</h2>
          <p>대상 기업의 실제 데이터를 기반으로 기업이 직면한 핵심 과제를 정의하고, 데이터 분석을 통해 실질적인 경영 전략 솔루션을 제안합니다.</p>
          <p>BADA는 현재까지 SNOW, CGV, 교보문고 등 여러 기업들과 협업 프로젝트를 진행했으며, 특히 교보문고 측에 제안한 도서 추천 모델이 브랜드 콜라보 체험형 챗봇 PoC로 확장 적용 중에 있습니다.</p>
          <div class="partner-list"><span>SNOW</span><span>CGV</span><span>교보문고</span></div>
        </div>
        <div class="project-image">
          <img src="/assets/corporate-project.jpg" alt="BADA 산학 협력 프로젝트 참여자">
          <div class="project-stat"><span>Corporate</span><strong>Project</strong></div>
        </div>
      </div>
    </div>
  </section>`;

const extracurricularSection = (showHeading = true) => `
  <section class="section activities-section mega-section" id="extracurricular" data-section="extracurricular">
    <div class="container">
      ${showHeading ? `
        <div class="section-heading reveal">
          <div><span class="eyebrow">Extracurricular Activities</span><h2>이론과 실무를 아우르는<br>균형잡힌 학습 경험</h2></div>
          <p>정규 세션과 산학 협력 프로젝트 외에도 학회원들의 성장을 돕기 위해 다양한 활동을 진행하고 있습니다.</p>
        </div>` : ""}
      <div class="activity-grid">
        ${activityCard("activity-card-large", "/assets/activity-badathon.jpg", "BADAthon", "학회원들은 방학 기간 중 팀을 이뤄 다양한 공모전에 참여하고, 자유롭게 주제를 선정하여 데이터 분석 관련 프로젝트를 진행합니다.")}
        ${activityCard("", "/assets/activity-case.png", "시니어 케이스", "시니어 학회원들은 기업 및 서비스를 분석하여 문제를 인식하고, 해당 문제를 해결할 수 있는 전략을 제언합니다.")}
        ${activityCard("", "/assets/activity-study.jpg", "세부 스터디", "다양한 분야에 관심이 있는 학우들의 니즈를 충족하고자 정규 세션과 별개로 다양한 스터디를 운영합니다.")}
      </div>
    </div>
  </section>`;

const activitiesPage = () => `
  <main id="main">
    ${pageHero("Activities", "Business Insight를<br>도출하는 활동", "BADA에서는 Business, Computer Science & Statistics 내용을 기반으로 한 Business Insight 도출을 목표로 하고 있습니다. 아래로 스크롤하거나 소메뉴를 선택해 각 활동을 확인하세요.")}
    ${sectionNavigator("Activities", [["Curriculum", "curriculum"], ["Corporate Project", "corporate-project"], ["Extracurricular", "extracurricular"]])}
    ${curriculumSection()}
    ${corporateSection()}
    ${extracurricularSection()}
    ${closingCta()}
  </main>`;

const curriculumPage = () => `
  <main id="main">
    ${pageHero("Activities · Curriculum", "Junior / Senior<br>Two-track", "Junior와 Senior가 각자의 단계에서 학습하고, 공통 산학 협력 프로젝트를 거쳐 다음 단계로 나아갑니다.")}
    ${curriculumSection(false)}
    ${closingCta()}
  </main>`;

function curriculumCard(number, label, title, image, intro, detail) {
  return `
    <article class="curriculum-card reveal">
      <div class="card-image"><img src="${image}" alt="${title} 현장"><span>${number}</span></div>
      <div class="card-body">
        <p class="card-label">${label}</p><h3>${title}</h3><p>${intro}</p>
        <button class="text-button card-toggle" type="button" aria-expanded="false">자세히 보기 <span>+</span></button>
        <p class="card-detail">${detail}</p>
      </div>
    </article>`;
}

const corporatePage = () => `
  <main id="main">
    ${pageHero("Activities · Corporate Project", "Corporate<br>Project", "기업의 살아있는 데이터를 다룹니다.")}
    ${corporateSection(false)}
    ${closingCta()}
  </main>`;

const extracurricularPage = () => `
  <main id="main">
    ${pageHero("Activities · Extracurricular", "Extracurricular<br>Activities", "정규 세션과 산학 협력 프로젝트 외에도 이론과 실무를 아우르는 균형잡힌 학습 경험을 제공합니다.")}
    ${extracurricularSection(false)}
    ${closingCta()}
  </main>`;

function activityCard(extraClass, image, title, text) {
  return `
    <article class="activity-card ${extraClass} reveal">
      <img src="${image}" alt="${title} 활동"><div class="activity-overlay"></div>
      <div class="activity-content"><span>${title}</span><h3>${title}</h3><p>${text}</p></div>
    </article>`;
}

const boardSection = (id, config) => `
  <section class="section subpage-section mega-section board-section" id="${id}" data-section="${id}">
    <div class="container">
      <div class="section-heading reveal">
        <div><span class="eyebrow">${config.eyebrow}</span><h2>${config.title}</h2></div>
        <p>${config.description}</p>
      </div>
      <div class="empty-board reveal">
        <span>${config.icon || "BADA"}</span>
        <h3>${config.boardTitle}</h3>
        <p>${config.boardText}</p>
        ${config.actions || ""}
      </div>
    </div>
  </section>`;

const boardPage = (config) => `
  <main id="main">
    ${pageHero(config.eyebrow, config.title, config.description)}
    ${boardSection(config.id || "board", config)}
    ${closingCta()}
  </main>`;

const joinPage = () => {
  const applyConfig = {
    eyebrow: "Join · Apply",
    title: "Apply",
    description: "새로운 소식을 안내드립니다.",
    boardTitle: "지원 안내",
    boardText: "게시물이 없습니다."
  };
  const faqConfig = {
    eyebrow: "Join · FAQ",
    title: "FAQ",
    description: "자주 문의되는 내용입니다.",
    boardTitle: "자주 문의되는 내용입니다.",
    boardText: "게시물이 없습니다."
  };
  return `
    <main id="main">
      ${pageHero("Join", "Join BADA", "지원 안내와 자주 묻는 질문을 한 페이지에서 확인하세요.")}
      ${sectionNavigator("Join", [["Apply", "apply"], ["FAQ", "faq"]])}
      ${boardSection("apply", applyConfig)}
      ${boardSection("faq", faqConfig)}
      ${closingCta()}
    </main>`;
};

const loungePage = () => `
  <main id="main">
    ${pageHero("Lounge", "BADA Lounge", "학회원과 외부 방문자를 위한 공간입니다.")}
    ${sectionNavigator("Lounge", [["Member", "member"], ["공지사항", "notice"], ["채용공고", "recruit"]])}
    ${boardSection("member", {
      eyebrow: "Lounge · Member",
      title: "Member",
      description: "학회원 전용 공간입니다.",
      boardTitle: "접근 권한이 필요합니다.",
      boardText: "소유자에게 액세스를 요청하거나 권한이 있는 계정으로 로그인 하세요.",
      actions: `<div class="board-actions"><button class="button button-primary" type="button">로그인</button></div>`
    })}
    ${boardSection("notice", {
      eyebrow: "Lounge · Notice",
      title: "공지사항",
      description: "BADA의 새로운 소식을 확인하세요.",
      boardTitle: "로그인이 필요합니다.",
      boardText: "로그인상태유지 · 로그인 · 회원가입 · 아이디 및 비밀번호 찾기"
    })}
    ${boardSection("recruit", {
      eyebrow: "Lounge · Recruit",
      title: "채용공고",
      description: "학회원 대상 채용 정보를 확인하세요.",
      boardTitle: "로그인이 필요합니다.",
      boardText: "로그인상태유지 · 로그인 · 회원가입 · 아이디 및 비밀번호 찾기"
    })}
    ${closingCta()}
  </main>`;

const routes = {
  "/": homePage,
  "/About1": aboutPage,
  "/Who": whoPage,
  "/Vision": visionPage,
  "/Activities": activitiesPage,
  "/Curriculum": curriculumPage,
  "/CorporateProject": corporatePage,
  "/ExtracurricularActivities": extracurricularPage,
  "/Join": joinPage,
  "/Apply": () => boardPage({
    id: "apply",
    eyebrow: "Join · Apply",
    title: "Apply",
    description: "새로운 소식을 안내드립니다.",
    boardTitle: "지원 안내",
    boardText: "게시물이 없습니다."
  }),
  "/faq": () => boardPage({
    id: "faq",
    eyebrow: "Join · FAQ",
    title: "FAQ",
    description: "자주 문의되는 내용입니다.",
    boardTitle: "자주 문의되는 내용입니다.",
    boardText: "게시물이 없습니다."
  }),
  "/Lounge": loungePage,
  "/Member": () => boardPage({
    id: "member",
    eyebrow: "Lounge · Member",
    title: "Member",
    description: "학회원 전용 공간입니다.",
    boardTitle: "접근 권한이 필요합니다.",
    boardText: "소유자에게 액세스를 요청하거나 권한이 있는 계정으로 로그인 하세요.",
    actions: `<div class="board-actions"><a class="button button-primary" href="/">홈으로</a><button class="button board-button" type="button">로그인</button></div>`
  }),
  "/Notice": () => boardPage({
    id: "notice",
    eyebrow: "Lounge · Notice",
    title: "공지사항",
    description: "BADA의 새로운 소식을 확인하세요.",
    boardTitle: "로그인이 필요합니다.",
    boardText: "로그인상태유지 · 로그인 · 회원가입 · 아이디 및 비밀번호 찾기"
  }),
  "/Recruit": () => boardPage({
    id: "recruit",
    eyebrow: "Lounge · Recruit",
    title: "채용공고",
    description: "학회원 대상 채용 정보를 확인하세요.",
    boardTitle: "로그인이 필요합니다.",
    boardText: "로그인상태유지 · 로그인 · 회원가입 · 아이디 및 비밀번호 찾기"
  })
};

const normalizePath = (pathname) => {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
};

const app = document.querySelector("#app");
const currentPath = normalizePath(window.location.pathname);
const renderPage = routes[currentPath] || (() => boardPage({
  eyebrow: "404",
  title: "Page not found",
  description: "요청하신 페이지를 찾을 수 없습니다.",
  boardTitle: "페이지가 없습니다.",
  boardText: "주소를 다시 확인해 주세요.",
  actions: `<div class="board-actions"><a class="button button-primary" href="/">홈으로</a></div>`
}));

app.innerHTML = `${headerTemplate()}${renderPage()}${footerTemplate()}`;

const pageTitles = {
  "/": "BADA | 고려대학교 비즈니스 애널리틱스학회",
  "/About1": "About | BADA",
  "/Who": "About Us | BADA",
  "/Vision": "Vision | BADA",
  "/Activities": "Activities | BADA",
  "/Curriculum": "Curriculum | BADA",
  "/CorporateProject": "Corporate Project | BADA",
  "/ExtracurricularActivities": "Extracurricular Activities | BADA",
  "/Join": "Join | BADA",
  "/Apply": "Apply | BADA",
  "/faq": "FAQ | BADA",
  "/Lounge": "Lounge | BADA",
  "/Member": "Member | BADA",
  "/Notice": "공지사항 | BADA",
  "/Recruit": "채용공고 | BADA"
};
document.title = pageTitles[currentPath] || "BADA";

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const revealItems = document.querySelectorAll(".reveal");
const sectionLinks = document.querySelectorAll("[data-section-link]");
const sectionTargets = document.querySelectorAll("[data-section]");

const setActiveSectionLink = (id) => {
  sectionLinks.forEach((link) => {
    const active = link.dataset.sectionLink === id;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
};

const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 20);
const closeMenu = () => {
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

menuToggle.addEventListener("click", () => {
  const open = !document.body.classList.contains("menu-open");
  document.body.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".mobile-menu a").forEach((link) => link.addEventListener("click", closeMenu));
document.querySelectorAll(".card-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const card = toggle.closest(".curriculum-card");
    const expanded = card.classList.toggle("expanded");
    toggle.firstChild.textContent = expanded ? "접기 " : "자세히 보기 ";
    toggle.setAttribute("aria-expanded", String(expanded));
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -35px" });
  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 60}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

if (sectionTargets.length && "IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      setActiveSectionLink(entry.target.id);
    });
  }, { rootMargin: "-28% 0px -58% 0px", threshold: 0 });
  sectionTargets.forEach((section) => sectionObserver.observe(section));
}

const scrollToHashTarget = (instant = false) => {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  setActiveSectionLink(target.id);

  if (instant) {
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    target.scrollIntoView({ block: "start" });
    document.documentElement.style.scrollBehavior = previousBehavior;
    return;
  }

  target.scrollIntoView({ block: "start", behavior: "smooth" });
};

window.addEventListener("hashchange", () => scrollToHashTarget(false));

const stabilizeInitialHash = async () => {
  if (!window.location.hash) return;
  if (document.fonts?.ready) await document.fonts.ready;
  await Promise.all([...document.images].map((image) => {
    if (image.complete) return Promise.resolve();
    return new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  }));
  scrollToHashTarget(true);
};

requestAnimationFrame(() => requestAnimationFrame(() => scrollToHashTarget(true)));
window.addEventListener("load", stabilizeInitialHash, { once: true });
stabilizeInitialHash();

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});
updateHeader();
