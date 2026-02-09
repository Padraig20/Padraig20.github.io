import { Link } from "react-router-dom";

const posts = [
  {
    slug: "from-cs-to-bioinformatics",
    date: "Feb 9, 2026",
    title: "From Computer Science to Bioinformatics",
    excerpt: "A question I heard (and asked myself) a lot: how to approach biology when coming from a Computer Science background?",
  }
];

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className="group block">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <h2 className="text-lg font-serif font-bold mt-1 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
