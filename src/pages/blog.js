
import matter from "gray-matter"
import Link from "next/link"

const Blog = (props) =>
{
  console.log(props.blogs);
  return (
    <>
    <h1>ブログページ</h1>
      {props.blogs.map((blog, index) =>
        <div key= { index }>
          <h3>{blog.frontmatter.title}</h3>
          <p>{blog.frontmatter.date}</p>
          <Link href={`/blog/${blog.slug}`}>Read More</Link>
        </div>
    )}
    </>
  );
};

export default Blog

export async function getStaticProps()
{
  const blogs = ((context) =>
  {
    const keys = context.keys();
    const values = keys.map(context);
// function
    const data = keys.map((key, index) =>
    {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return { // mapのリターン
        frontmatter: document.data,
        slug: slug
      }
    })
    return data
    // ここまで
  })(require.context('../data', true, /\.md$/))

  const ordrBlogs = blogs.sort((a, b) =>
  {
    return b.frontmatter.id - a.frontmatter.id
  })

  return {
    props: {
      blogs: ordrBlogs
    },
  }
}
