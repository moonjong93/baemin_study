# Baemin Connect QA Case Study

배민커넥트 지원 랜딩 페이지(https://join.baeminconnect.com/)를 기준으로 정리한 QA 케이스 스터디입니다.

Playwright 테스트 코드를 작성하는 것 자체보다, **어떤 기준으로 테스트를 설계했는지**를 같이 보여주는 데 목적을 두었습니다.

정리하면서 아래 흐름을 중심으로 문서를 구성했습니다.

- 어떤 사용자를 기준으로 서비스를 바라봤는지
- 사용자가 실제로 거치게 되는 주요 플로우는 무엇인지
- 그중 어떤 부분을 우선적으로 검증해야 하는지
- 어떤 시나리오를 E2E 자동화 대상으로 가져갈 수 있는지

지원 공고

- 우아한형제들 QA Engineer  
  https://www.wanted.co.kr/wd/328593

대상 서비스

- 배민커넥트 지원 랜딩  
  https://join.baeminconnect.com/

---

## Why This Portfolio

프론트엔드 개발자로 일을 시작했지만, 실제로는 서버 코드나 간단한 앱 개발까지 여러 영역을 같이 다뤄왔습니다. 그러다 보니 자연스럽게 서비스 전체 흐름을 이해하려는 습관이 생겼습니다.

최근에는 사이드 프로젝트와 사내 협업을 통해 **Playwright 기반 E2E 테스트 자동화**를 경험하게 되었고, 테스트 코드가 단순히 버그를 찾는 역할만 하는 것은 아니라는 걸 느끼게 됐습니다.

특히 개인 프로젝트인 **메일비(mailvy)**를 만들면서 테스트가 프로젝트의 방향을 정리해주는 역할도 한다는 걸 체감했습니다. 테스트와 사용자 시나리오를 먼저 정리해두니 개발하면서 길을 잃는 일이 훨씬 줄어들었습니다.

이 문서는 그런 경험을 바탕으로  
**“개발 경험이 있는 QA 엔지니어라면 어떻게 서비스를 바라볼까?”**  
라는 관점에서 정리한 작은 케이스 스터디입니다.

---

## Included

- [01-user-persona.md](./01-user-persona.md)
- [02-user-flow.md](./02-user-flow.md)
- [03-test-strategy.md](./03-test-strategy.md)
- [04-test-cases.md](./04-test-cases.md)
- [05-test-report.md](./06-test-report.md)

Playwright 테스트

- [landing.spec.ts](./playwright/tests/landing.spec.ts)
- [locale.spec.ts](./playwright/tests/locale.spec.ts)
- [region-search.spec.ts](./playwright/tests/region-search.spec.ts)

---

## Scope

이번 정리는 실제 라이더 가입 이후 앱 내부 플로우까지 다루기보다는,  
외부에서 접근 가능한 **지원 랜딩 페이지의 기본적인 품질 검증**에 초점을 맞췄습니다.

주요 범위는 아래 정도입니다.

- 앱 다운로드 CTA 노출 및 이동 흐름
- 활동 가능 지역 검색 기능
- FAQ 및 고객 문의 진입 경로
- 다국어 전환 동작
- 모바일 중심 랜딩 페이지 UI 안정성

랜딩 페이지 특성상 모바일 트래픽 비중이 높을 것으로 보고, 기본적인 UI 동작이 모바일 환경에서도 문제없이 동작하는지 확인하는 데 조금 더 신경 썼습니다.

---

## Structure

```
root
├── README.md
├── 01-user-persona.md
├── 02-user-flow.md
├── 03-test-strategy.md
├── 04-test-cases.md
├── 05-test-report.md
└── playwright
├── README.md
└── tests
├── landing.spec.ts
├── locale.spec.ts
└── region-search.spec.ts
```

## Positioning

이 문서는 QA 경력을 직접 대체하려는 목적의 포트폴리오는 아닙니다.

대신 아래 같은 점을 보여주고 싶었습니다.

- 개발 경험을 기반으로 서비스 구조와 UI 흐름을 이해할 수 있는지
- 테스트 전략 → 테스트 케이스 → 자동화까지 연결해서 설명할 수 있는지
- 기능 단위가 아니라 **사용자 시나리오 기준으로 품질을 바라볼 수 있는지**
