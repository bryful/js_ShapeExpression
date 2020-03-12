# ShapeExpression
after effects でexpressionは基本的に絶対パスでプロパティのリンクを行います。  
ShapeLayerでExpressionを使う時に絶対パスでは不都合が送ることが多々あります。  

thisProperty.propertyGroup(*)を使えば、一応相対パスでリンクすることが可能ですが、基本的にインデックス指定になってしまいます。それだとかなりコーディングがきついです。  

このスクリプトは簡単に相対パス記述を行えるようにしたものです。  
  
AEはCC2020をターゲットにしていますが、CS6でも問題なく動くと思います。  

# 使い方 shapeExpression.jsx

ScriptUI Panelsへインストールしてください。  
一番上のボタンは「シェイプレイヤの追加です。  
  
get TargetPropertyボタンでリンクしたいプロパティを選択。get basePropertyでExpressionを書きたいプロパティを選択します。  
createRelativeボタンで相対パスを作成します。  
  
後はカット＆ペーストで対処します。  

# ファイル
C#のソースはUIをデザインするコードが入っています。使用にはAE_Dialogs_dueが必要です。  
  shapeExpression.jsxがスクリプトです。js_ShapeExpression/ScriptCodeフォルダ内に入っています。スクリプト作成アシスタント.jsxはスクリプトやExpression作成に必要な情報を獲得するスクリプトのCC2020版です。  

# Dependency
Visual studio 2017 C#  
After Effects CS6以降  


# License

This software is released under the MIT License, see LICENSE

# Authors

bry-ful(Hiroshi Furuhashi) http://bryful.yuzu.bz/  
twitter:[bryful](https://twitter.com/bryful)  
bryful@gmail.com  

# References
