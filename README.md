# 🦁 금오공과대학교 멋쟁이사자처럼 Likelion-Kit

- 배포 URL : http://ec2-3-27-33-141.ap-southeast-2.compute.amazonaws.com:5000/
- Test ID : test@kumoh.ac.kr
- Test PW : testPassword

<br>

## 프로젝트 소개

- LikeLion-Kit은 금오공과대학교 멋쟁이사자차럼에 대한 소개와 동아리 부원이 사용하기 위한 플랫폼입니다.
- 아기사자는 **Study** 페이지에서 스터디 자료를 받을 수 있고 **Assignment** 페이지에서 주차 별 과제를 작성해서 올릴 수 있습니다.
- 운영진은 **Study** 페이지에서 스터디 자료 및 정보를 공유하고 **Assignment** 페이지에서 과제를 피드백 할 수 있습니다.
- **Project** 페이지에서 활동하면서 만들었던 프로젝트를 업로드 할 수 있습니다.

<br>

## 팀원 구성

<div align="center">

| **프론트엔드** | **프론트엔드** | **백엔드** | **백엔드** |
| :------: |  :------: | :------: | :------: |
| 황용진 | 정채연 | 강민기 | 김건우 |

</div>

<br>

## 1. 개발 환경

- Front : HTML, React, styled-components, Justand, React-Qeury
- Back-end : Java, Spring
- 버전 및 이슈관리 : Github, Github Issues, Github Project
- 협업 툴 : Discord, Notion, Github
- 서비스 배포 환경 : AWS EC2
<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, styled-component

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
- styled-component
    - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
    
### Justand

- 

### eslint, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
- airbnb의 코딩 컨벤션을 참고해 사용했고, 예외 규칙은 팀원들과 협의했습니다.
- 협업 시 매번 컨벤션을 신경 쓸 필요 없이 빠르게 개발하는 데에 목적을 두었습니다.

### 브랜치 전략

- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
    - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
    - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 3. 프로젝트 구조



<br>

## 4. 프론트엔드 역할 분담

### 🍊황용진

- **UI**
    - 페이지 : 
    - 공통 컴포넌트 : 
- **기능**
    - 

<br>
    
### 👻정채연

- **UI**
    - 페이지 : 
    - 공통 컴포넌트 : 
- **기능**
    - 

<br>


## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-02-03 ~ 
- UI 구현 : 2024-02-15 ~ 
- 기능 구현 : 

<br>

### 작업 관리

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다.

<br>

## 6. 신경 쓴 부분

## 7. 페이지별 기능
