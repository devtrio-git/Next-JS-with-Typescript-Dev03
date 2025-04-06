'use client';
import React from "react";

interface IProps {
    title: string;
}
export default function BlogCard({ title }: IProps) {
    const [blogs, setBlogs] = React.useState(false);
    return <div style={{ padding: '5px', border: '1px solid black', margin: '5px' }}>
        <h2>{title}</h2>
    </div>
}