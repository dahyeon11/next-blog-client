import type { NextPage } from 'next'
import styled from 'styled-components'

const BlogMain: NextPage = () => {
    return (
        <MainPage>
        <ContentContainer />
        </MainPage> 
    )
}

const Label = styled.div`
    font-size: 40px;
`

const MainPage = styled.div`
  background-color: #EEEEEE;
  height: 100vh;
` 

const ContentContainer = styled.div`
    width: 800px;
    height: 100vh;
    background-color: #fff;
    margin: 0 auto;
`


export default BlogMain