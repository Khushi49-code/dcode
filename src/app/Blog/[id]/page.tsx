'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import db from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  links?: Array<{ name: string; url: string }>;
  createdAt: any;
  author?: string;
  readTime?: string;
  category?: string;
}

export default function BlogDetailPage() {
  const params = useParams();
  const blogId = params.id as string;
  
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const blogDoc = doc(db, "blogs", blogId);
      const blogSnapshot = await getDoc(blogDoc);

      if (blogSnapshot.exists()) {
        setBlog({
          id: blogSnapshot.id,
          ...blogSnapshot.data()
        } as Blog);
      } else {
        setError("Blog post not found");
      }
    } catch (err) {
      setError("Failed to load blog post");
      console.error("Error fetching blog:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="px-6 mt-20 pt-16 pb-12 max-w-4xl mx-auto">
          <div className="animate-pulse">
            {/* Header Skeleton */}
            <div className="text-center mb-16">
              <div className="h-12 bg-gray-800 rounded w-1/4 mx-auto mb-4"></div>
              <div className="h-px bg-gray-800 w-12 mx-auto"></div>
            </div>
            
            {/* Content Skeleton */}
            <div className="space-y-6">
              <div className="h-8 bg-gray-800 rounded w-3/4"></div>
              <div className="h-4 bg-gray-800 rounded w-1/4"></div>
              <div className="h-96 bg-gray-800 rounded"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-800 rounded"></div>
                <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                <div className="h-4 bg-gray-800 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="px-6 mt-20 pt-16 pb-12 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-6xl mb-4">404</p>
            <div className="w-12 h-px bg-white mx-auto opacity-50"></div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-normal mb-6">
            {error || "Blog post not found"}
          </h1>
          
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The blog post you're looking for doesn't exist or may have been moved.
          </p>
          
          <Link 
            href="/blogs"
            className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-normal hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Navigation */}
      <div className="px-6 mt-20 pt-8 max-w-4xl mx-auto">
        <Link 
          href="/Blog"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 mb-8 group"
        >
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all stories
        </Link>
      </div>

      {/* Blog Header */}
      <div className="px-6 pb-12 max-w-4xl mx-auto">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
          {blog.category && (
            <span className="px-3 py-1 border border-gray-600 text-gray-400 font-normal">
              {blog.category}
            </span>
          )}
          {blog.readTime && (
            <span>{blog.readTime} read</span>
          )}
          {blog.author && (
            <span>By {blog.author}</span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {blog.title}
        </h1>

        {/* Featured Image */}
        <div className="relative mb-12 overflow-hidden rounded-lg">
          <div className="aspect-[16/9] bg-gray-900 relative">
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6 font-normal">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* Links Section */}
        {blog.links && blog.links.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-800">
            <h3 className="text-xl font-normal mb-6 text-gray-300">Related Links</h3>
            <div className="grid gap-4">
              {blog.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-gray-800 hover:border-gray-600 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white font-normal group-hover:text-gray-300 transition-colors duration-300">
                      {link.name}
                    </span>
                  </div>
                  <svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blogs CTA
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 mb-6 font-normal">Enjoyed this story?</p>
            {/* <Link 
              href="/blogs"
              className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-normal hover:border-white/40 hover:bg-white/5 transition-all duration-300 group"
            >
              <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Explore more stories
            </Link> 
          </div>
        </div> */}
      </div>
    </div>
  );
}