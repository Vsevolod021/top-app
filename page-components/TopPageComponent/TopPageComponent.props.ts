import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";

export interface TopPageComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}