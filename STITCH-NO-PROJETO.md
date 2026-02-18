# Como o Stitch ajuda no projeto RenoveJá

O **Google Stitch MCP** está configurado para ajudar no design e nas telas do app RenoveJá (Expo/React Native). Use-o para gerar referências visuais, manter consistência e acelerar a criação de novas telas.

---

## Seus projetos Stitch

| Nome | ID | Tipo | Tema |
|------|-----|------|------|
| RenoveJá+ Vitality - PRD | **7554620405598267624** | Text-to-UI Pro | Azul #33a7fa, Manrope, MOBILE |
| RenoveJá+ Telemedicina — Ocean Blue Medical | **16949147604851676656** | Design | Escuro, Plus Jakarta Sans, MOBILE |

---

## Fluxo recomendado

### 1. Gerar uma nova tela no Stitch

No Cursor (Composer/Agent), peça por exemplo:

- *"Gere no Stitch uma tela mobile de [descrição]. Use o projeto RenoveJá Vitality (ID 7554620405598267624)."*

A IA usará `generate_screen_from_text` com `projectId: 7554620405598267624`, `deviceType: MOBILE` e o prompt que você descrever.

### 2. Baixar o código da tela

Depois de gerar, você pode pedir:

- *"Traga o código HTML da última tela gerada no Stitch"*

Assim a IA usa `fetch_screen_code` (ou `get_screen` + depois `fetch_screen_code`) para você adaptar no React Native.

### 3. Implementar no app

O app está em `ola-jamal-main/frontend-mobile/`:

- **Telas:** `app/**/*.tsx`
- **Componentes:** `components/`
- **Tema:** `lib/theme.ts` (cores #0EA5E9, #10B981, #8B5CF6, etc.)

Adapte o layout do Stitch para os componentes existentes (AppButton, AppInput, Screen, etc.) e para o tema do RenoveJá.

---

## Ferramentas Stitch disponíveis (MCP)

| Ferramenta | Uso |
|------------|-----|
| `list_projects` | Listar seus projetos (já tem os dois RenoveJá) |
| `list_screens` | Listar telas de um projeto (precisa do projectId) |
| `get_screen` | Detalhes de uma tela (name = projects/{id}/screens/{id}) |
| `generate_screen_from_text` | Gerar tela a partir de texto (projectId + prompt + deviceType: MOBILE) |
| `fetch_screen_code` | Baixar HTML/código da tela |
| `fetch_screen_image` | Baixar screenshot da tela |
| `create_project` | Criar novo projeto (se quiser outro tema) |
| `edit_screens` | Editar telas existentes |
| `generate_variants` | Gerar variantes de uma tela |

---

## Exemplos de prompts para novas telas

- *"Tela de onboarding: 3 slides com ilustração, título e botão Próximo / Começar, estilo app de saúde."*
- *"Dashboard do médico: cards com números (Aguardando, Assinados, Consultas), lista de pedidos recentes, header com avatar."*
- *"Tela de detalhe do pedido: dados do paciente, análise IA, botões Aprovar e Rejeitar, status em etapas."*
- *"Tela de assinatura: campo senha do certificado, botão Assinar, aviso de validade 10 dias para antimicrobiano."*

Use sempre **projectId 7554620405598267624** e **deviceType MOBILE** para manter o projeto RenoveJá+ Vitality como base.

---

## Configuração

- **MCP:** `.cursor/mcp.json` (servidor `stitch` com `npx -y stitch-mcp`).
- **Google Cloud:** variável `GOOGLE_CLOUD_PROJECT` com seu Project ID; `gcloud auth application-default login` e API Stitch ativada (veja `GOOGLE-STITCH-MCP.md`).

Com isso, o Stitch passa a ajudar de forma integrada sempre que você pedir criação ou refinamento de telas no RenoveJá.
