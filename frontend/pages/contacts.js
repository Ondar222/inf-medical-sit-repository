import parser from 'html-react-parser'
import Head from 'next/head'
import { PageName } from "../components/PageName/PageName";
import MainPageLayout from '../layouts/MainPageLayout';

export const getServerSideProps = async () => {
  const content = await fetch(`${process.env.APIpath}/api/contacts-page?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.token}`
    }
  })
    .then((res) => res.json())
    .then((res) => res.data)

  return {
    props: {
      content
    }
  }
}

export default function Contacts({ content }) {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <MainPageLayout>
        <PageName title="Контакты" />
        <div className="xs:w-full md:w-9/12">
          {parser(content?.page?.content)}
          <div>

          </div>
          <div className="flex flex-col gap-5 text-xl font-semibold">
            <p>ИНФЕКЦИОННАЯ БОЛЬНИЦА</p>
            <iframe className='map__inf' src="https://yandex.ru/map-widget/v1/?um=constructor%3A2b745d8d35ef4d249a81bbf8d45e8f04ab93f842e27226a913c0496f7b4e812f&amp;source=constructor" width="918" height="600"></iframe>
          </div>

        </div>
      </MainPageLayout>
    </>
  )
}