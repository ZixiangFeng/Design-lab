Trust Personal AI Lab 官网部署包

这是当前最终版静态网页，可直接部署到 Render Static Site。

Render 设置：
Build Command 留空
Publish Directory 填 .

如果使用 render.yaml 创建 Blueprint，Render 会读取：
runtime: static
staticPublishPath: .

入口文件：
index.html
