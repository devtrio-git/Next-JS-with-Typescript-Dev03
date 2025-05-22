import Blog from "@/app/api/schema/blog.schema";
import connectToDatabase from "@/config/db";

export async function fetchAllBlogQuery() {
    try {
        await connectToDatabase();
        const all_blogs = await Blog.find();
        return all_blogs
    } catch (error) {
        const err = error as Error;
        console.log("Error creating blog:", err)
        return []
    }
}