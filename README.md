## 初回セットアップ

* Next.jsに従ってプロジェクト作成
  * npx create-next-app@latest
    * プロジェクト名：next-my-apps
    * srcはありにした
  * githubでレポジトリ作成
    * next-my-apps
  * ローカルのプロジェクトをリモートレポジトリにpush
    * git remote add origin git@github.com:mash3-gt/next-my-apps.git
    * git push -u origin main
  * githubのセットアップ
    * https://dev.classmethod.jp/articles/github-pages-by-actions/
  * next.config.jsにexport設定を追加
    * nextConfigにoutput:'export'を追記する
  * コミットすると自動デプロイされ、ページが見れる
* 課題
  * アイコンが出ない
    * →相対パスだとデプロイ先で参照エラーになっていた
    * /hoge.svgを./hoge.svgに変更したら直った

## プロジェクト拡張

* プロジェクトごとに分けて色んなページを作っていく



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
