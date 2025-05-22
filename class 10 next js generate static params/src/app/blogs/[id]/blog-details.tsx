import { fetchSingleBlogQuery } from "@/app/action/blogs/get-blog.query"
import { Constants } from "../../../../constants"

interface IBlog {
    title: string
    content: string
    _id: string
}
interface IProps {
    id: string
}

async function fetchBlog(id: string) {
    const res = await fetchSingleBlogQuery(id);
    return res;
}

// if we use separate backend service... like java python php etc.. node js
// async function fetchBlog(id: string) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => res.json())
//     return res.data;
// }


export default async function BlogDetail({ id }: IProps) {
    const blog = await fetchBlog(id);

    return <main>
        <h1>Blog {id}</h1>
        {blog && <h1>{blog.title}</h1>}
    </main>
}