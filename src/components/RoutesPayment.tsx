"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function RoutesPayment() {
    const path = usePathname()
    const pathUrl = [
        {
            name: 'datos',
            url: '/payment/product-details'
        },
        {
            name: 'metodo de pago',
            url: '/payment/product-details/payment-card'
        },
        {
            name: 'confirmar compra',
            url: '/payment/product-details/payment-success'
        }
    ]
    return (
        <div className="flex gap-4 px-3 py-2 max-w-nax">
            {
                pathUrl.filter(item => path.startsWith(item.url)).map(item => (
                    <Link href={item.url} key={item.url}>
                        {item.name}  /
                    </Link>
                ))
            }
        </div>
    )
}