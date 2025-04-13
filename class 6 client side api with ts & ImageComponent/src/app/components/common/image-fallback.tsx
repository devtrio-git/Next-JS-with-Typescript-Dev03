import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useState } from "react";


interface IProps {
    src: string | StaticImport;
    alt: string;
    fallbackSrc?: string | StaticImport
    width?: number;
    height?: number;
    className?: string;
    onClick?: () => void
}
export default function ImageFallback({ src, alt, fallbackSrc, ...rest }: IProps) {
    const [img_src, setImgSrc] = useState<string | StaticImport>(src);
    useEffect(() => {
        setImgSrc(src)
    }, []);
    return <Image
        src={img_src ?? src}
        alt={alt ?? ""}
        {...rest}
        onLoad={(res) => {
            if (res.currentTarget.naturalWidth === 0 && fallbackSrc) {
                setImgSrc(fallbackSrc);
            }
        }}
        onError={() => {
            fallbackSrc && setImgSrc(fallbackSrc)
        }}

    />
}