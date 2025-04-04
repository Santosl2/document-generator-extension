import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { generateCNPJ, generateCPF } from "./utils/DocumentGenerator";
import { CopyButton } from "./components/copy-button";

enum DocumentType {
  CPF = "cpf",
  CNPJ = "cnpj",
}

function App() {
  const [documentType, setDocumentType] = useState<DocumentType | "">("");
  const [response, setResponse] = useState("");
  const handleDocumentTypeChange = (value: string) => {
    setDocumentType(value as DocumentType);
  };

  const handleGenerateDocument = () => {
    const documentsFunctions: Record<DocumentType, () => string> = {
      cpf: generateCPF,
      cnpj: generateCNPJ,
    };
    const generatedDocument =
      documentsFunctions[documentType as DocumentType]();
    setResponse(generatedDocument);
  };

  return (
    <div className="text-gray-400 border p-3 h-full w-sm relative card">
      <div className="border-gradient"></div>

      <div className="p-2 card-content relative flex flex-col gap-2 items-center justify-center h-full">
        <div className="logo"></div>
        <h1 className="text-3xl font-bold text-white relative">
          Gerador de documentos
        </h1>
        <p className="text-sm text-gray-500">
          Gere documentos de forma rápida e fácil
        </p>
        <Select onValueChange={handleDocumentTypeChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Tipo do documento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cpf">CPF</SelectItem>
            <SelectItem value="cnpj">CNPJ</SelectItem>
          </SelectContent>
        </Select>

        <Button
          className="bg-white w-full"
          disabled={!documentType}
          onClick={handleGenerateDocument}
        >
          Gerar documento
        </Button>

        <hr />
        {response && (
          <>
            <p>Segue o documento gerado:</p>
            <div className="border p-3 rounded-md w-full flex gap-2 items-center">
              <p>{response}</p>
              <CopyButton text={response} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
