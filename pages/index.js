import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TiliaH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Tilia Health" />
        <p className="description">
          Coming soon
        </p>
      </main>

    </div>
  )
}
