# 스터디냥 - 학부모

스터디냥과 별도로 배포하는 학부모 학습 대시보드 목업입니다.

https://js97lee.github.io/studynyang-parent/

- HTML/CSS/JavaScript 정적 사이트. 빌드 없이 GitHub Pages로 배포합니다.
- 모든 데이터는 2026-09-13 기준 예시입니다. 실제 계정/데이터 저장소는 연결하지 않습니다.
- 기간 변경, 과목 필터, 학습 기록, 목표, 학부모/학생 모드, CSV 내보내기를 체험할 수 있습니다.
- 가족 연결 체험 코드: NYANG26.
- 고양이 이미지는 참조 캐릭터를 바탕으로 내장 이미지 생성 도구로 제작한 3포즈입니다.

로컬 실행: `python3 -m http.server 4174 --directory studynyang-parent` (상위 프로젝트 폴더에서 실행).

## 냥냥이 인터랙션

`/interaction/`: Three.js로 모델링한 턱시도 고양이, 자연스러운 대기 애니메이션, 포인터/드래그 반응, 인사/응원/휴식, 예시 답변 채팅과 선택형 음성 읽기.
카메라는 버튼을 누르고 권한을 허용할 때만 활성화됩니다. MediaPipe Face Detector를 브라우저에서 실행하여 얼굴 위치를 추적합니다. 신원 또는 감정은 판별하지 않습니다. 영상은 저장/업로드하지 않으며 탭을 떠나면 카메라를 종료합니다. 인식 모듈·모델은 외부 CDN에서 다운로드합니다.
실제 카메라와 음성은 지원 브라우저/권한에 따라 다르며 실제 기기에서 확인이 필요합니다. 대화는 AI 연결 없이 규칙 기반 답변입니다.
[MediaPipe 공식 문서](https://ai.google.dev/edge/mediapipe/solutions/vision/face_detector/web_js)
