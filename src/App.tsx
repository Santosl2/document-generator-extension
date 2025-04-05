import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { DocumentGenerator } from "./utils/DocumentGenerator";
import { CopyButton } from "./components/copy-button";
import { DocumentType } from "./utils/types";

function App() {
  const [documentType, setDocumentType] = useState<DocumentType | "">("");
  const [response, setResponse] = useState("");
  const handleDocumentTypeChange = (value: string) => {
    setDocumentType(value as DocumentType);
  };

  const handleGenerateDocument = () => {
    const generatedDocument = DocumentGenerator[documentType as DocumentType]();
    setResponse(generatedDocument);
  };

  return (
    <section className="grid gap-2 w-sm">
      <div className="text-gray-400 border p-3 h-full w-full relative card">
        <div className="border-gradient"></div>

        <div className="p-2 card-content relative flex flex-col gap-2 items-center justify-center h-full">
          <div className="logo"></div>
          <h1 className="text-2xl font-bold text-white relative">
            Gerador de Documentos
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
              <SelectItem value="rg">RG</SelectItem>
            </SelectContent>
          </Select>

          <Button
            className="bg-white w-full"
            disabled={!documentType}
            onClick={handleGenerateDocument}
          >
            Gerar
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

          <p className="text-xs text-gray-500">
            Desenvolvido por{" "}
            <a
              href="https://github.com/Santosl2"
              target="_blank"
              className="text-blue-500 hover:text-blue-700 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              Matheus Filype
            </a>
          </p>
          <p className="text-xs text-gray-500 text-center">
            Este projeto é apenas para fins educacionais e não deve ser usado
            para fins ilegais.
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
