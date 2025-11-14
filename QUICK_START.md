# 🚀 SWAP Website - クイックスタートガイド

## TL;DR - 5分で始めましょう！

```bash
# 1. Docker Desktopをインストール（まだの場合）
# https://www.docker.com/products/docker-desktop/

# 2. Next.jsプロジェクトを作成（初回のみ）
npx create-next-app@latest swap-website --typescript --tailwind --app
cd swap-website

# 3. Dockerファイルをコピー（事前に作成済み）
# このディレクトリからコピー:
# - Dockerfile
# - docker-compose.yml
# - docker-compose.prod.yml
# - .dockerignore
# - .env.example

# 4. 環境変数をセットアップ
cp .env.example .env.local
# EmailJSの認証情報で.env.localを編集

# 5. Dockerを起動
docker compose up --build

# 6. ブラウザを開く
# http://localhost:3000

# 完了！ 🎉
```

---

## 📦 事前に作成済みのファイル

ディレクトリ `C:\Users\2240788\desktop\swap\` 内:

### ✅ Docker設定
- `Dockerfile` - マルチステージDockerビルド
- `docker-compose.yml` - 開発環境
- `docker-compose.prod.yml` - 本番環境テスト
- `.dockerignore` - Docker除外ルール

### ✅ 環境変数
- `.env.example` - 環境変数テンプレート

### ✅ ドキュメント
- `README.md` - メインドキュメント
- `IMPLEMENTATION_GUIDE_OPTION1.md` - 詳細実装ガイド
- `DOCKER_SETUP_GUIDE.md` - Dockerコマンドとトラブルシューティング
- `RECOMMENDED_TECH_STACK.md` - 技術スタック詳細
- `BACKEND_ANALYSIS.md` - アーキテクチャの決定
- `OPTION_COMPARISON.md` - オプション1と2の比較
- `QUICK_START.md` - このファイル！

### ✅ 元の要件
- `SWAP ウェブサイトに載せることのリスト・List of things to put on SWAP website.md`

---

## 🎯 次のステップ

### 1. Dockerをインストール（まだの場合）

**Windows/Mac:**
```bash
# Docker Desktopをダウンロード:
# https://www.docker.com/products/docker-desktop/

# インストール後、確認:
docker --version
docker compose version

# バージョン番号が表示されるはず ✅
```

**Linux (Ubuntu):**
```bash
sudo apt-get update
sudo apt-get install docker.io docker-compose-plugin
sudo usermod -aG docker $USER
newgrp docker

docker --version
```

### 2. Next.jsプロジェクトを作成（初回）

```bash
# プロジェクトディレクトリを作成
mkdir swap-website
cd swap-website

# Option A: Dockerで作成（ローカルにNode.js不要）
docker run --rm -v ${PWD}:/app -w /app node:20-alpine npx create-next-app@latest . --typescript --tailwind --app --no-git

# Option B: ローカルで作成（Node.jsがある場合）
npx create-next-app@latest . --typescript --tailwind --app

# オプションを選択:
✓ TypeScript? Yes
✓ ESLint? Yes
✓ Tailwind CSS? Yes
✓ `src/` directory? Yes
✓ App Router? Yes
✓ Import alias? No
```

### 3. Dockerファイルをプロジェクトにコピー

```bash
# C:\Users\2240788\desktop\swap\ から swap-website\ にコピー:

# Windows (PowerShell):
Copy-Item "C:\Users\2240788\desktop\swap\Dockerfile" .
Copy-Item "C:\Users\2240788\desktop\swap\docker-compose.yml" .
Copy-Item "C:\Users\2240788\desktop\swap\docker-compose.prod.yml" .
Copy-Item "C:\Users\2240788\desktop\swap\.dockerignore" .
Copy-Item "C:\Users\2240788\desktop\swap\.env.example" .

# Mac/Linux:
cp ~/desktop/swap/Dockerfile .
cp ~/desktop/swap/docker-compose.yml .
cp ~/desktop/swap/docker-compose.prod.yml .
cp ~/desktop/swap/.dockerignore .
cp ~/desktop/swap/.env.example .

# または: ファイルエクスプローラー/Finderで手動コピー
```

### 4. 環境変数のセットアップ

```bash
# テンプレートをコピー
cp .env.example .env.local

# テキストエディタで編集
code .env.local  # VS Code
# または
notepad .env.local  # Windows メモ帳
# または
nano .env.local  # Linux/Mac ターミナル

# 一時的にEmailJS変数は空のまま（後でセットアップ）
```

### 5. 開発サーバーを起動

```bash
# ビルドして起動（初回: 3-5分）
docker compose up --build

# 以下が表示されるのを待つ:
# ✓ Ready in [time]ms
# ○ Compiling / ...
# ✓ Compiled / in [time]ms

# 成功！ブラウザを開く:
http://localhost:3000
```

### 6. セットアップを確認

```bash
# コンテナが実行中か確認:
docker compose ps

# 表示されるはず:
# NAME             STATUS    PORTS
# swap-web-dev     Up        0.0.0.0:3000->3000/tcp

# ログを確認:
docker compose logs web

# Next.jsログが表示されるはず ✅
```

---

## 🎨 プロジェクトのカスタマイズ

### 1. パステルカラーでTailwindを更新

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          green: '#B8E6B8',
          blue: '#A7C7E7',
          cream: '#FFFDD0',
        },
      },
    },
  },
  plugins: [],
}

export default config
```

### 2. シンプルなホームページを作成

```tsx
// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-pastel-cream">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold text-center mb-4">
          SWAP
        </h1>
        <p className="text-2xl text-center text-gray-700 mb-8">
          Stop Waste And Plastic
        </p>
        <p className="text-xl text-center text-gray-600">
          SWAP plastic for a better future! 🌍
        </p>
      </div>
    </main>
  )
}
```

### 3. ホットリロードのテスト

```bash
# src/app/page.tsxを編集
# テキスト "SWAP plastic for a better future!"
# を "未来のためにプラスチックをSWAPしよう！" に変更

# ファイルを保存
# ブラウザが自動更新！ ✅

# Dockerの再起動は不要！
```

---

## 📧 EmailJSのセットアップ（オプション - お問い合わせフォーム用）

### 後で、お問い合わせフォームが必要になったら:

1. https://www.emailjs.com/ にアクセス
2. サインアップ（無料）
3. サービスを作成（Gmail）
4. テンプレートを作成
5. 認証情報を取得:
   - サービスID
   - テンプレートID
   - 公開キー
6. .env.localを更新
7. 再起動: `docker compose restart web`

詳細: [DOCKER_SETUP_GUIDE.md](DOCKER_SETUP_GUIDE.md#-setup-emailjs)

---

## 🛠️ 日次開発ワークフロー

```bash
# 朝: Dockerを起動
docker compose up -d

# コーディング: ファイルを編集
# - src/app/page.tsx
# - src/components/...
# - など

# ホットリロードが自動！ ✅

# パッケージを追加（必要な場合）:
docker compose exec web npm install <package>
docker compose restart web

# ログを表示（エラーがある場合）:
docker compose logs -f web

# 夜: Dockerを停止
docker compose down
```

---

## 📚 コマンドチートシート

```bash
# 起動
docker compose up              # フォアグラウンド（ログを表示）
docker compose up -d           # バックグラウンド

# 停止
docker compose down            # 停止して削除
Ctrl+C                         # 停止（フォアグラウンドの場合）

# ログ
docker compose logs -f web     # ログを追跡

# 再起動
docker compose restart web     # クイック再起動
docker compose up --build      # リビルド

# 実行
docker compose exec web sh     # シェルを開く
docker compose exec web npm install <pkg>

# クリーンアップ
docker compose down -v         # ボリュームを削除
docker system prune -a         # Docker全体をクリーンアップ

# ヘルプ
docker compose --help
```

---

## 🐛 よくある問題

### 問題: ポート3000が使用中
```bash
# 解決策1: 既存を停止
docker compose down

# 解決策2: ポートを変更
# docker-compose.ymlを編集:
ports:
  - "3001:3000"  # 代わりに3001を使用

# アクセス: http://localhost:3001
```

### 問題: コンテナが起動しない
```bash
# すべてをクリーンアップ
docker compose down -v
docker system prune -a

# リビルド
docker compose up --build
```

### 問題: "permission denied"（Linux）
```bash
# ユーザーをdockerグループに追加
sudo usermod -aG docker $USER
newgrp docker

# 所有権を修正
sudo chown -R $USER:$USER .
```

### 問題: ホットリロードが動作しない
```bash
# docker-compose.ymlに以下があるか確認:
volumes:
  - .:/app
  - /app/node_modules

environment:
  - WATCHPACK_POLLING=true

# 再起動
docker compose restart web
```

---

## 📖 ドキュメントインデックス

1. **ここから始める** → [README.md](README.md)
   - 概要
   - クイックスタート
   - 技術スタック

2. **Dockerガイド** → [DOCKER_SETUP_GUIDE.md](DOCKER_SETUP_GUIDE.md)
   - Dockerインストール
   - コマンド
   - EmailJSセットアップ
   - トラブルシューティング

3. **実装** → [IMPLEMENTATION_GUIDE_OPTION1.md](IMPLEMENTATION_GUIDE_OPTION1.md)
   - アーキテクチャ
   - 設定
   - コンテンツ管理
   - デプロイ

4. **技術スタック** → [RECOMMENDED_TECH_STACK.md](RECOMMENDED_TECH_STACK.md)
   - 詳細な技術選択
   - 依存関係
   - 構造

5. **アーキテクチャ** → [BACKEND_ANALYSIS.md](BACKEND_ANALYSIS.md)
   - バックエンドがない理由
   - 静的アプローチ
   - コンテンツ戦略

6. **比較** → [OPTION_COMPARISON.md](OPTION_COMPARISON.md)
   - オプション1と2
   - 推奨事項
   - 決定マトリックス

---

## ✅ 成功チェックリスト

```
✅ Dockerがインストール済み（docker --versionが動作）
✅ Next.jsプロジェクトが作成済み
✅ Dockerファイルがプロジェクトにコピー済み
✅ .env.localが作成済み
✅ docker compose upが動作
✅ http://localhost:3000にアクセス可能
✅ ファイルを編集してホットリロードを確認可能
✅ SWAPウェブサイトの構築準備完了！ 🎉
```

---

## 🎯 次: 構築を開始！

これで準備完了です:

1. ✅ Tailwindカラーをカスタマイズ（パステルテーマ）
2. ✅ コンポーネントを作成（Header、Footerなど）
3. ✅ コンテンツを追加（ホームページ、Aboutなど）
4. ✅ i18nをセットアップ（EN/JP）
5. ✅ お問い合わせフォームを追加（EmailJS）
6. ✅ Vercelにデプロイ！

**Happy coding! 🚀**

---

## 🆘 ヘルプが必要？

- [DOCKER_SETUP_GUIDE.md](DOCKER_SETUP_GUIDE.md)でトラブルシューティングを確認
- [IMPLEMENTATION_GUIDE_OPTION1.md](IMPLEMENTATION_GUIDE_OPTION1.md)でアーキテクチャを読む
- [README.md](README.md)で概要を確認

---

*最終更新: 2025*
*Option 1 - Pure Static with Docker*
