import styled from 'styled-components'

export const SelectedContent = () => {
    return (
        <Wrapper>
            <PathArea>
                <p>ExTodoList.tsx <small>src/home/pages/react/ExTodoList</small></p>
            </PathArea>
            <ContentArea>
                {/* 라인 수 찾는 모듈 필요 -> 추후 변경 */}
                {/* <Highlighter codeInfo={ExLifeCycleCode}/> */}
                {`
                    import styled from 'styled-components'
                    export const SelectedContent = () => {
                        return (
                            <Wrapper>
                                <PathArea>
                                    <p>ExTodoList.tsx <small>src/home/pages/react/ExTodoList</small></p>
                                </PathArea>
                                <ContentArea>
                                    {/* 라인 수 찾는 모듈 필요 -> 추후 변경 */}
                                </ContentArea>
                            </Wrapper>
                        )
                    }
                `}
            </ContentArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 50%;
`

const PathArea = styled.div`
`

const ContentArea = styled.div`
    width: 90%;
    height: 90%;
    white-space: pre-wrap;
`