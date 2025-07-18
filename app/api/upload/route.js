// /app/api/upload/route.js
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get("image");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filename = `${Date.now()}_${file.name}`;
  const filePath = path.join(uploadDir, filename);
  await writeFile(filePath, buffer);

  return NextResponse.json({ success: true, imageUrl: `/uploads/${filename}` });
}
