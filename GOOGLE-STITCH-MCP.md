# Como usar Google Stitch MCP no Cursor

Guia para conectar o **Google Stitch** ao Cursor via MCP (Model Context Protocol). O Stitch permite que a IA use seus designs de UI/UX e gere telas a partir de contexto.

**Repositório oficial:** [Kargatharaakash/stitch-mcp](https://github.com/Kargatharaakash/stitch-mcp) — *Universal MCP Server for Google Stitch* (Aakash Kargathara, Apache 2.0).

---

## O que você precisa

- Conta Google Cloud
- Node.js instalado (para o `npx` funcionar)
- Cursor com suporte a MCP (Composer/Agent)

---

## Passo 1: Google Cloud – ativar Stitch API

1. Abra o [Google Cloud Console](https://console.cloud.google.com/).
2. Crie ou selecione um projeto e anote o **Project ID**.
3. No terminal, faça login e ative a API Stitch:

```bash
# Login no Google Cloud
gcloud auth login

# Definir seu projeto (troque YOUR_PROJECT_ID pelo ID real)
gcloud config set project YOUR_PROJECT_ID
gcloud auth application-default set-quota-project YOUR_PROJECT_ID

# Ativar a API Stitch
gcloud beta services mcp enable stitch.googleapis.com
```

4. Gerar credenciais para o Stitch usar:

```bash
gcloud auth application-default login
```

Isso abre o navegador para você autorizar; depois disso o Stitch MCP pode falar com o Google por você.

---

## Passo 2: Configurar o Stitch MCP no Cursor

1. No Cursor: **Settings** (Configurações) → **Tools & Integrations** → **MCP** (ou **MCP Tools**).
2. Clique em **Add New MCP Server** (Adicionar novo servidor MCP).
3. Preencha:

| Campo        | Valor |
|-------------|--------|
| **Name**    | `stitch` (ou outro nome que quiser) |
| **Type**    | **stdio** |
| **Command** | `npx` |
| **Args**    | `-y`, `stitch-mcp` |

4. Em **Environment** (variáveis de ambiente), adicione:

- **Nome:** `GOOGLE_CLOUD_PROJECT`  
- **Valor:** seu **Project ID** do Google Cloud (ex.: `meu-projeto-123`)

5. Salve e reinicie o Cursor se pedir.

---

## Alternativa: arquivo mcp.json

Se preferir editar o arquivo de configuração:

- **Global:** `C:\Users\SEU_USUARIO\.cursor\mcp.json`
- **Só este projeto:** `.cursor/mcp.json` na raiz do projeto

Exemplo de conteúdo:

```json
{
  "mcpServers": {
    "stitch": {
      "command": "npx",
      "args": ["-y", "stitch-mcp"],
      "env": {
        "GOOGLE_CLOUD_PROJECT": "SEU_PROJECT_ID"
      }
    }
  }
}
```

Substitua `SEU_PROJECT_ID` pelo ID do seu projeto no Google Cloud.

---

## Conferir se está funcionando

- Em **Settings → MCP**, o servidor **stitch** deve aparecer com um **ponto verde** (conectado).
- No chat do Composer/Agent, as ferramentas do Stitch devem aparecer quando você pedir coisas relacionadas a design/telas.

---

## Ferramentas do Google Stitch MCP

| Ferramenta | Função |
|------------|--------|
| `extract_design_context` | Extrai “DNA” do design (fontes, cores, layout) de uma tela. |
| `fetch_screen_code` | Baixa o código HTML/frontend da tela. |
| `fetch_screen_image` | Baixa screenshot em alta resolução da tela. |
| `generate_screen_from_text` | Gera uma **nova** tela a partir do seu texto/contexto. |
| `create_project` | Cria novo projeto/pasta no Stitch. |
| `list_projects` | Lista seus projetos Stitch. |
| `list_screens` | Lista telas de um projeto. |
| `get_project` | Detalhes de um projeto. |
| `get_screen` | Metadados de uma tela. |

---

## Dica de uso

Para manter o estilo consistente:

1. **Extrair contexto:** peça “Extraia o contexto de design da tela X”.
2. **Gerar:** peça “Com esse contexto, gere uma tela de Chat…” (ou outra tela).

Assim a nova tela tende a seguir o mesmo design system.

---

## Problemas comuns

- **Stitch não conecta:** confira se `gcloud auth application-default login` foi executado e se o projeto está correto em `GOOGLE_CLOUD_PROJECT`.
- **API não encontrada:** verifique se `gcloud beta services mcp enable stitch.googleapis.com` rodou sem erro no projeto certo.
- **Ferramentas não aparecem:** use o **Composer/Agent** do Cursor; MCP não aparece em todos os modos de chat.

Se quiser, diga em qual passo você está (Cloud, Cursor ou uso das ferramentas) que eu detalho só essa parte.

---

## Uso no projeto RenoveJá

Para integrar o Stitch ao app RenoveJá (telemedicina, Expo/React Native), use:

- **Guia no repositório:** [STITCH-NO-PROJETO.md](./STITCH-NO-PROJETO.md) — IDs dos projetos Stitch do RenoveJá, exemplos de prompt e fluxo (gerar tela → baixar código → implementar no app).
- **Regra do Cursor:** `.cursor/rules/stitch-renoveja.mdc` — a IA usa o Stitch ao trabalhar em telas/componentes do RenoveJá.
