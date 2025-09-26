import InstagramEmbed from "@/components/InstagramEmbed";

export default function InstagramSection() {
  const posts = [
    "https://www.instagram.com/p/DN6atlbjQ2M/",
    "https://www.instagram.com/p/DLLiCVWNaCi/",
    "https://www.instagram.com/p/DLLhXP5NRgF/",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Folgen Sie uns auf{" "}
          <span className="elbaroma-text-gradient">Instagram</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((url, idx) => (
            <InstagramEmbed key={idx} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
}
