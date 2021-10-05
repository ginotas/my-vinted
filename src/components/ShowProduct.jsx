

export function ShowProduct(data) {

    return (
        <div>
            <div className="size">{data.size}</div>
            <div className="price">{data.price}</div>
        </div>
    )
}