import { generateCNPJ } from "./functions/cnpj";
import { generateCPF } from "./functions/cpf";
import { generateRG } from "./functions/rg";
import { DocumentFunctions } from "./types";

const DocumentGenerator: DocumentFunctions = {
  cpf: generateCPF,
  cnpj: generateCNPJ,
  rg: generateRG,
};

export { DocumentGenerator };
