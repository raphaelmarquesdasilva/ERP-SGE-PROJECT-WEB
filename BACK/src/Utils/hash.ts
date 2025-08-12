import crypto from "crypto"


export const hashSenha = (Senha: string) => {
    const hash = crypto.createHash("md5");
    hash.update(Senha, "utf8"); // Ensure UTF-8 encoding
    return hash.digest("hex").toUpperCase(); // Match C# format with uppercase hex
}