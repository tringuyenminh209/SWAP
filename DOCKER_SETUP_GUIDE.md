# 🐳 SWAP Website - Docker セットアップガイド

## 📋 Dockerを使用した開発環境のインストールガイド

---

## ✅ 基本要件 (Prerequisites)

### 1. Dockerのインストール

#### Windows:
```bash
# Docker Desktop for Windowsをダウンロード
# https://docs.docker.com/desktop/install/windows-install/

# インストール後、Docker Desktopを起動
# インストールを確認:
docker --version
docker compose version
```

#### macOS:
```bash
# Docker Desktop for Macをダウンロード
# https://docs.docker.com/desktop/install/mac-install/

# またはHomebrewを使用:
brew install --cask docker

# 確認:
docker --version
docker compose version
```

#### Linux (Ubuntu/Debian):
```bash
# パッケージインデックスを更新
sudo apt-get update

# Dockerをインストール
sudo apt-get install docker.io docker-compose-plugin

# ユーザーをdockerグループに追加（sudo不要）
sudo usermod -aG docker $USER
newgrp docker

# 確認:
docker --version
docker compose version
```

### 2. Dockerが実行中か確認

```bash
# Dockerをテスト
docker run hello-world

# 期待される結果:
# "Hello from Docker!"
# "This message shows that your installation appears to be working correctly."
```

---

## 🚀 プロジェクトのセットアップ（最初から）

### Step 1: リポジトリのクローンまたはプロジェクトの作成

```bash
# リポジトリがある場合:
git clone <your-repo-url> swap-website
cd swap-website

# または新しいディレクトリを作成:
mkdir swap-website
cd swap-website

# 作成済みのDockerファイルをこのディレクトリにコピー:
# - Dockerfile
# - docker-compose.yml
# - docker-compose.prod.yml
# - .dockerignore
# - .env.example
```

### Step 2: Next.jsプロジェクトの作成（初回）

```bash
# Option A: Dockerから作成（推奨）
docker run --rm -v ${PWD}:/app -w /app node:20-alpine npx create-next-app@latest . --typescript --tailwind --app --no-git

# Option B: ローカルで作成（Node.jsがある場合）
npx create-next-app@latest . --typescript --tailwind --app

# オプションを選択:
✓ Would you like to use TypeScript? Yes
✓ Would you like to use ESLint? Yes
✓ Would you like to use Tailwind CSS? Yes
✓ Would you like to use `src/` directory? Yes
✓ Would you like to use App Router? Yes
✓ Would you like to customize the default import alias? No
```

### Step 3: 環境変数のセットアップ

```bash
# サンプルファイルをコピー
cp .env.example .env.local

# エディタで.env.localを編集
code .env.local  # VS Code
# または
nano .env.local  # ターミナルエディタ

# EmailJSの情報を入力（後で説明します）
```

### Step 4: Dockerコンテナの起動

```bash
# ビルドして開発サーバーを起動
docker compose up --build

# またはバックグラウンドで実行:
docker compose up -d --build

# ビルド完了を待つ（初回は3-5分）
# ログを確認:
docker compose logs -f web
```

### Step 5: ウェブサイトにアクセス

```bash
# ブラウザを開く:
http://localhost:3000

# Next.jsのデフォルトホームページが表示されます！
```

---

## 📦 セットアップ後のプロジェクト構造

```
swap-website/
├── .dockerignore          ✅ 作成済み
├── .env.example           ✅ 作成済み
├── .env.local             ⚠️  作成が必要（.env.exampleからコピー）
├── .gitignore             ✅ 自動（Next.js）
├── Dockerfile             ✅ 作成済み
├── docker-compose.yml     ✅ 作成済み
├── docker-compose.prod.yml ✅ 作成済み
├── next.config.js         ✅ 自動（Next.js）
├── package.json           ✅ 自動（Next.js）
├── tailwind.config.ts     ✅ 自動（Next.js）
├── tsconfig.json          ✅ 自動（Next.js）
│
├── public/                ✅ 自動（Next.js）
│   └── ...
│
└── src/                   ✅ 自動（Next.js）
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    └── ...
```

---

## 🛠️ Dockerコマンド - チートシート

### 🟢 起動/停止

```bash
# コンテナを起動（フォアグラウンド - ログを直接表示）
docker compose up

# コンテナを起動（バックグラウンド - バックグラウンドで実行）
docker compose up -d

# リビルドして起動（Dockerfileまたは依存関係を変更した後）
docker compose up --build

# コンテナを停止
docker compose down

# 停止してボリュームを削除（クリーンリセット）
docker compose down -v
```

### 📊 ログとモニタリング

```bash
# リアルタイムでログを表示
docker compose logs -f

# 特定のサービスのログを表示
docker compose logs -f web

# 最後の100行のログを表示
docker compose logs --tail=100 web

# コンテナのステータスを確認
docker compose ps

# リソース使用量を確認
docker stats
```

### 🔧 コマンドの実行

```bash
# 実行中のコンテナ内でコマンドを実行
docker compose exec web <command>

# 例:
docker compose exec web npm install axios
docker compose exec web npm run build
docker compose exec web npm run lint
docker compose exec web npm audit

# コンテナ内でシェルを開く
docker compose exec web sh

# （シェル内で任意のコマンドを実行可能）
# ls, cd, npm, etc.
# 終了: Ctrl+D または "exit" と入力
```

### 🧹 クリーンアップ

```bash
# コンテナを停止して削除
docker compose down

# コンテナ + ボリュームを削除
docker compose down -v

# コンテナ + イメージを削除
docker compose down --rmi all

# Docker全体をクリーンアップ（注意！）
docker system prune -a
docker volume prune
```

### 🔄 再起動

```bash
# すべてのサービスを再起動
docker compose restart

# 特定のサービスを再起動
docker compose restart web

# コード変更後のリビルド（hot reloadが動作しない場合）
docker compose up --build
```

---

## 📝 開発ワークフロー

### 日次ワークフロー:

```bash
# 1. 朝: Dockerを起動
docker compose up -d

# 2. コーディング: src/, content/, etc.のファイルを編集
# ホットリロードが自動！再起動不要。

# 3. 新しいパッケージをインストール（必要な場合）:
docker compose exec web npm install <package-name>
docker compose restart web

# 4. エラーがある場合はログを確認:
docker compose logs -f web

# 5. 夜: Dockerを停止
docker compose down
```

### ホットリロード:

```
✅ 変更時に自動リロード:
- src/**/*.tsx
- src/**/*.ts
- src/**/*.css
- content/**/*.md
- data/**/*.json

❌ 変更時に再起動が必要:
- package.json (dependencies)
- next.config.js
- tailwind.config.ts
- .env.local

再起動: docker compose restart web
```

---

## 🐞 トラブルシューティング

### Problem 1: ポート3000が既に使用されている

```bash
# エラー: "port is already allocated"

# 解決策1: 実行中のコンテナを停止
docker compose down

# 解決策2: ポート3000を使用しているプロセスを終了
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# 解決策3: docker-compose.ymlでポートを変更
# "3000:3000" を "3001:3000" に変更
# アクセス: http://localhost:3001
```

### Problem 2: コンテナが起動しない

```bash
# ログを確認
docker compose logs web

# クリーンしてリビルド
docker compose down -v
docker system prune -a
docker compose up --build
```

### Problem 3: ホットリロードが動作しない

```bash
# docker-compose.ymlのvolumesを確認:
volumes:
  - .:/app              # ✅ 必須
  - /app/node_modules   # ✅ 必須
  - /app/.next          # ✅ 必須

# まだ動作しない場合、追加:
environment:
  - WATCHPACK_POLLING=true  # ✅ ファイルに既に含まれています

# 再起動:
docker compose restart web
```

### Problem 4: npm installエラー

```bash
# キャッシュをクリアしてリビルド
docker compose down -v
docker compose build --no-cache
docker compose up
```

### Problem 5: 権限エラー（Linux/Mac）

```bash
# 所有権を修正
sudo chown -R $USER:$USER .

# またはroot以外でDockerを実行
sudo usermod -aG docker $USER
newgrp docker
```

### Problem 6: ディスク容量不足

```bash
# ディスク使用量を確認
docker system df

# 未使用データをクリーンアップ
docker system prune -a
docker volume prune

# 特定のイメージを削除
docker images
docker rmi <image-id>
```

---

## 🎯 よくあるタスク

### 1. 新しいパッケージを追加

```bash
# 方法1: コンテナ内で実行
docker compose exec web npm install <package-name>

# 方法2: package.jsonに追加してからリビルド
# package.jsonを編集
docker compose up --build

# 例:
docker compose exec web npm install framer-motion
docker compose exec web npm install next-intl
docker compose exec web npm install @emailjs/browser
```

### 2. リンターとフォーマッターを実行

```bash
# ESLint
docker compose exec web npm run lint

# コードをフォーマット
docker compose exec web npm run format

# 型チェック
docker compose exec web npx tsc --noEmit
```

### 3. 本番環境のビルド

```bash
# コンテナ内でビルド
docker compose exec web npm run build

# または本番ビルドをテスト:
docker compose -f docker-compose.prod.yml up --build
```

### 4. コンテナシェルにアクセス

```bash
# シェルを開く
docker compose exec web sh

# シェル内で:
ls -la
cd src
npm run build
exit
```

---

## 📧 EmailJSのセットアップ

### 1. アカウントを作成

```bash
# 1. アクセス: https://www.emailjs.com/
# 2. サインアップ（無料プラン: 月200通）
# 3. メールを確認
```

### 2. メールサービスのセットアップ

```bash
# ダッシュボード → Email Services → Add New Service

# プロバイダーを選択（Gmail推奨）:
# - Select: Gmail
# - Connect: swapplastictogreen@gmail.com
# - 権限を許可

# サービスIDをメモ: service_xxxxxxx
```

### 3. メールテンプレートの作成

```bash
# ダッシュボード → Email Templates → Create New Template

# テンプレート名: swap_contact_form

# テンプレート内容:
```

```html
<h2>New Contact Form Submission - SWAP Website</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>Sent from SWAP Website Contact Form</em></p>
<p><em>Reply to: {{from_email}}</em></p>
```

```bash
# テンプレートIDをメモ: template_xxxxxxx
```

### 4. 公開キーを取得

```bash
# ダッシュボード → Account → General

# 公開キーをコピー: xxxxxxxxxxxxxxx
```

### 5. .env.localを更新

```bash
# .env.localを編集
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Dockerを再起動

```bash
docker compose restart web

# 環境変数が読み込まれました！
```

### 7. お問い合わせフォームをテスト

```bash
# ContactFormコンポーネントを実装後:
# 1. http://localhost:3000/contact を開く
# 2. フォームに入力
# 3. 送信
# 4. メールを確認: swapplastictogreen@gmail.com
```

---

## 🚀 VS Code統合

### 1. Dev Containers拡張機能

```bash
# 拡張機能をインストール:
# VS Code → Extensions → "Dev Containers" by Microsoft

# コンテナ内でプロジェクトを開く:
# Cmd/Ctrl + Shift + P
# → "Dev Containers: Reopen in Container"

# VS CodeがDockerコンテナ内で開きます！
# ターミナル、デバッガーなどがコンテナ内で実行されます
```

### 2. 推奨拡張機能

```json
// .vscode/extensions.json
{
  "recommendations": [
    "ms-vscode-remote.remote-containers",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-azuretools.vscode-docker"
  ]
}
```

---

## 📊 パフォーマンスのヒント

### 1. npm installを高速化

```bash
# Dockerfileに追加（既に含まれています）:
RUN npm ci  # npm installの代わり（より高速）
```

### 2. レイヤーキャッシング

```bash
# Dockerfileは最適化済み:
# - package*.jsonを最初にコピー（キャッシュレイヤー）
# - npm install（package.jsonが変更されない場合はキャッシュ）
# - その後ソースコードをコピー（npm installキャッシュを無効化しない）
```

### 3. イメージサイズを削減

```bash
# イメージサイズを確認
docker images swap-website

# 現在のサイズ: ~500MB（開発環境には問題なし）
# 本番環境: ~150MB（Alpine Linux + 最適化済み）
```

---

## 🎓 次のステップ

### 1. ✅ Dockerは実行中ですか？

```bash
docker compose ps
# 表示されるはず: swap-web-dev running

curl http://localhost:3000
# 表示されるはず: HTML response
```

### 2. ✅ Tailwindカラーをカスタマイズ

```bash
# パステルカラーでtailwind.config.tsを編集
# （IMPLEMENTATION_GUIDE_OPTION1.mdを参照）

# 再起動は不要（hot reload！）
```

### 3. ✅ i18nのセットアップ

```bash
# next-intlをインストール
docker compose exec web npm install next-intl

# 再起動
docker compose restart web

# i18nセットアップガイドに従う
```

### 4. ✅ コンテンツを作成

```bash
# ディレクトリを作成:
mkdir -p content/en content/ja
mkdir -p data
mkdir -p public/images/team public/images/goals

# コンテンツファイルを追加
# （IMPLEMENTATION_GUIDE_OPTION1.mdを参照）
```

### 5. ✅ ページをビルド

```bash
# ホームページから開始:
# src/app/[locale]/page.tsx

# 次にAbout Us:
# src/app/[locale]/about/page.tsx

# など
```

---

## 📚 リソース

- **Docker Docs**: https://docs.docker.com/
- **Docker Compose**: https://docs.docker.com/compose/
- **Next.js Docs**: https://nextjs.org/docs
- **Troubleshooting**: https://docs.docker.com/engine/reference/commandline/compose/

---

## ✅ チェックリスト

```
✅ Docker Desktopがインストール済み
✅ Dockerが実行中（docker --versionが動作）
✅ プロジェクトが作成済み（Next.jsファイルが存在）
✅ Dockerファイルが作成済み（Dockerfile, docker-compose.yml）
✅ .env.localが作成済み（.env.exampleから）
✅ Dockerコンテナが実行中（docker compose up）
✅ ウェブサイトにアクセス可能（http://localhost:3000）
✅ EmailJSがセットアップ済み（サービス + テンプレート + キー）
✅ ホットリロードが動作中（ファイル編集 → 自動更新）
```

---

## 🎉 おめでとうございます！

Docker環境の準備が完了しました！

これで以下が可能です:
- ✅ ホットリロードでコーディング
- ✅ ローカルにNode.jsをインストールする必要がない
- ✅ チーム全体で一貫した環境
- ✅ 新しいメンバーのオンボーディングが簡単

**Happy coding! 🚀**

---

*最終更新: 2025*
*バージョン: 1.0.0*
