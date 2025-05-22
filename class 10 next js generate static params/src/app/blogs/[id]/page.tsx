import { fetchAllBlogQuery } from "@/app/action/blogs/all-blog.query";
import BlogDetail from "./blog-details";



export async function generateStaticParams() {
    const blogs: any = await fetchAllBlogQuery()
    return blogs.map((blog: any) => ({
        id: blog._id.toString()
    })) ?? [];
}


// if we use separate backend service... like java python php etc.. node js
// export async function generateStaticParams() {
//     const blogs: any = await fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => res.json())
//     return blogs.slice(0, 5).map((blog: any) => ({
//         id: blog.id.toString(),
//     })) ?? []
// }


interface IPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function BlogPage(props: IPageProps) {
    const { id } = await props.params
    return <BlogDetail id={id}></BlogDetail>
}