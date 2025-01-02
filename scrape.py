import requests
from bs4 import BeautifulSoup

# URLの指定
url = "https://researchmap.jp/keimy1007"

# ページを取得
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

# 必要な情報を抽出
works = []
for item in soup.select(".content-section"):  # 適切なセレクタに変更
    title = item.find("h3").text.strip() if item.find("h3") else "タイトルなし"
    details = item.find("p").text.strip() if item.find("p") else "詳細なし"
    works.append({"タイトル": title, "詳細": details})

# HTMLファイルにまとめる
with open("works.html", "w", encoding="utf-8") as file:
    file.write("<!DOCTYPE html>\n<html lang='ja'>\n<head>\n")
    file.write("<meta charset='UTF-8'>\n<title>論文業績リスト</title>\n</head>\n<body>\n")
    file.write("<h1>論文業績リスト</h1>\n<ul>\n")
    for work in works:
        file.write(f"<li><strong>タイトル:</strong> {work['タイトル']}<br>")
        file.write(f"<strong>詳細:</strong> {work['詳細']}</li>\n")
    file.write("</ul>\n</body>\n</html>")

    