"use client"

import { assets } from "@/Assets/assets";
import Footer from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const { id } = useParams(); // ✅ Correct way to get dynamic ID
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchBlogData = async () => {
      const response = await axios.get("/api/blog", {
        params: { id },
      });
      setData(response.data);
    };

    fetchBlogData();
  }, [id]);

  const handleAdminRedirect = () => {
    router.push("/admin"); // ✅ Navigate to admin
  };

  return data ? (
    <>
      <div className="bg-zinc-950 py-5 px-5 md:px-12 lg:px-28 text-white">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl sm:text-3xl">
            Posts
          </Link>

          {/* Admin Redirect Button */}
          <div className="w-full flex justify-end px-4 py-4 z-10">
            <button
              onClick={handleAdminRedirect}
              className="relative inline-flex items-center gap-2 px-4 py-2 border-2 border-black font-semibold bg-white text-black group"
            >
              Get started
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
              <span className="absolute bottom-0 right-0 w-full h-full bg-black -z-10 translate-x-1 translate-y-1"></span>
            </button>
          </div>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-bold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <p className="mt-1 pb-2 max-w-[740px] mx-auto">{data.author}</p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="object-cover h-[270px] sm:h-[500px]"
          src={data.image}
          width={1280}
          height={720}
          alt="Blog image"
        />

        <div className="blog-content px-4 py-6 max-w-4xl mx-auto text-gray-800">
          {/* Blog HTML Description */}
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>

          {/* Edit Button */}
          <div className="mt-10 space-y-10">
            <Link href={`/admin/editBlog?id=${id}`}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit Blog
              </button>
            </Link>

            <div className="my-24">
              <p className="text-black font-semibold my-4">Share this article</p>
              <div className="flex gap-4">
                <Image src={assets.facebook_icon} width={50} alt="Facebook" />
                <Image src={assets.twitter_icon} width={50} alt="Twitter" />
                <Image src={assets.googleplus_icon} width={50} alt="Google" />
              </div>
            </div>
          </div>
        </div>

        <div className="my-24">
          <p className="text-black font-bold my-4">Created by: SWATI SINGH</p>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
