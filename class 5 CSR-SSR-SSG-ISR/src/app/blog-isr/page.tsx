interface IBlog {
    id: string;
    title: string;
}
// export const revalidate = 60;
async function fetchBlogs() {
    const res = await fetch("https://67f2ae93ec56ec1a36d3e03f.mockapi.io/blog", {
        cache: 'force-cache',
        next: { revalidate: 60 },
    });
    const data = await res.json();
    return data;
}

export default async function BlogClient() {
    let blogs: IBlog[] = [];
    blogs = await fetchBlogs();
    return (
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Blog's SSR</h1>
            {blogs && blogs?.map((blog) => (<div key={blog.id} style={{ padding: '5px', border: '1px solid black', margin: '5px' }}>
                <h2>{blog.title}</h2>
            </div>))}

        </div>
    );
}