export default function PaymentSuccessPage() {
    return (
        <main className="flex items-center justify-center w-full h-screen px-3">
            <div className="max-w-2xl p-2 m-auto border-gray-600 rounded-b-md borser-b-2">
                <h1 className="flex items-center justify-center h-24 text-3xl bg-green-600 text-background">Compra realizada !!</h1>
                <div className="">
                    <h2 className="my-2 text-2xl font-medium">Gracias por su orden</h2>
                    <p className="my-2 text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolores praesentium neque ut, impedit ipsum modi tempore dolorum
                        explicabo similique inventore quas nemo iure, expedita iste rem velit.
                        Magni, illo.
                    </p>
                    <p className="w-full py-3 text-left border-b-2">13 ago 2023</p>
                </div>
                <h2 className="my-2 text-xl font-semibold">Items</h2>
                <div className="w-full px-2">
                    <div className="flex justify-between">
                        <span>
                            Producto de nombre
                        </span>
                        <span>
                            $ 124.00
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>
                            Producto de nombre
                        </span>
                        <span>
                            $ 124.00
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
