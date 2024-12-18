import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

Hey there! I'm Weiwei, a 21-year-old boy who decided to do video editing.`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Weiwei and her works",
    openGraph: {
      title: "About Me",
      description: "Learn more about Weiwei and her works",
      images: [
        signOgImageUrl({
          title: "WeiWei",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
