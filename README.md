# Favorite Card Battle Lab

## 이번 업데이트: 배틀 타격감

- 대결을 시작하면 양쪽 카드가 가운데로 “쿵!” 하고 부딪히는 모션이 나옵니다.
- 충돌 순간 카드와 배틀 화면이 짧게 흔들리고, 중앙에 빛나는 충격파가 나타납니다.
- Android 휴대폰처럼 브라우저 진동을 지원하는 기기에서는 아주 짧은 진동도 같이 실행됩니다. iPhone/Safari에서는 진동 API가 제한되어 화면 애니메이션만 보일 수 있습니다.

아이와 함께 캐릭터를 발견하고, 대결하고, 종이 카드로 인쇄해 볼 수 있는 로컬 전용 웹 앱입니다. 기본 팩은 **DOORS 10장, SCP 10장, Brainrot 10장**만 사용하며 30장 모두 캐릭터 전용 일러스트가 있습니다. 임시 동물·음식 이모티콘 카드는 제거했습니다.

> 여기서 “원작 캐릭터”는 게임·SCP 문서·인터넷 밈에서 알려진 캐릭터의 핵심 외형을 뜻합니다. 그림 자체는 공식 이미지를 복사한 것이 아니라 이 프로젝트용으로 새로 제작한 비공식 팬아트입니다.

## 가장 쉬운 사용 방법

컴퓨터 한 대에서만 시험할 때는 `index.html`을 바로 열어도 됩니다. 하지만 아이폰과 컴퓨터에서 편하게 접속하려면 이 폴더를 **GitHub Pages**에 올리는 방법을 추천합니다.

> **공개 범위 주의:** GitHub 공식 안내에 따르면 GitHub Pages 사이트는 저장소가 비공개여도 인터넷에 공개됩니다. 이 앱에는 DOORS·SCP·브레인랏 비공식 팬 카드도 포함되어 있습니다. 판매·광고·공식 콘텐츠인 것처럼 사용하는 용도가 아니라 가족용 팬 프로젝트로만 사용하세요. 아이가 앱에서 나중에 추가하는 사진, 카드, 레벨, 이야기는 GitHub로 자동 전송되지 않고 해당 기기의 브라우저에만 저장됩니다.

기존 영어 앱을 이미 GitHub Pages에서 운영하고 있다면 먼저 **[기존 영어 앱에 영향 없이 별도로 배포하기](DEPLOY_SEPARATELY.md)**를 읽으세요. 핵심은 영어 앱 저장소에 파일을 섞지 않고 `favorite-card-battle-lab-ko`라는 새 저장소를 만드는 것입니다.

## GitHub Pages에 올리기 — 마우스로 하는 방법

### 1. 압축 풀기

1. `Favorite-Card-Battle-Lab.zip`을 마우스 오른쪽 버튼으로 클릭합니다.
2. **모두 압축 풀기**를 선택합니다.
3. 압축을 푼 폴더 안에 아래 항목이 있는지 확인합니다.

```text
index.html
style.css
app.js
README.md
IMAGE_PROMPTS.md
assets/
```

`index.html`이 폴더의 첫 단계에 있어야 합니다. 폴더가 두 겹으로 들어가면 Pages에서 404 오류가 날 수 있습니다.

### 2. GitHub 저장소 만들기

1. [GitHub](https://github.com)에 로그인합니다. 계정이 없다면 무료 계정을 만듭니다.
2. 오른쪽 위의 **＋** 버튼을 누르고 **New repository**를 선택합니다.
3. Repository name에 `favorite-card-battle-lab`을 입력합니다.
4. 설명은 `Our private family card battle project` 정도로 적어도 됩니다.
5. 무료 계정에서 Pages를 간단히 사용하려면 **Public**을 선택합니다.
6. **Create repository**를 누릅니다.

참고로 GitHub Free는 공개 저장소에서 Pages를 사용할 수 있습니다. GitHub Pro/Team 등은 비공개 저장소에서도 Pages를 설정할 수 있지만, **완성된 Pages 사이트 자체는 여전히 인터넷에 공개**됩니다.

### 3. 앱 파일 업로드하기

1. 새 저장소 화면에서 **Add file → Upload files**를 누릅니다.
2. 압축을 푼 폴더를 열고, `index.html`, `style.css`, `app.js`, 문서 파일, `assets` 폴더를 모두 선택해 업로드 영역으로 끌어다 놓습니다.
3. 화면 아래 Commit message에 `Upload Favorite Card Battle Lab`이라고 적습니다.
4. **Commit changes**를 누릅니다.

중요한 점은 바깥쪽 폴더가 아니라 **그 안의 파일과 `assets` 폴더**를 올리는 것입니다. 저장소 첫 화면에서 `index.html`이 바로 보여야 합니다.

### 4. GitHub Pages 켜기

1. 저장소 위쪽의 **Settings**를 누릅니다.
2. 왼쪽 메뉴의 **Pages**를 누릅니다.
3. **Build and deployment** 아래 Source를 **Deploy from a branch**로 선택합니다.
4. Branch는 **main**, 폴더는 **/(root)**를 선택합니다.
5. **Save**를 누릅니다.
6. 몇 분 기다린 뒤 Pages 화면을 새로고침합니다. **Visit site** 버튼이 나타나면 누릅니다.

주소는 보통 아래 모양입니다.

```text
https://깃허브아이디.github.io/favorite-card-battle-lab/
```

GitHub 공식 안내상 첫 배포나 변경 반영에 최대 10분 정도 걸릴 수 있습니다.

### 5. 아이폰 홈 화면에 설치하기

1. 아이폰 **Safari**에서 위 GitHub Pages 주소를 엽니다.
2. 아래쪽의 **공유** 버튼을 누릅니다.
3. **홈 화면에 추가**를 선택합니다.
4. 이름을 `Card Battle Lab`으로 정하고 **추가**를 누릅니다.
5. 이제 홈 화면 아이콘으로 앱처럼 실행할 수 있습니다.

## 저장 방식 — 꼭 읽어 주세요

- 앱에서 만든 카드, 사진, XP, 레벨, 이야기는 GitHub 계정이 아니라 **현재 브라우저의 localStorage**에 저장됩니다.
- 같은 주소라도 아이폰과 컴퓨터의 컬렉션은 자동 동기화되지 않습니다.
- 다른 기기로 옮길 때는 **설정 → 백업 JSON 저장** 후 새 기기에서 **백업 불러오기**를 사용합니다.
- 백업 JSON에는 직접 만든 카드 사진과 모든 진행 정보가 들어갈 수 있으므로 GitHub에 올리거나 다른 사람에게 보내지 않는 것이 좋습니다.
- Safari 기록 및 웹사이트 데이터를 삭제하거나 홈 화면 앱을 제거하면 데이터가 사라질 수 있습니다. 중요한 변화가 있을 때마다 백업하세요.
- 저장소 이름이나 Pages 주소를 바꾸면 브라우저가 다른 앱으로 인식합니다. 주소 변경 전 반드시 백업하세요.

## 앱 업데이트하기

제가 나중에 새 버전을 만들어 드리면 다음 순서로 바꿀 수 있습니다.

1. 기존 앱에서 **설정 → 백업 JSON 저장**을 먼저 누릅니다.
2. GitHub 저장소에서 **Add file → Upload files**를 누릅니다.
3. 새 `index.html`, `style.css`, `app.js`와 필요한 `assets` 파일을 다시 업로드합니다.
4. 같은 이름의 파일을 교체한다는 표시를 확인하고 **Commit changes**를 누릅니다.
5. 최대 10분 후 Pages 주소를 새로고침합니다.

코드만 업데이트하는 경우 같은 Pages 주소와 같은 브라우저를 사용하면 기존 localStorage 데이터는 보통 그대로 남습니다. 그래도 먼저 백업하는 습관이 가장 안전합니다.

## 자주 생기는 문제

### `404 There isn't a GitHub Pages site here`가 나올 때

- Settings → Pages에서 **main / (root)**가 선택되었는지 확인합니다.
- 저장소 첫 화면에 `index.html`이 바로 보이는지 확인합니다.
- 처음 배포한 뒤 10분 정도 기다립니다.

### 그림이 보이지 않을 때

- 저장소에 `assets` 폴더가 있는지 확인합니다.
- `assets/seek-v2.webp`처럼 파일 이름의 대소문자가 바뀌지 않았는지 확인합니다.
- 폴더 안의 그림 파일까지 전부 업로드되었는지 확인합니다.

### 수정했는데 예전 화면이 보일 때

- GitHub Pages 배포가 끝날 때까지 잠시 기다립니다.
- Safari를 완전히 닫았다가 다시 열거나 페이지를 새로고침합니다.
- GitHub 저장소의 **Actions** 탭에서 Pages 배포가 초록색 체크로 끝났는지 확인합니다.

### 다른 가족에게 주소를 보내도 되나요?

가능하지만 주소를 받은 사람은 기본 앱 화면을 열 수 있습니다. 각 사람의 카드와 진행 정보는 각자의 브라우저에 따로 저장되므로 서로 보이지 않고 자동 공유되지도 않습니다.

## 컴퓨터에서만 바로 시작하기

1. `index.html`을 Chrome, Edge 또는 Safari에서 엽니다.
2. 처음에는 Favorite Boss 카드 **Seek**와 **Shy Guy**가 들어 있습니다.
3. `발견`에서 무료 카드 3장을 찾거나, `만들기`에서 아이의 그림/사진으로 새 카드를 만듭니다.

별도 설치, 계정, 서버, 결제는 없습니다. 모든 데이터는 해당 브라우저의 `localStorage`에만 저장됩니다. 브라우저 데이터를 지우기 전에 **설정 → 백업 JSON 저장**을 사용하세요.

## GitHub 없이 같은 Wi-Fi에서 아이폰으로 사용하기

컴퓨터와 아이폰을 같은 Wi-Fi에 연결한 뒤 이 폴더에서 간단한 정적 서버를 실행합니다.

```powershell
python -m http.server 8000
```

아이폰 Safari에서 `http://컴퓨터의-로컬-IP:8000`을 엽니다. 공유 버튼의 **홈 화면에 추가**를 사용하면 앱처럼 실행할 수 있습니다.

이 방식은 인터넷에 공개되지 않지만, 컴퓨터에서 서버를 실행해 둔 동안에만 아이폰에서 접속할 수 있습니다.

## 아이와 함께 노는 추천 순서

1. 종이에 캐릭터를 그립니다.
2. `내 카드 만들기`에서 사진을 찍고 능력치와 약점을 정합니다.
3. Quick Battle로 균형을 시험합니다.
4. Story Battle로 캐릭터의 세계를 만듭니다.
5. Roblox/Minecraft 체크리스트로 실제 공간을 제작합니다.
6. 컬렉션의 `인쇄` 버튼으로 카드를 출력하고 오립니다.

## 파일

- `index.html` — 화면 구조
- `style.css` — 모바일 우선 디자인과 인쇄 레이아웃
- `app.js` — 일러스트 카드 30장, 팩 3종, 대결, 레벨, 저장, 가져오기/내보내기 로직
- `assets/` — DOORS·SCP·Brainrot 캐릭터별 WebP 카드 일러스트 30장(약 2.6MB)
- `FAN_CONTENT_NOTICE.md` — DOORS·SCP·브레인랏 팬 콘텐츠와 SCP 라이선스 출처
- `DEPLOY_SEPARATELY.md` — 기존 영어 앱과 분리해 GitHub Pages에 올리는 상세 설명

## GitHub 공식 참고 문서

- [GitHub Pages 사이트 만들기](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [웹브라우저에서 저장소에 파일 올리기](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [GitHub Pages 소개](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
