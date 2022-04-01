import instance from "./intansce";

export const list = () => {
    const url = '/products';
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const add = (product) => {
    const url = `/products`;
    return instance.post(url, product);
}
export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}
export const read = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}