import mongoose from "mongoose";

interface IBlogModel {
    _id: mongoose.Types.ObjectId;
    title: string;
    content: string;
    createAt: Date;
    updateAt: Date;
}

const blogSchema = new mongoose.Schema<IBlogModel>({
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model<IBlogModel>('Blog', blogSchema);
export default Blog;