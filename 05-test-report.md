# 05. Test Report

## Playwright Execution Result

- Date: 2026-03-08
- Command: `npm run test:e2e`
- Environment: `chromium`
- Target: `https://join.baeminconnect.com/`

## Result Summary

- Total: 4
- Passed: 4
- Failed: 0
- Duration: 3.7s

## Executed Tests

- `playwright/tests/landing.spec.ts`
  - 핵심 카피와 앱 다운로드 CTA가 보인다
  - 앱 다운로드 버튼 클릭 시 모달이 열린다
- `playwright/tests/locale.spec.ts`
  - 영어 페이지로 이동해도 핵심 CTA가 유지된다
- `playwright/tests/region-search.spec.ts`
  - 지역 검색 입력과 결과 영역이 동작한다

## Raw Output

```text
Running 4 tests using 3 workers

  ✓  3 [chromium] › playwright/tests/region-search.spec.ts:4:7 › Baemin Connect region search › 지역 검색 입력과 결과 영역이 동작한다 (1.3s)
  ✓  2 [chromium] › playwright/tests/landing.spec.ts:4:7 › Baemin Connect landing › 핵심 카피와 앱 다운로드 CTA가 보인다 (1.3s)
  ✓  1 [chromium] › playwright/tests/locale.spec.ts:4:7 › Baemin Connect locale › 영어 페이지로 이동해도 핵심 CTA가 유지된다 (1.9s)
  ✓  4 [chromium] › playwright/tests/landing.spec.ts:11:7 › Baemin Connect landing › 앱 다운로드 버튼 클릭 시 모달이 열린다 (1.2s)

  4 passed (3.7s)
```
