import Blog from "@/app/api/schema/blog.schema";
import connectToDatabase from "@/config/db";
import { NextResponse } from "next/server";
export async function fetchSingleBlogQuery(id: string) {
    try {
        await connectToDatabase();
        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json(
                { message: "Blogs not found" },
                { status: 404 }
            )
        }
        return blog
    } catch (error) {
        const err = error as Error;
        console.log("Error creating blog:", err)
        return {}
    }
}