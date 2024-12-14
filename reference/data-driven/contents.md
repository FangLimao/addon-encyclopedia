# 内容文件
**内容文件**是提供了当前附加包的内容的列表的文件，附加包无需此文件即可正常工作。

## 使用
内容文件应该被命名为`contents.json`，放置于附加包根目录下，例如：

~~~json [content.json]
{
	"content": [
		{
			"path": "texts/zh_CN.lang"
		},
		{
			"path": "contents.json"
		},
		{
			"path": "manifest.json"
		}
	]
}
~~~

实际上，你无需自行写入每一个文件的路径，而可以只保留一个JSON空对象，让游戏引擎自行生成内容：

~~~json [content.json]
{}
~~~

## 参见
- [Bedrock Wiki](https://wiki.bedrock.dev/concepts/contents.html)
- [基岩版开发文档](https://mcbe-dev.net/addons/data-driven/general/contents.html)
