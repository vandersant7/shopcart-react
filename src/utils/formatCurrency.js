export function formatCurrency(value) {
    if (typeof value !== "number") return "";

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}