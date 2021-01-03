import Link from "next/link";

import { Layout, Bio, SEO } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio className="my-14" />
      {posts.map(({ frontmatter: { title, author, picture, description, date }, slug }) => (
        <article key={slug}>
    <header className="mb-2">
            <h3 className="mb-2">
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="z">
                  {title}
                </a>
                
              </Link>
            </h3>
            <span className="text-sm">{date}</span><div>{author}</div>
          </header>
          <img src ={picture} />
          <section>
            <p className="mb-8 text-lg">{description}</p>  
            </section>
        <br />
            <hr />  <hr />
          <br />
       
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
