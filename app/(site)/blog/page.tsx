import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};
const BlogData = [
  {
    path: "birthday", // Path set as number
    mainImage: "/images/blog/bd.png",
    title: "BirthDay Event",
    metadata: "Details about Birthday Event",
  },
  {
    path: 2,
    mainImage: "/images/blog/blog-02.png",
    title: "Wedding Event",
    metadata: "Details about Wedding Event",
  },
  {
    path: 3,
    mainImage: "/images/blog/blog-03.png",
    title: "Engagement Event",
    metadata: "Details about Engagement Event",
  },
  {
    path: 4,
    mainImage: "/images/blog/blog-03.png",
    title: "Baby Shower Event",
    metadata: "Details about Baby Shower Event",
  },
  {
    path: 5,
    mainImage: "/images/blog/blog-04.png",
    title: "Event05",
    metadata: "Details about Event05",
  },
  {
    path: 6,
    mainImage: "/images/blog/blog-01.png",
    title: "Event06",
    metadata: "Details about Event06",
  },
];
const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
