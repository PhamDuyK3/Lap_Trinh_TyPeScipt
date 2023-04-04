export interface IProduct {
    id: number,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: {base_url: string}[],
    brand: {id: number, name: string, slug: string},
    specifications: ISpecification[]
}

interface ISpecification {
    name: string,
    attributes: {code: string, value: string, name: string}[]
}