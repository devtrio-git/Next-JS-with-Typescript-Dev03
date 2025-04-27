import Product from '@/models/product.model';
import styles from './product.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import ImageFallback from '../common/image-fallback';
interface IProps {
    data: Product
}
export default function ProductCard(props: IProps) {
    return <Link href={`/product-detail?id=${props.data.id}`}><div className={styles.product_card}>
        <figure>
            <ImageFallback src={props.data.image} fallbackSrc={'/shopping.jpeg'} alt='product img' width={300} height={300}></ImageFallback>
        </figure>
        <div>
            <p>{props.data.name}</p>
            <p>{props.data.price_label}</p>
        </div>
    </div></Link>
}