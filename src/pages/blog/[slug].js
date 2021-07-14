
import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'
import Layout from "../../components/layout"


const singleBog = (props) =>
{
  console.log(props);
  return (
    <Layout>
      <h3>{props.frontmatter.title}</h3>
      <p>{props.frontmatter.date}</p>
      <ReactMarkdown children={props.markdownBody} />
    </Layout>
  )
}


export default singleBog

// これはPathを作る関数
export async function getStaticPaths()
{
  const blogSlugs = ((context) =>
  {
    const keys = context.keys();
    const data = keys.map((key, index) =>
    {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
      return slug;
    })
    return data;
  })(require.context('../../data', true, /\.md$/))


  const paths = blogSlugs.map((blogSlug) => `/blog/${blogSlug}`) // ここで/blog/の[slug]を規定
  return {
    paths: paths,
    fallback: false,
  }

}

export async function getStaticProps(context)
{
  const { slug } = context.params
  const data = await import(`../../data/${slug}.md`)
  const singleDocument = matter(data.default);
  return {
    props: {
      frontmatter: singleDocument.data,
      markdownBody: singleDocument.content,
    }
  }
}
