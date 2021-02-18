import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
      <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>
        {postData.title}
      </h1>
      <br />
      <h2 className={utilStyles.hideId}>
       {postData.id}
      </h2>
      <br />
      <div className={utilStyles.lightText}>
      <Date dateString={postData.date}></Date>
      </div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

// export function getProfilePosts() {
//     const posts = Profile()
//     return {
//         props: {
//             posts
//         }
//     }
// }