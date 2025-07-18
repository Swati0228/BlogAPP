import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { writeFile } from "fs/promises";

await ConnectDB(); // Connect to DB once

// -------- GET ALL or ONE BLOG -------- //
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");

  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// -------- CREATE NEW BLOG (with image) -------- //
export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");

    if (!image) {
      return NextResponse.json({ msg: "No image provided" }, { status: 400 });
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filename = `${timestamp}_${image.name}`;
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    const imgUrl = `/uploads/${filename}`;

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
    };

    await BlogModel.create(blogData);
    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ msg: "Error uploading image" }, { status: 500 });
  }
}

// -------- UPDATE EXISTING BLOG (with optional image change) -------- //


// -------- DELETE BLOG (and image) -------- //
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  const blog = await BlogModel.findById(id);
  if (!blog) return NextResponse.json({ msg: "Blog not found" }, { status: 404 });

  const imagePath = path.join(process.cwd(), "public", blog.image);
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }

  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" });
}
export async function PUT(request) {
  try {
    const body = await request.json(); // ✅ FIXED LINE
    const { id, title, author, image, description } = body;

    const existing = await BlogModel.findById(id);
    if (!existing) {
      return Response.json({ success: false, message: "Blog not found" }, { status: 404 });
    }

    existing.title = title;
    existing.author = author;
    existing.image = image;
    existing.description = description;

    await existing.save();

    return Response.json({ success: true, blog: existing });
  } catch (err) {
    console.error("PUT Error:", err);
    return Response.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
