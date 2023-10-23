
type PriceTagProps = {
    price: number,
}

export default function PriceTag({ price }: PriceTagProps) {
    return (
        <div className="absolute flex items-center px-3 py-2 border-2 rounded-lg bg-background max-w-max right-2 bottom-3 ">
            <h2 className="text-lg">{price} MNX</h2>
        </div>
    )
}