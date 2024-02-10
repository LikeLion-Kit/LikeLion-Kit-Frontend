import MainEvent from "./MainEvent";
import styled from "styled-components";

const MainEvents = (props) => {

    const MainEventsBlock = styled.div`
        margin: 100px 0;
        border: 1px solid black;
        
    `

    const MainEventsTop = styled.div`
        display: flex;
        justify-content: center;
        gap: 80px;
    `

    return (
        <MainEventsBlock>
            <props.mainCategory>
                ▶ 주요 행사
            </props.mainCategory>
            <div id="main_events">
                <MainEventsTop>
                    <MainEvent
                        month={"5월"}
                        title={"아이디어톤"}
                        content={"특정 주제에 맞춰, 톡톡 튀는 아이디어로 승부합니다."}
                    />
                    <MainEvent
                        month={"8월"}
                        title={"해커톤"}
                        content={"멋쟁이 사자처럼 대학이 진행하는 역대급 규모의 무박 2일 해커톤 행사를 만나보세요."}
                    />
                    <MainEvent
                        month={"10월"}
                        title={"공모전"}
                        content={"4,000여 명의 한국, 미국 학생들이 모여 트랙별 공모전을 통해 우수 인재를 발굴합니다."}
                    />
                </MainEventsTop>
                <MainEventsTop>
                    <MainEvent
                        month={"2월"}
                        title={"실리콘밸리 기업 탐방"}
                        content={"미래 우수 인재들의 글로벌 시야를 확장하기 위해, IT 꿈의 기업들이 있는 실리콘밸리로 떠납니다."}
                    />
                    <MainEvent
                        month={"12월"}
                        title={"데모데이"}
                        content={"1년 동안 열과 성을 다해 만들어 낸 초기 스타트업을 발표하는 장입니다."}
                    />
                </MainEventsTop>
            </div>
        </MainEventsBlock>
    )
}

export default MainEvents;