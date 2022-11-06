import styled from 'styled-components'

export const SearchBox = () => {
    return (
        <Wrapper>
            <FindInFilesArea>
                <p>Find in Files <small>10 matches in 9 files</small></p>
            </FindInFilesArea>
            <InputArea>
                <Input></Input>
            </InputArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 10%;
`

const FindInFilesArea = styled.div``

const InputArea = styled.div``

const Input = styled.input`
    width: 100%;
`
