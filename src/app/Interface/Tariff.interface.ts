export interface Tariff{
    
    id: number
    sku: string
    speed: number
    priceList: {
        id: number;
        price: number;
        contactDuration: number;
        oneTime: boolean;
      }[]; 
}