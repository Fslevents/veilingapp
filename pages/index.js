
import Head from 'next/head'
import dynamic from 'next/dynamic'

const VeilingForm = dynamic(() => import('../components/VeilingForm'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Veiling App</title>
      </Head>
      <main>
        <VeilingForm />
      </main>
    </>
  );
}
