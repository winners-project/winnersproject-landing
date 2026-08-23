# Winners Project — Landing Page

Landing page inicial da **Imersão CI/CD para Embarcados**.

## Objetivo

Validar interesse em uma turma ao vivo focada em uma esteira de CI/CD para aplicações C/C++ em Embedded Linux ARMv7 e ARM64, com Docker e GitHub Actions.

## Arquivos

- `index.html`: página principal
- `style.css`: estilos responsivos
- `script.js`: validação local do formulário
- `obrigado.html`: página de confirmação visual
- `privacidade.html`: aviso de privacidade inicial

## Rodar localmente

Abra `index.html` no navegador ou use um servidor local simples:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Formulário

O formulário atual é deliberadamente uma demonstração: valida os campos no navegador e redireciona para `obrigado.html`, mas **não envia nem armazena respostas**. Antes de divulgar a página, configure um provedor de formulário e atualize o aviso de privacidade conforme a integração escolhida.

## Publicar com GitHub Pages

1. Abra **Settings → Pages** neste repositório.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/(root)`.
4. Salve e aguarde a URL de publicação.
5. Teste a página temporária antes de configurar o domínio personalizado.

## Segurança

Nunca envie credenciais, tokens, arquivos `.env`, dados de leads ou qualquer código/dado proprietário de empregadores para este repositório público.
