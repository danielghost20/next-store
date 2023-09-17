
type PriceTagProps = {
    price: number,
}

export default function PriceTag({ price }: PriceTagProps) {
    return (
        <div className="absolute flex items-center px-3 py-2 duration-200 border-2 rounded-lg cursor-pointer bg-background max-w-max right-2 bottom-3 hover:bg-foreground hover:text-background">
            <h2 className="text-lg">{price} MNX</h2>
        </div>
    )
}