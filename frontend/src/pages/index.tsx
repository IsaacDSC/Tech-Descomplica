import type { NextPage } from 'next'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'

//import components
import NavBar from '../components/nav/nav'
import { Students } from '../components/students'
import { Banner } from '../components/banner'
import { AsideBar } from '../components/asidebar'


/* const AllLinksQuery = gql`
  query GetStudents {
  getStudents {
    id
    nome
    CPF
    email
    status
  }
}
`
const data = useQuery(AllLinksQuery)
{data} */


const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
      </Head>
      <div className="container"><NavBar></NavBar></div>
      <AsideBar></AsideBar>
     {/*  <Banner title='Isaac' subtitle='DSC'></Banner> */}
      <Students></Students>
      {/*  <NavHome />
      <SafeEnviroment />
      <Banner title={'titulo'} subtitle={'subtitle'} />
      <FooterApp /> */}
    </div>
  )
}

export default Home