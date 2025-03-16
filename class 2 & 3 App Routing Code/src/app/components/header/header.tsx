'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './header.module.css';

let routes = [
    {
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        name: "Inventory",
        href: "/inventory",
    },
]

export default function Header() {
    const path = usePathname();

    return <header style={{ display: 'flex', gap: 20, margin: 50, justifyContent: "center" }}>
        {routes.map((r) => {
            const active = path == r.href
            return <Link className={`${active && styles.active}`} href={r.href}>{r.name}</Link>
        })}
    </header>
}