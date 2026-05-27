# A2UI POC 발표자 노트

확인일: 2026-05-25

발표 페이지: `/samples/a2ui-poc`

## 핵심 메시지

A2UI POC의 핵심은 "AI가 화면을 자유롭게 그린다"가 아니다. Agent가 사용자의 의도를 이해하고 MCP로 검증된 도구를 호출한 뒤, 클라이언트가 신뢰한 운영 UI Part를 렌더링한다는 점이다.

POC 구간은 Story 페이지의 설명용 이미지에만 기대지 않고, 실제 `/deploy/image` 화면에서 캡처한 Assistant 채팅 장면을 중심으로 말한다.

## 14장 흐름

1. **Opening**
   - 운영 콘솔에서 AI는 답변만 하는 챗봇으로 끝나면 부족하다.
   - 필요한 데이터를 찾고, 안전한 UI를 띄우고, 버튼 action까지 다시 실행 흐름으로 연결해야 한다.

2. **Concepts**
   - Agent: 목표를 위해 도구를 쓰는 실행 시스템.
   - MCP: Agent와 외부 도구를 연결하는 표준 통로.
   - Skill: 반복 작업을 위한 절차, 기준, 예시, 템플릿 묶음.
   - A2UI: 코드를 실행하지 않고 검증된 UI를 호출하는 계약.

3. **Story**
   - 김배포 선임의 문제로 들어간다.
   - 12개 서비스, 3개 환경, 이력 확인 3분, 배포 시작 7단계, 입력 필드 21개를 강조한다.

4. **POC Capture**
   - 실제 Deploy workflow 화면 오른쪽 Assistant에서 "배포하고 싶어"라고 입력한 캡처를 보여준다.
   - 발표에서는 "배포할꺼야" 같은 자연어를 던지면 Agent가 `deploy.start` intent를 잡고, 비어 있는 `service` slot을 질문으로 되돌린다고 설명한다.

5. **A2UI Surface**
   - `payments-api`를 선택한 뒤 실제 Deploy Launchpad surface가 채팅 안에 뜨는 캡처를 보여준다.
   - 이 장면에서 "Agent가 UI를 새로 그린 것이 아니라 Admin surface config와 payload를 받아 검증된 template을 렌더링했다"는 점을 강조한다.

6. **Architecture**
   - Chat UI, Orchestrator, A2UI Bridge, Agent SDK, Admin MCP, SurfaceRenderer 네 겹을 설명한다.
   - MCP 서버가 없으면 fallback으로 돌아간다는 점을 같이 말한다.

7. **Agent Runtime**
   - Agent는 LLM 한 번 호출이 아니라 8단계 파이프라인이다.
   - intent, slot, tool, facts, decision, surface 생성 순서로 설명한다.

8. **MCP**
   - Admin MCP는 6개 tool을 제공한다.
   - 가장 중요한 tool은 `recommendTemplate`, `resolveTemplateData`, `executeAction` 세 개다.

9. **Skill**
   - MCP가 도구를 연결한다면 Skill은 그 도구를 언제 어떻게 쓸지 알려주는 작업법이다.
   - 이번 덱은 `seminar-presentation-builder`의 규칙을 따라 기존 presentation component와 Mermaid를 재사용했다.
   - Skill은 프로젝트 규칙, 참고 문서, component contract, 검증 방식까지 묶어 Agent에게 제공한다.

10. **A2UI Runtime**
   - 화면 공식은 `renderer + surfaceConfig + payload`.
   - renderer는 항상 같고 payload와 surfaceConfig만 호출마다 달라진다.

11. **Admin Binding**
   - Admin은 raw UI를 그리는 곳이 아니라 resolver와 binding path를 연결하는 곳이다.
   - 제품팀은 검증된 Part를 publish하고 Admin은 데이터를 연결한다.

12. **Guardrails**
   - 운영 UI에서는 매번 새로운 화면보다 매번 같은 안전이 중요하다.
   - action ID, 권한, audit, fallback이 안정적으로 유지되어야 한다.

13. **Implementation Status**
   - POC는 `@a2ui/ui`, `@a2ui/chat`, `@a2ui/admin`, `@a2ui/agent-node`, Python agent, contracts로 역할을 나눴다.
   - 테스트 포인트는 orchestrator, tools, action bridge, surface validation, chatbot host다.

14. **Demo Runbook**
   - Mock API `3200`, Admin MCP `3100`, Next.js `3000`을 켠다.
   - 선택적으로 Python FastAPI agent `8000`을 켠다.
   - 마무리 문장: "Agent는 더 풍부한 응답을, 운영자는 같은 안전한 화면을 얻습니다."

## 데모 순서

```bash
npm run dev -w @a2ui/demo-mock-api
npm run dev -w @a2ui/admin
npm run dev
```

선택:

```bash
cd packages/demo-agent-server
python -m uvicorn app.main:app --port 8000
ASSISTANT_BACKEND=python npm run dev
```

브라우저에서 POC 설명은 `http://localhost:3000/story`, 실제 채팅 시연은 `http://localhost:3000/deploy/image`에서 보여준다.
