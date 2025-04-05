export enum DocumentType {
  CPF = "cpf",
  CNPJ = "cnpj",
  RG = "rg",
}

export type DocumentFunctions = Record<DocumentType, () => string>;
