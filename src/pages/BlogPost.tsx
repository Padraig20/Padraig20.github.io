import { useParams, Link } from "react-router-dom";

const postsContent: Record<string, { date: string; title: string; content: string }> = {
  "from-cs-to-bioinformatics": {
    date: "Feb 9, 2026",
    title: "From Computer Science to Bioinformatics",
    content: `When you come from a computer science background, biology can feel like the part you're "supposed" to just absorb along the way. I've been asked how I approach it many times - and honestly, I've asked myself the same question...\n\nI can't give a definitive answer, because I've heard a wide range of opinions. The most common one is: you'll get used to biology over time while doing projects. That can be true... but in practice, I often found myself missing the basics during discussions. So instead of learning with the project, I was trying to learn while keeping up with the conversation. And constantly asking about basics can be embarrassing... tough place to be in!\n\nWhat helped me most was accepting that I needed a small foundation to actually kickstart my journey. The problem is that biology has an intimidating amount of literature, and "just start reading" is a great way to procrastinate. I definitely did :)\n\nA surprisingly effective shortcut: sit in on an introductory university course. You often don't even have to enroll. Just show up (as long as the lecture hall isn't packed and you're not taking away seats from students actually taking the class). Professors are usually fine with it. And a good intro course gives you structure: vocabulary, mental models, and a sense of what actually matters.\n\nRecently, Na (my PI) also shared a resource I'm really enjoying: An Owner's Guide to the Human Genome by Jonathan Pritchard. It's very new (still in progress), well written, and FREE. If you're interested in genomics, it's a great starting point ;)`,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? postsContent[slug] : null;

  if (!post) {
    return (
      <div>
        <p className="text-muted-foreground">Post not found.</p>
        <Link to="/blog" className="text-primary text-sm hover:underline mt-2 inline-block">← Back to blog</Link>
      </div>
    );
  }

  return (
    <article className="max-w-2xl">
      <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-6 inline-block">
        ← Back to blog
      </Link>
      <span className="block text-sm text-muted-foreground mb-2">{post.date}</span>
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <div className="prose prose-sm">
        {post.content.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-foreground leading-relaxed mb-4 text-sm">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

export default BlogPost;
