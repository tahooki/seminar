# AI Harness - 발표 슬라이드 구성안

> 기준 문서: `docs/20260511155313_ai_harness_basic_explanation.md`
> 톤: 꼬마 로봇 가이드 + 크레용 스케치 인포그래픽
> 목적: 하네스를 제약, 피드백, 반복으로 설명하고 코드 흐름으로 구체화한다.

---

## 공통 이미지 프롬프트

이미지 생성 시 아래 공통 프롬프트를 각 슬라이드별 프롬프트 앞에 붙인다.

```txt
Style: warm hand-drawn crayon sketch infographic on cream paper. Whimsical
storybook feel with light notebook annotation touches. 16:9 landscape.

Use a cute AI robot mascot as the guide: white body with mint accents, rounded
head with one small antenna, square torso, short arms and legs, big friendly
eyes, holding a crayon pointer. Keep the robot consistent across slides.

Use pastel accents: mint, coral, lavender, lemon yellow, soft sky blue. Use
hand-drawn arrows, rounded speech bubbles, sticker-like icons, simple cards,
and light crayon texture.

Each slide should have one clear headline, 2-4 short labels, and one main
visual idea. Not text-heavy, not empty. Avoid realistic UI screenshots.

TEXT: Korean Hangul for labels and dialogue, clear crayon handwriting. Keep
proper nouns and abbreviations in English: AI, Harness, LLM, Runtime, JSON,
schema, test.
```

### 코드 슬라이드 사용 원칙

코드가 들어가는 슬라이드는 이미지 생성 AI가 긴 코드를 정확히 렌더링하기 어렵다. 이미지는 "코드 카드가 있는 구도"로 만들고, 실제 코드는 PPT/디자인 툴에서 텍스트 레이어로 얹는 것을 추천한다.

---

# 슬라이드 구성

---

## 슬라이드 0 - 표지

### 화면 문구

- 제목: **AI Harness**
- 부제: **AI가 실수해도 다시 고칠 수 있게 만드는 구조**
- 작은 문구: **Constraint + Feedback + Iteration**

### 장면 구성

발표를 여는 느낌으로, 로봇 진행자가 안전벨트와 작업 레일이 있는 작은 작업장 앞에서 하네스 구조를 소개한다.

### 이미지 프롬프트

```txt
Opening cover slide for a technical seminar. Cute white-and-mint AI robot
presenter stands in front of a friendly workshop with soft guide rails and a
safety harness line. Three floating cards: "Constraint", "Feedback", "Iteration".

Large title: "AI Harness". Subtitle: "AI가 실수해도 다시 고칠 수 있게 만드는 구조".
Small bottom label: "Constraint + Feedback + Iteration".
Warm cream paper background, pastel crayon illustration, spacious opening-slide
composition.
```

---

## 슬라이드 1 - AI 하네스란 무엇인가

### 화면 문구

- **정답을 강요하는 코드가 아니다**
- **좋은 결과로 가는 작업 환경이다**

### 장면 구성

로봇이 아무렇게나 뛰는 것이 아니라 레일과 체크포인트가 있는 길을 따라 결과물로 간다.

### 발표 메모

하네스는 AI를 억지로 조종하는 코드가 아니라, AI가 일정한 절차와 검증을 거치며 결과를 개선하게 만드는 실행 환경이다.

### 이미지 프롬프트

```txt
Robot walking along a guided path with checkpoints. Start label "요청",
end label "완료 기준 통과". Path has soft rails, not a cage.

Top headline: "하네스 = 좋은 결과로 가는 작업 환경".
Small note: "강요가 아니라 구조".
```

---

## 슬라이드 2 - 하네스의 기본 공식

### 화면 문구

**Harness = Constraint + Feedback + Iteration**

- **제약**
- **피드백**
- **반복**

### 장면 구성

세 개의 톱니가 맞물려 돌아간다. 각 톱니는 Constraint, Feedback, Iteration이다.

### 발표 메모

하네스의 핵심은 제약을 주고, 결과를 검사하고, 실패하면 다시 고치게 하는 반복 구조다.

### 이미지 프롬프트

```txt
Three interlocking crayon gears labeled "Constraint", "Feedback", "Iteration".
Robot turns the gears with a crank.

Large formula at top: "Harness = Constraint + Feedback + Iteration".
Korean labels under gears: "제약", "피드백", "반복".
```

---

## 슬라이드 3 - 하네스가 없는 경우 vs 있는 경우

### 화면 문구

- **없음: 요청 → 생성 → 완료**
- **있음: 생성 → 검증 → 피드백 → 재시도**

### 장면 구성

좌우 비교. 왼쪽은 한 번에 끝나는 짧은 길, 오른쪽은 체크포인트와 재시도 루프가 있는 길.

### 발표 메모

하네스가 없으면 결과는 AI의 즉석 판단에 크게 의존한다. 하네스가 있으면 실패를 발견하고 다시 고칠 수 있다.

### 이미지 프롬프트

```txt
Split comparison. Left side labeled "하네스 없음": short path "요청 -> 생성 -> 완료".
Right side labeled "하네스 있음": path "생성 -> 검증 -> 피드백 -> 재시도 -> 완료".

Robot stands on the right path with a checklist.
Top headline: "차이는 검증과 재시도".
```

---

## 슬라이드 4 - 프롬프트, if문, 하네스의 차이

### 화면 문구

- **프롬프트: 말로 방향**
- **if문: 조건 분기**
- **하네스: 작업 환경 설계**

### 장면 구성

세 개의 카드. 말풍선, 갈림길, 작업장 아이콘으로 차이를 보여준다.

### 발표 메모

기존 중복 설명은 여기서 하나로 합친다. 프롬프트와 if문은 하네스를 구성할 수 있지만, 하네스 자체는 전체 흐름과 검증 구조다.

### 이미지 프롬프트

```txt
Three-card comparison:
Card 1: speech bubble labeled "프롬프트: 말로 방향".
Card 2: forked road labeled "if문: 조건 분기".
Card 3: workshop path labeled "하네스: 작업 환경".

Top headline: "비슷하지만 범위가 다르다".
```

---

## 슬라이드 5 - 코드로 보면: 단순 if문

### 화면 문구

- **작업을 고르는 코드**
- **검증 루프는 아직 없다**

### 슬라이드에 얹을 코드

```ts
if (userWantsCode) {
  return generateCode();
}

return answerText();
```

### 발표 메모

이 코드는 어떤 작업을 할지 나누는 분기다. 하지만 결과를 검증하고, 실패 이유를 다시 넣고, 재시도하는 구조는 없다.

### 이미지 프롬프트

```txt
Code-focused slide. Large code card titled "단순 if문". Leave room for code overlay.
Beside it, a forked road with two paths: "코드 생성" and "텍스트 답변".

Robot points to a missing loop sign labeled "검증 루프 없음".
```

---

## 슬라이드 6 - 코드로 보면: 하네스 구조

### 화면 문구

- **해석**
- **생성**
- **검증**
- **재생성**

### 슬라이드에 얹을 코드

```ts
const spec = await interpret(userRequest);
let result = await generate(spec);

for (let attempt = 0; attempt < 3; attempt++) {
  const validation = await validate(result);

  if (validation.ok) {
    return result;
  }

  result = await regenerate({
    spec,
    previousResult: result,
    errors: validation.errors,
  });
}

throw new Error("completion criteria not met");
```

### 발표 메모

하네스의 핵심은 `validate` 결과를 다시 AI에게 돌려보내고, 정해진 완료 기준을 통과할 때까지 제한된 횟수 안에서 반복하는 구조다.

### 이미지 프롬프트

```txt
Code slide with a loop diagram. Code card titled "Harness flow" on the right.
Left side loop: "interpret" -> "generate" -> "validate" -> if fail "regenerate".

Robot points to "validation.errors" with note: "실패 이유를 다시 넣는다".
```

---

## 슬라이드 7 - 하네스의 구성 요소

### 화면 문구

- **입력 정리**
- **규칙과 제약**
- **중간 산출물**
- **도구 사용**
- **검증과 재시도**
- **완료 기준**

### 장면 구성

작업 공정 라인처럼 각 구성 요소가 순서대로 배치된다.

### 발표 메모

하네스는 하나의 함수가 아니라 여러 요소가 연결된 작업 환경이다. 중간 산출물과 완료 기준이 특히 중요하다.

### 이미지 프롬프트

```txt
Assembly-line diagram with six stations labeled "입력 정리", "규칙/제약",
"중간 산출물", "도구 사용", "검증/재시도", "완료 기준".

Robot moves a small result card along the line.
Top headline: "하네스는 작업 공정이다".
```

---

## 슬라이드 8 - 코드로 보면: 검증과 피드백

### 화면 문구

- **검증 실패를 구체적으로 전달**
- **다시 만들 때 errors를 함께 넣음**

### 슬라이드에 얹을 코드

```ts
const validation = validateOutput(result);

if (!validation.ok) {
  const fixed = await generate({
    spec,
    feedback: validation.errors,
    previousResult: result,
  });

  return fixed;
}
```

### 발표 메모

그냥 “다시 해”라고 하는 것이 아니라 어떤 조건을 못 맞췄는지 구체적으로 돌려보내야 한다.

### 이미지 프롬프트

```txt
Code card titled "Feedback loop" with room for code overlay. Beside it, a
validation checklist with red marks becoming green checks after feedback.

Robot writes "errors" on a sticky note and sends it back into a generate box.
```

---

## 슬라이드 9 - 완료 기준이 있어야 끝난다

### 화면 문구

- **테스트 통과**
- **필수 항목 포함**
- **schema 통과**
- **금지 패턴 없음**

### 장면 구성

결승선 앞에 체크리스트 게이트가 있고, 모든 조건이 통과돼야 문이 열린다.

### 발표 메모

AI가 “완료했다”고 말하는 것을 그대로 믿지 않는다. 시스템이 정한 기준을 통과해야 끝난다.

### 이미지 프롬프트

```txt
Finish gate with checklist locks. Locks labeled "test", "필수 항목",
"schema", "금지 패턴". Gate opens when checks turn green.

Top headline: "완료는 기준을 통과해야 한다".
Robot waits at the gate with a result card.
```

---

## 슬라이드 10 - 하네스는 AI 판단을 없애지 않는다

### 화면 문구

- **AI가 할 일: 해석, 생성, 대안**
- **하네스가 잡을 일: 순서, 형식, 검증**

### 장면 구성

로봇이 자유롭게 아이디어를 만들고, 옆의 레일과 체크리스트가 방향을 잡아준다.

### 발표 메모

하네스는 AI의 창의성과 판단을 없애는 것이 아니다. AI가 잘하는 일은 맡기고, 흔들리기 쉬운 절차와 검증을 시스템이 잡아준다.

### 이미지 프롬프트

```txt
Balanced scene. Left side: robot brainstorming with lightbulb cards labeled
"해석", "생성", "대안". Right side: guide rails and checklist labeled "순서",
"형식", "검증".

Top headline: "자유와 통제를 나눈다".
```

---

## 슬라이드 11 - 한 문장 정리

### 화면 문구

**하네스는 AI를 믿지 않는 구조가 아니라, AI가 실수해도 다시 고칠 수 있게 만드는 작업 환경이다.**

### 장면 구성

실패한 결과물이 피드백 루프를 돌아 개선된 결과물로 바뀐다.

### 이미지 프롬프트

```txt
Final summary slide. Flow: "초안" -> "검증" -> "피드백" -> "개선된 결과".
Robot smiles and moves the result through a loop.

Large Korean text: "실수해도 다시 고칠 수 있게".
Small subtitle: "AI Harness = 구조화된 작업 환경".
```

---

## 슬라이드 12 - 마무리

### 화면 문구

- **AI를 잘 쓰는 법은 실행 환경을 설계하는 것**
- **Q&A**

### 장면 구성

로봇이 하네스 레일 끝에서 완료 체크를 붙인다. 뒤에는 초안, 검증, 피드백, 개선 루프가 작게 정리되어 있다.

### 이미지 프롬프트

```txt
Closing slide for a technical seminar about AI Harness. Cute white-and-mint AI
robot places a final check mark at the end of a guided workshop rail. In the
background, a small loop shows "초안", "검증", "피드백", "개선".

Large Korean closing text: "AI를 잘 쓰는 법은 실행 환경을 설계하는 것".
Bottom text: "Q&A".

Warm cream paper background, pastel crayon illustration, calm conclusion mood,
clean whitespace, clear readable Korean text.
```
