import { ExternalLink, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const blogs = [
  {
    name: "Product Compass",
    url: "https://www.productcompass.pm/",
    description: "Strategic product management insights"
  },
  {
    name: "Aakash G News",
    url: "https://www.news.aakashg.com/",
    description: "Product & tech industry updates"
  },
  {
    name: "Hello PM",
    url: "https://hellopm.co/resources/",
    description: "PM resources and guides"
  },
  {
    name: "Lenny's Newsletter",
    url: "https://www.lennysnewsletter.com/",
    description: "Product growth and strategy"
  },
  {
    name: "SVPG",
    url: "http://svpg.com/articles/",
    description: "Product leadership articles"
  }
];

export function TopBlogs() {
  return (
    <section className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-6 w-6 text-chart-2" />
            <h2 className="text-3xl font-bold" data-testid="text-blogs-title">
              Top Blogs I Follow
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Essential reading for product managers and leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <a
              key={blog.name}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              data-testid={`link-blog-${blog.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            >
              <Card className="p-6 h-full hover-elevate active-elevate-2 transition-smooth glass gradient-border animate-fade-in-scale" style={{ animationDelay: `${blogs.indexOf(blog) * 100}ms` }}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-chart-2 transition-colors">
                    {blog.name}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-chart-2 transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {blog.description}
                </p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
