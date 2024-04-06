import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function SalesReport() {
  useEffect(() => {
    api
      .get("/sales", { withCredentials: true })
      .then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <h1>Relatório de Vendas</h1>
    </Container>
  );
}
