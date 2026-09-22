# 就活の木 学生サポートパネル(gakusei-panel)

多摩大学キャリア支援課で使用している、学生向け・カウンセラー向けの自己作成ツール群です。1ファイル完結のHTMLとして作られており、それぞれ単独でも動作します。

## 学生向けエントリーポイント

| ファイル | 内容 |
|---|---|
| `index.html` | 学生サポートパネルのメイン(全カテゴリを1ページにまとめた版) |
| `index-a.html` | 分割版・前半(自己理解＆エントリー編)。`index-b.html`とリンクし合う |
| `index-b.html` | 分割版・後半(応募＆その後対応編)。`index-a.html`とリンクし合う |

> `index.html`と`index-a/b.html`は、どちらを主に使うか(1ページ版か分割版か)を整理しておくと、今後の更新が楽になります。

## ① 自分を知る(診断・アセスメント)

| ファイル | 内容 |
|---|---|
| `meta-assessment.html` | キャリアアセスメント総合ポータル。30問のメタ診断から、どのアセスメントに進むべきかを案内 |
| `vpi-assessment.html` | VPI職業興味検査 |
| `mbti-assessment.html` | MBTI性格タイプ診断 |
| `anchor-assessment.html` | キャリア・アンカー診断(シャイン) |
| `strengths-assessment.html` | 強み診断 |
| `narrative-assessment.html` | ナラティブ診断(簡易版、サビカスのキャリア構築理論) |
| `narrative-assessment-guide.html` | ナラティブ診断の理論解説ページ |
| `shindan_ver14.html` | 自己分析マトリクス診断 |

## ② 仕事を探す

| ファイル | 内容 |
|---|---|
| `jobmatrix16v4.html` | 職業マトリクス(16分割・簡易版) |
| `jobmatrix_556.html` | 職種マトリクス(556職種・詳細版) |

## ③ ES・書類を作る

| ファイル | 内容 |
|---|---|
| `es-prompt-generator.html` | 企業研究＆ES対策プロンプトジェネレーター(本体) |
| `es-prompt-hub.html` | 同ツールの「できることMAP」(機能一覧・入口) |
| `usage-patterns-guide.html` | 同ツールの活用パターン図解ガイド |
| `originality-checker.html` | 金太郎飴チェッカー(ES独自性診断) |

## ④ 試験・面接に備える

| ファイル | 内容 |
|---|---|
| `hikkishiken-drill-v4.html` | 筆記試験対策ドリル |
| `deepseek_html_20260516_0dbae3.html` | CAB/GAB完全対策タブ式参考書(解説ポップアップ付き)※ファイル名が自動生成のままなので、リネーム候補 |

## ⑤ 用語・ガイド

| ファイル | 内容 |
|---|---|
| `shukatsu-yougo.html` | 就活用語ノート |
| `glossary-data.js` | 用語ノートが参照するデータ本体 |
| `tsukaikata-guide.html` | 学生向け使い方ガイド |
| `manual (1).html` | 学生サポートパネル使い方マニュアル |

## ⑥ ゼロ段階・壁打ち(新規)

| ファイル | 内容 |
|---|---|
| `ai-kabeuchi-prompt.html` | 「働くとは？ AI壁打ち」プロンプトをコピーして、ChatGPT・Claude・Gemini等に貼り付けて使うプロンプト版。**現時点ではどの入口(index系)からもリンクされていない**。パスワード付きの隠しカードとして組み込む方向で検討中 |

## カウンセラー・運営用ツール(学生には非公開)

| ファイル | 内容 |
|---|---|
| `launcher-X.html` | 就活の木 管理ランチャー(カウンセラー用の全ツール一覧) |
| `hayamihyo.html` | 支援ツール早見表(カウンセラー用。学生の状態別にどのツールを勧めるかの目安) |
| `icon-generator.html` | ランチャーアイコン生成ツール |

## PWA関連ファイル(アイコン・マニフェスト・Service Worker)

`manifest.json` / `manifest-a.json` / `manifest-b.json` / `manifest-matrix.json`、`sw.js` / `sw-matrix.js`、`launcher-manifest.json` / `launcher-sw.js`、および `icon-*.png` / `favicon*.png` / `apple-touch-icon*.png` / `matrix-icon*.png` は、それぞれ対応するページ(通常版・a版・b版・職種マトリクス版・ランチャー版)をホーム画面に追加した際のアイコン・オフライン動作設定です。

## 過去バージョン(アーカイブ)

以下は現在どこからもリンクされていない旧バージョンです。参照用に残されています。

- `index-old-0918.html` / `index-old-new-new.html`(→現行 `index.html`)
- `es-prompt-generator-old.html` / `es-prompt-generator-old-0918.html`(→現行 `es-prompt-generator.html`)
- `jobmatrix_556-old-0622.html`(→現行 `jobmatrix_556.html`)

## NotebookLMのmd(このREADMEとは別用途)

- `notebooklm-genko.md`:NotebookLMで紹介動画/音声Overviewを作るための原稿(サイト紹介文)
- `notebooklm-shijibun.md`:同ツールのカスタマイズ欄に貼り付ける指示文

この2つは、このREADME(リポジトリの技術的な説明)とは別物で、学生向けの紹介動画を生成するための入力データです。
