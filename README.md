
# Chat with your PDF 🚀

Ask question in the chat and receive answers with reference to the PDF

## Installation

Install chat-with-your-pdf with npm

```bash
  git clone git@github.com:osvaldoesco/chat-with-your-pdf.git
  cd chat-with-your-pdf
  npm install
  npm run dev
```

## API Reference

#### Post API question

```http
  POST https://prosper-conversations-beta.onrender.com/assistant/ask_question
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `question` | `string` | **Required**. Question to the API |

## Dependencies

- Node: v18.17.0
- @react-pdf-viewer/core: 3.12.0
- @react-pdf-viewer/default-layout: 3.12.0
- @react-pdf-viewer/page-navigation: 3.12.0
- @react-pdf-viewer/toolbar: 3.12.0
- pdfjs-dist: 3.4.120
- postcss-cli: 11.0.0
- react: 18.2.0
- react-dom: 18.2.0
- react-loader-spinner: 6.1.6

## Documentation

[React PDF Viewer](https://react-pdf-viewer.dev/docs/)
[Tailwind](https://tailwindcss.com/)
[react-loader-spinner](https://mhnpd.github.io/react-loader-spinner/docs/intro)
