import connectToDatabase from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import Blog from "../../../schema/blog.schema";
import mongoose from "mongoose";

interface IGetBlogApiParams {
    params: Promise<{ id: mongoose.Types.ObjectId }>
}
export async function DELETE(req: NextRequest, { params }: IGetBlogApiParams) {
    try {
        const { id } = await params;
        await connectToDatabase();

        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return NextResponse.json(
                { message: "Blogs not found" },
                { status: 404 }
            )
        }
        return NextResponse.json(
            { data: blog, message: "Blog delete successfully" },
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