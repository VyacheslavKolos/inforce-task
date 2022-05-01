import {axiosService} from "./axios.service";

import {IProduct} from "../interfaces";
import {urls} from "../constants";

export const productService = {
    getAll: () => axiosService.get<IProduct[]>(urls.products),
    create: (product: IProduct) => axiosService.post<IProduct>(urls.products, product),
    deleteById: (id: number) => axiosService.delete<void>(`${urls.products}/${id}`)
}
