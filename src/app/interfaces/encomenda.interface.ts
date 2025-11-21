export interface Encomenda {
  id?: number;
  nome: string;
  preco: number;
  imagem?: string;
  insumos: { insumoId: number, quantidade: number }[];
}
