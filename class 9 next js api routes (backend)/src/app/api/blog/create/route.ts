import connectToDatabase from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import Blog from "../../schema/blog.schema";

export async function POST(request: NextRequest) {
    try {
        const { title, content } = await request.json();
        if (!title || !content) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            )
        }

        await connectToDatabase();

        const newBlog = new Blog({ title, content });
        const saveBlog = await newBlog.save();

        return NextResponse.json(
            { data: saveBlog, message: "Blog created successfully" },
            { status: 201 }
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