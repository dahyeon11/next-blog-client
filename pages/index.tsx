import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlogMain from '../components/BlogMain'
import Nav from '../components/Nav'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <BlogMain>
        123
      
      <Head>
        <title>다현이의 행복한 오늘</title>
        <meta content="다현이의 헹복한 오늘" />
      </Head>
      </BlogMain>
    </div>
  )
}



export default Home
