import connectToDatabase from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import Blog from "../../schema/blog.schema";

export async function PUT(request: NextRequest) {
    try {
        const { id, title, content } = await request.json();
        if (!id || !title || !content) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            )
        }

        await connectToDatabase();
        const existing_blog = await Blog.findById(id);

        if (!existing_blog) {
            return NextResponse.json(
                { message: "Blog not found" },
                { status: 404 }
            )
        }

        existing_blog.title = title ?? existing_blog.title;
        existing_blog.content = title ?? existing_blog.content;
        const updated_blog = await existing_blog.save();

        return NextResponse.json(
            { data: updated_blog, message: "Blog update successfully" },
            { status: 200 }
        )
    } catch (error) {
        const err = error as Error;
        console.log("Error creating blog:", err)
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        )
    }
}