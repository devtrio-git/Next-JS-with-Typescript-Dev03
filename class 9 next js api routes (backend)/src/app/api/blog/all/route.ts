import connectToDatabase from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import Blog from "../../schema/blog.schema";

export async function GET() {
    try {
        await connectToDatabase();
        const all_blogs = await Blog.find();

        return NextResponse.json(
            { data: all_blogs, message: "Blogs fetch successfully" },
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