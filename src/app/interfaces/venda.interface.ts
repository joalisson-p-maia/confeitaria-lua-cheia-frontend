export interface Venda {
  id?: number;
  encomendaId: number;
  quantidade: number;
  data: string;
  total: number;
}

export interface ItemVendaPayload {
  encomenda: string;
  quantidade: number;
}

export interface VendaCreatePayload {
  itens: ItemVendaPayload[];
  cliente?: string;
}