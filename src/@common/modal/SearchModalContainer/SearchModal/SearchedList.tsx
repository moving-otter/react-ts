import styled from 'styled-components'

export const SearchedList = () => {
    const categories = [
        'In Project',
        'Module',
        'Directory',
        'Scope'
    ]

    const searchedList = [
        'const dispatch = useDispatch();',
        'const {uiState} = useStoreState();',
        'export const toggleSidebar = () => {',
        'const initialState = {',
        'const UiReducer = (state = initialState, action) => {',
        'const categories = [',
        'const Wrapper = styled.div`',
        'export const Component = () => {...}',
        'export const Component = (props: {',
        'const addItem = (text) => {',
    ]

    return (
        <Wrapper>
            <CategoryArea>
                <ul>
                    {categories.map(category => <li>{category}</li>)}
                </ul>
            </CategoryArea>
            <ListArea>
                <ul>
                    {searchedList.map(searchedItem => <li>{searchedItem}</li>)}
                </ul>
            </ListArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 40%;
`

const CategoryArea = styled.div`
    ul li {
        list-style-type: none;
        display: inline;
        margin-right: 0.5vw;
        padding: 0.5vw;
    }
`

const ListArea = styled.div`
    height: 90%;
    background: #5c5c5c;
    overflow-y: auto;
    
    ul li {
        padding: 0.3vw;
    }
`