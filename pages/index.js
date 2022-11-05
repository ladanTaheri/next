import Head from 'next/head'
// import Home from '../components/home/Home';
import NewHome from './../components/home/Home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>اداک</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewHome />
    </div>
  )
}
