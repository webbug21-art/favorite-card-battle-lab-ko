# 기존 영어 앱에 영향 없이 GitHub Pages에 배포하기

이 안내는 같은 GitHub 계정에 이미 영어 앱이 있다는 전제로 작성했습니다. 가장 중요한 원칙은 **기존 저장소를 수정하지 않고 카드 앱 전용 저장소를 새로 만드는 것**입니다.

## 완성될 구조

예를 들어 GitHub 아이디가 `myname`이라면 다음처럼 분리됩니다.

```text
GitHub 계정: myname
├─ 기존 영어 앱 저장소
│  └─ 기존 주소 그대로 유지
└─ favorite-card-battle-lab-ko  ← 새로 만들 저장소
   └─ https://myname.github.io/favorite-card-battle-lab-ko/
```

두 앱은 저장소, 배포 기록, 주소가 서로 다릅니다. 카드 앱을 업데이트해도 기존 영어 앱의 파일과 배포에는 손대지 않습니다.

## 절대로 하지 않을 것

- 기존 영어 앱 저장소에 카드 앱의 `index.html`, `app.js`, `style.css`를 덮어쓰지 않습니다.
- 영어 앱이 들어 있는 `myname.github.io` 저장소를 새 카드 앱 저장소로 사용하지 않습니다.
- 기존 영어 앱의 Settings → Pages 설정을 변경하지 않습니다.
- 카드 앱 ZIP 파일 자체를 Pages 루트에 올리지 않습니다. 반드시 압축을 푼 내부 파일을 올립니다.

## 1단계 — 현재 영어 앱 확인

1. GitHub에 로그인합니다.
2. 오른쪽 위 프로필 → **Your repositories**를 엽니다.
3. 기존 영어 앱 저장소 이름과 현재 Pages 주소를 메모합니다.
4. 해당 저장소는 이후 과정에서 열거나 수정하지 않습니다.

기존 영어 앱이 `myname.github.io` 저장소에 있다면 카드 앱은 반드시 다른 이름의 프로젝트 저장소로 만드세요.

## 2단계 — 카드 앱 전용 저장소 생성

1. GitHub 오른쪽 위 **＋ → New repository**를 선택합니다.
2. Repository name에 정확히 `favorite-card-battle-lab-ko`를 입력합니다.
3. Description에는 `Korean family card battle lab`이라고 적습니다.
4. GitHub Free에서 Pages를 쓰려면 **Public**을 선택합니다.
5. **Add a README file**은 켜지 않아도 됩니다.
6. **Create repository**를 누릅니다.

이제 주소창과 저장소 제목에 `favorite-card-battle-lab-ko`가 표시되는지 확인합니다. 영어 앱 저장소 이름이 보인다면 즉시 뒤로 이동하세요.

## 3단계 — 올바른 파일 업로드

1. 제공된 `Favorite-Card-Battle-Lab.zip`을 컴퓨터에서 압축 해제합니다.
2. GitHub에서 새 `favorite-card-battle-lab-ko` 저장소의 **Code** 화면을 엽니다.

저장소 화면 모양에 따라 업로드 버튼 위치가 다릅니다.

### 저장소가 완전히 비어 있을 때

저장소 중앙의 **Quick setup** 상자를 찾습니다. 아래쪽 문장에 다음 두 링크가 보입니다.

```text
creating a new file  /  uploading an existing file
```

여기서 파란 글씨 **uploading an existing file**을 누릅니다. 비어 있는 저장소에서는 `Add file` 버튼이 아직 보이지 않을 수 있습니다.

### README가 이미 보일 때

파일 목록 오른쪽 위, 초록색 **Code** 버튼 근처의 **Add file**을 누른 다음 **Upload files**를 선택합니다. 화면 폭이 좁으면 `Add file`이 **…** 메뉴 안에 있을 수 있습니다.

### 컴퓨터에서 실제 파일 선택하기

압축을 이미 풀었다면 Windows 파일 탐색기에서 아래 폴더를 엽니다.

```text
C:\Users\webbu\Documents\Codex\2026-06-21\new-chat\outputs\favorite-card-battle-lab
```

폴더 안의 빈 곳을 한 번 누른 뒤 `Ctrl+A`를 눌러 **내부 항목 전체**를 선택합니다. 선택된 항목들을 GitHub의 **Drag files here to add them to your repository** 영역으로 끌어다 놓습니다.

바깥쪽 `favorite-card-battle-lab` 폴더 자체나 ZIP 파일 하나만 올리지 마세요. 아래 내부 항목이 저장소의 첫 화면에 바로 올라가야 합니다.

```text
.nojekyll
index.html
style.css
app.js
README.md
DEPLOY_SEPARATELY.md
FAN_CONTENT_NOTICE.md
IMAGE_PROMPTS.md
assets/ 폴더 전체
```

3. 업로드가 끝날 때까지 기다립니다. 고화질 이미지가 30장이라 잠시 걸릴 수 있습니다.
4. 업로드 목록에서 `index.html`, `app.js`, `style.css`, `assets/seek-v2.webp` 등이 보이는지 확인합니다.
5. 화면 아래쪽까지 스크롤합니다.
6. Commit message에 `Initial Korean Card Battle Lab`을 입력합니다.
7. **Commit directly to the main branch**가 선택되어 있으면 그대로 둡니다.
8. 초록색 **Commit changes**를 누릅니다. 확인 창이 한 번 더 나오면 다시 **Commit changes**를 누릅니다.

저장소 첫 화면에서 `index.html`이 바로 보여야 합니다. `favorite-card-battle-lab/index.html`처럼 폴더 안쪽에 들어가 있으면 안 됩니다.

## 4단계 — 새 저장소의 Pages만 켜기

1. 화면 위 저장소 이름이 `favorite-card-battle-lab-ko`인지 다시 확인합니다.
2. 해당 저장소 위쪽 탭의 **Settings**를 누릅니다. 창이 좁아 Settings가 안 보이면 탭 오른쪽의 **…**를 누르면 나옵니다.
3. 왼쪽 사이드바에서 **Code and automation** 항목 아래의 **Pages**를 누릅니다.
4. Build and deployment의 Source를 **Deploy from a branch**로 설정합니다.
5. 아래 Branch 줄의 첫 번째 메뉴에서 **main**, 두 번째 메뉴에서 **/(root)**를 선택합니다.
6. Branch 줄 오른쪽의 **Save**를 누릅니다.
7. 최대 10분 정도 기다린 뒤 같은 Pages 화면을 새로고침합니다.
8. 위쪽에 **Your site is live at** 문장과 **Visit site** 버튼이 나타나면 눌러 실행합니다.

Pages 메뉴는 보이지만 Branch 선택란이 없거나 업그레이드 안내만 나온다면 저장소가 Private인지 확인하세요. GitHub Free에서 가장 간단히 배포하려면 저장소를 Public으로 만들어야 합니다.

예상 주소:

```text
https://myname.github.io/favorite-card-battle-lab-ko/
```

기존 영어 앱 주소는 전혀 바뀌지 않습니다.

## 5단계 — 두 앱이 분리됐는지 확인

다음 네 가지를 확인합니다.

1. 기존 영어 앱 주소를 열었을 때 이전 화면이 그대로 나옵니다.
2. 새 카드 앱 주소에는 `Favorite Card Battle Lab`이 나옵니다.
3. 카드 앱에서 팩 하나를 열고 새로고침해도 카드가 남아 있습니다.
4. 영어 앱을 다시 열었을 때 영어 앱 데이터가 그대로 있습니다.

카드 앱은 `favorite-card-battle-lab-ko-family-v2`라는 고유한 localStorage 키를 사용합니다. 따라서 같은 GitHub Pages 계정 아래에서도 일반적인 저장 키 충돌을 피합니다.

## 저장 데이터 격리에 관한 정확한 설명

`myname.github.io/english-app/`과 `myname.github.io/favorite-card-battle-lab-ko/`는 경로는 다르지만 브라우저 관점에서는 같은 출처(origin)입니다. 이 앱은 다른 앱과 겹치기 어려운 전용 저장 키를 사용하므로 정상 사용 중에는 서로의 데이터를 덮어쓰지 않습니다.

다만 다음 작업은 같은 `myname.github.io` 아래 앱들의 저장 데이터를 함께 지울 수 있습니다.

- Safari/Chrome에서 `myname.github.io`의 웹사이트 데이터를 통째로 삭제
- 기존 영어 앱 코드가 `localStorage.clear()`를 실행
- 브라우저의 모든 기록과 사이트 데이터를 일괄 삭제

데이터까지 완전히 다른 공간으로 격리하려면 아래 중 하나를 선택합니다.

- 카드 앱을 가족용 **별도 GitHub 계정**에 배포: `familyname.github.io`
- 카드 앱에 별도 서브도메인 사용: 예를 들어 `cards.example.com`

대부분의 가족용 사용에는 새 저장소 + 고유 저장 키면 충분합니다. 정말 중요한 진행 정보는 카드 앱의 **설정 → 백업 JSON 저장**으로 주기적으로 보관하세요.

## 아이폰에서 실행

1. Safari에서 새 카드 앱 Pages 주소를 엽니다.
2. 공유 버튼을 누릅니다.
3. **홈 화면에 추가**를 선택합니다.
4. 이름을 `Card Battle Lab`으로 정합니다.
5. 홈 화면 아이콘으로 실행합니다.

영어 앱도 홈 화면에 있다면 서로 다른 이름과 아이콘 위치로 구분하면 됩니다.

## 카드 앱만 업데이트하기

1. 카드 앱에서 JSON 백업을 먼저 저장합니다.
2. GitHub에서 반드시 `favorite-card-battle-lab-ko` 저장소를 엽니다.
3. 새 파일을 업로드하고 기존 카드 앱 파일만 교체합니다.
4. Commit changes를 누릅니다.
5. 기존 영어 앱 저장소에는 어떠한 commit도 만들지 않습니다.

## 잘못 영어 앱 저장소를 열었을 때

아직 **Commit changes**를 누르지 않았다면 브라우저 뒤로 가기만 하면 됩니다. 이미 commit했다면 무작정 파일을 지우거나 reset하지 말고, 먼저 저장소 이름과 commit 화면을 캡처한 뒤 복구 방법을 확인하세요.
