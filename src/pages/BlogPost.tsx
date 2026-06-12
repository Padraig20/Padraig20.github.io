import { useParams, Link } from "react-router-dom";

const postsContent: Record<string, { date: string; title: string; content: string }> = {
  "confession-ai": {
    date: "Jun 12, 2026",
    title: "Confession: I trusted Claude too much",
    content: `I recently heard from multiple people that many researchers don't really code everything themselves anymore. Or at least, they don't code the way we used to. They use agents, prompt a lot, let AI set up pipelines, and then mostly supervise.\n\nI'm generally a rather skeptical person, and I couldn't believe this was a good way to spend research time. But after hearing it again and again, I folded: I bought a $60 Cursor AI subscription and decided to try my new toy on a research idea I had been sitting on for a while.\n\nAnd wow. It was amazing. I felt like a little boy on Christmas. In just a few prompts, I had a whole pipeline set up that would grab data, clean it, and use it for my experiments. I could even ask the agent to run the experiments and deliver some fancy plots. Something that would normally have taken me days was suddenly finished in hours.\n\nVery quickly, I was thrown into some sort of mania. Its execution speed quickly outpaced my ability to understand what it was actually doing. Eventually, I stopped reading the full responses. I was just prompting, accepting, and moving on.\n\nAfter two days of pretty much uninterrupted prompting and very little sleep, I ran out of tokens. The result: a rabbit hole of half-baked analyses, questionable code, horrendously bloated scripts, and outputs that looked impressive but were not grounded in real understanding.\n\nThat does not mean AI can't be helpful. I think I was just using it in exactly the wrong way. At RECOMB, I had lots of conversations with people from the sequence algorithms community, and I think they had a much healthier view of the whole thing.\n\nTry thinking of your codebase as a tree of dependencies. Your core algorithms are probably somewhere in the inner nodes of this tree: many dependencies, high stakes, and lots of downstream consequences. You should write these yourself, understand them deeply, and check them rigorously. And after all, isn't designing algorithms the really exciting part of the job anyway?\n\nThe leaf nodes are different. Analyzing results, formatting tables, making plots, cleaning up one-off scripts... these are much better candidates for automation. Claude can be great here. You will often only run this code once, and the task is usually easier to verify from the output. Of course, you should still check it! But making yet another fancy plot is probably not the most intellectually exciting part of research anyways ;)\n\nI guess many of us have to go through this little "AI mania" phase before learning how to use these tools productively. AI can accelerate research dramatically, but if you stop verifying, reading, and thinking, it goes very fast... to nowhere.`,
  },
  "from-cs-to-bioinformatics": {
    date: "Feb 9, 2026",
    title: "From Computer Science to Bioinformatics",
    content: `When you come from a computer science background, biology can feel like the part you're "supposed" to just absorb along the way. I've been asked how I approach it many times - and honestly, I've asked myself the same question...\n\nI can't give a definitive answer, because I've heard a wide range of opinions. The most common one is: you'll get used to biology over time while doing projects. That can be true... but in practice, I often found myself missing the basics during discussions. So instead of learning with the project, I was trying to learn while keeping up with the conversation. And constantly asking about basics can be embarrassing... tough place to be in!\n\nWhat helped me most was accepting that I needed a small foundation to actually kickstart my journey. The problem is that biology has an intimidating amount of literature, and "just start reading" is a great way to procrastinate. I definitely did :)\n\nA surprisingly effective shortcut: sit in on an introductory university course. You often don't even have to enroll. Just show up (as long as the lecture hall isn't packed and you're not taking away seats from students actually taking the class). Professors are usually fine with it. And a good intro course gives you structure: vocabulary, mental models, and a sense of what actually matters.\n\nRecently, Na (my PI) also shared a resource I'm really enjoying: An Owner's Guide to the Human Genome by Jonathan Pritchard. It's very new (still in progress), well written, and FREE. If you're interested in genomics, it's a great starting point ;)`,
  }
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
