

const Blog = (props) =>
{
  return (
    <h1>ブログページ</h1>
  );
};

export default Blog

export async function getStaticProps()
{
  const blogs = ((context) =>
  {
    const keys = context.keys();
    const values = keys.map(context);
    console.log(keys);

  })(require.context('../data', true, /\.md$/))
  return {
    props: {
    },
  }
}
