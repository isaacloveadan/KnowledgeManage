/*
一般来说 只有最简单的脚本才嵌入到HTML 更复杂的脚本
存放在单独的文件中
使用独立文件的好处是浏览器会下载它 然后将它保存到浏览器
的缓存中
之后 其他页面想要相同的脚本会从缓存中获取 而不是下载它

如果设置了src属性 script标签内容将会忽略
 */