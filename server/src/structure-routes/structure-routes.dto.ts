export class AddNodeDto{
    brandId: string;
    modelId: string;

    isMainPatent: boolean;
    parentId: string;
    title: string; 

}

export class GetParentNodeDto{
    brandId: string;
    modelId: string;  
}

export class AddProductNode{
    idNode: string;
    idProduct: string;  
}