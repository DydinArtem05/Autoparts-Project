export class CreateBrandDto {
    title: string;
    description: string;
    image: string[];
}


export class CreateModelDto {
    title: string;
    description: string;
    brandId: string;
}


