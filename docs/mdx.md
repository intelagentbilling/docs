---
id: mdx
title: Powered by MDX
---

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!


| | IntelAgent|Other Billing Apps|Traditional Billing Agent|
| - | :-------------: | :-----------: | :-----: |
|**`Features`**|
Free unlimited use|	✔	|❓| ❌ |
Works for my specialty | ✔	| ❓	| ✔ |
Constantly updated with user requests	|✔	| ❌	| ❌|
In-app support	| ✔	| ❌	| ❌|
|**`Stay protected and get support`**|
Secure, private, and won’t use your data to sell you banking products |	✔	| ❌	| ✔ |
Available 24/7 |	✔	| ✔	| ❌ |
Strong encryption protects your data |	✔	| ❓ |	❌ |
Automatic backups	| ✔	| ❓	| ❌ |