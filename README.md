# Shall We? 💃🕺

라틴댄스 소셜 매칭 앱 — 안전하고 즐거운 댄스 파트너 및 모임 매칭

## 🎯 프로젝트 소개

"Shall We?"는 라틴댄스를 사랑하는 사람들이 안전하고 신뢰할 수 있는 환경에서 파트너와 모임을 찾을 수 있도록 도와주는 소셜 매칭 플랫폼입니다.

### ✨ 핵심 기능
- 🗓️ **댄스 모임 생성 및 참여** - 살사, 바차타, 키좀바 등 다양한 장르별 모임
- 👥 **빠른 파트너 매칭** - 레벨과 선호도 기반 실시간 매칭
- 🏆 **인증 시스템** - 학원 수강증, 동호회 인증으로 신뢰성 확보
- 📍 **장소 디렉토리** - 바, 클럽, 학원, 워크샵 장소 정보 제공
- 💬 **카카오 연동** - 오픈채팅 자동 생성 및 연결
- 🛡️ **안전 가이드** - 신고/차단 시스템과 안전 정책
- ⭐ **리뷰 시스템** - 참가자 간 후기 및 평점으로 커뮤니티 품질 관리

## 🛠 기술 스택

- **Framework**: React Native + Expo
- **UI/Styling**: NativeWind (Tailwind CSS)
- **Navigation**: React Navigation 6
- **State Management**: TBD (Zustand/Redux Toolkit)
- **Development**: TypeScript + Biome
- **Git Hooks**: Husky + Commitlint + Commitizen

## 👥 사용자 역할 및 권한

| 역할 | 설명 | 주요 권한 |
|------|------|-----------|
| **Guest** | 서비스 둘러보기 | 랜딩페이지, 도움말 열람 |
| **Member** | 기본 회원 | 모임 탐색/참가, 프로필 관리 |
| **Verified Member** | 인증된 회원 | 모임 생성, 검색 상위 노출 |
| **Host** | 모임 주최자 | 모임 관리, 참가자 승인/거절 |
| **Admin/Moderator** | 관리자 | 신고 처리, 인증 검수, 제재 |

## 📱 주요 페이지 구조

### 🏠 핵심 기능 페이지
- **홈(피드)** (`/`) - 추천 모임/파트너, 오늘의 이벤트
- **탐색** (`/discover`) - 모임/이벤트 필터링 검색
- **빠른 매칭** (`/match/quick`) - 즉시 파트너/그룹 추천
- **모임 생성** (`/parties/new`) - 새로운 댄스 모임 개설

### 👤 사용자 관리
- **프로필** (`/profile/:username`) - 레벨, 인증, 후기 확인
- **인증 센터** (`/verify`) - 학원/동호회 인증 업로드
- **내 모임** (`/me/parties`) - 참가/주최한 모임 관리

### 🏢 장소 및 커뮤니티  
- **장소 디렉토리** (`/venues`) - 바/클럽/학원 정보
- **알림함** (`/notifications`) - 매칭/모임 알림
- **후기 작성** (`/reviews/new`) - 참가 후 평가

### 🛡️ 안전 및 설정
- **신고/차단** (`/safety/report`) - 부적절한 행동 신고
- **설정** (`/settings`) - 공개범위, 알림 설정

## 📱 지원 플랫폼

- iOS (React Native)
- Android (React Native)  
- Web (PWA 지원)

## 🚀 개발 환경 설정

### 필수 요구사항
- Node.js 18+
- pnpm
- Expo CLI
- iOS Simulator (macOS) / Android Studio

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/amorfati0310/shall-we.git
cd shall-we

# 의존성 설치
pnpm install

# 개발 서버 시작
pnpm start

# 플랫폼별 실행
pnpm ios      # iOS 시뮬레이터
pnpm android  # Android 에뮬레이터
pnpm web      # 웹 브라우저
```

## 📋 개발 가이드

### 커밋 메시지 규칙
이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다.

```bash
# 대화식 커밋 (권장)
git cz

# 또는 수동 커밋
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login button styling issue"
```

### 코드 스타일
- **Linter**: Biome
- **Formatter**: Biome
- **Pre-commit**: Husky + lint-staged

```bash
# 코드 포맷팅
pnpm format

# 린팅
pnpm lint

# 전체 체크
pnpm check
```

## 🗂 프로젝트 구조

```
shall-we/
├── components/          # 재사용 가능한 UI 컴포넌트
├── screens/            # 화면 컴포넌트
├── navigation/         # 네비게이션 설정
├── hooks/              # 커스텀 훅
├── lib/                # 유틸리티 함수
├── assets/             # 이미지, 폰트 등
├── App.tsx            # 메인 앱 컴포넌트
└── global.css         # 전역 스타일
```

## 🎯 해결하고자 하는 문제

### 핵심 문제 상황 (Job Triggers)
- 🕺 **혼자 가기엔 어색할 때** - 바/클럽 파티나 워크샵에 함께 갈 사람이 없음
- 📅 **동호회 일정이 맞지 않을 때** - 내 스케줄과 기존 모임 시간이 안 맞음  
- 🤝 **새로운 파트너를 만나고 싶을 때** - 기존 네트워크의 제한성 극복
- ⚡ **즉흥적으로 춤추고 싶을 때** - "오늘 저녁 같이 춤출 사람 없나?"

### 기존 해결책의 한계
| 기존 방식 | 장점 | 단점 |
|-----------|------|------|
| 동호회/학원 | 안전하고 신뢰성 높음 | 일정 제한적, 멤버 고정 |
| 카카오 오픈채팅 | 즉시 접근 가능 | 안전성 부족, 매칭 비효율 |
| 지인 소개 | 높은 신뢰도 | 제한적 네트워크, 부담감 |

### 우리의 해결책
**"안전하면서도 즉흥적인"** 댄스 파트너 매칭을 통해:
- ✅ **즉시 매칭** - 오늘 저녁에도 파트너 찾기 가능
- ✅ **안전 보장** - 인증 시스템과 후기로 신뢰성 확보  
- ✅ **취향 맞춤** - 레벨, 장르, 선호도 기반 추천
- ✅ **부담 없음** - 가벼운 댄스 모임부터 깊은 친목까지

## 📊 성공 지표 (KPI)

- **매칭 성공률**: 앱 매칭 → 실제 만남 전환율
- **재방문율**: 첫 사용 후 일주일 내 재사용
- **만족도**: 모임 후기 평점 4.0+ 비율
- **안전 지수**: 신고/차단 비율 최소화

## 🚀 프로젝트 현황 및 계획

### 현재 상황 (2025-08-24 기준)
- ✅ **아이디어 검증 단계**: 방금 떠올린 아이디어로 검증 진행 중
- ✅ **기술 스택 결정**: React Native + Expo 환경 구축 완료
- 🔄 **시장 조사**: 라틴댄스 커뮤니티 내 니즈 확인 필요
- 📋 **MVP 설계**: 카카오톡 연동 중심의 단순 매칭 기능

### 6주 개발 계획
| 주차 | 목표 | 상세 작업 |
|------|------|-----------|
| **1주** | 기획 및 검증 | 화면 프로토타입, 동호회 내 니즈 확인 |
| **2-3주** | 스프린트 백로그 작성 | 요구사항 정의, 기능 명세, 설계 |
| **4-6주** | MVP 개발 | 프로필 관리, 모임 생성, 카카오톡 연동 |

자세한 일정은 [WEEKLY_TODO.md](./WEEKLY_TODO.md)를 참고하세요.

### 핵심 검증 과제 🚨
1. **시장 검증**: "동호회 말고 앱으로 파트너 찾으면 어떨 것 같아?" 
2. **기술 검증**: 카카오톡 API 연동 방식 리서치
3. **비즈니스 검증**: 수익화 방안 구체화

## 🎯 MVP 핵심 기능

### 앱 담당 영역
- 👤 **프로필 관리**: 댄스 경력, 선호 장르, 자기소개
- 💬 **카카오톡 연동**: 프로필 연결 및 인증
- 📝 **모임 생성**: 날짜/시간/장소 설정으로 모임 개설

### 카카오톡 담당 영역  
- 🗨️ **오픈채팅방 자동 개설**: 매칭 성사 시 즉시 채팅방 생성
- 💬 **실시간 소통**: 일정 조율, 만남 장소 공유
- 📅 **스케줄 관리**: 만남 전후 소통 및 피드백

## 🎨 디자인 철학

- **Trust First**: 인증과 후기 시스템으로 신뢰 구축
- **Instant Gratification**: 3분 내 매칭 완료
- **Community Driven**: 사용자 피드백 기반 지속 개선
- **Safety by Design**: 모든 기능에 안전장치 내재

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git cz`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의 및 피드백

- **GitHub Issues**: 버그 리포트 및 기능 요청
- **Email**: lyhy0310@gmail.com

## 👨‍💻 개발자

**amorfati0310** - [GitHub](https://github.com/amorfati0310)

---

### 💭 Job Story
*"라틴댄스를 추고 싶을 때, 나는 새로운 파트너와 어울리고 싶기 때문에 안전하게 연결되어 즐거운 시간을 보내고 싶다."*

**"Shall we dance?"** - 언제든지, 누구든지, 안전하게 💃🕺