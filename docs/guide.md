# 前端开发规范

目前项目已经开启 `eslint` + `pretter`，不规范的代码会在`启动项目的终端`抛出，确保代码无报错或警告再提交

## JavaScript
1. 每行代码末尾不加分号
1. 使用单引号取代双引号
1. 不使用var声明变量, 优先使用const声明变量，其次是let
1. 变量命名规范，尽量保证命名有意义
1. 缩进2个空格

## 组件
1. 每个vue的style标签加上scoped
1. 缩进2个空格

## 命名
1. 常量所有单词大写
1. 组件名采用驼峰，第一个字母大写
1. 变量名命名采用驼峰，第一个字母小写
1. 类名采用驼峰，第一个字母大写
1. css的class名称用短横连接

## 代码提交流程（需提交代码）
1. git add
1. git commit
1. git pull --rebase
1. git push

## 代码提交流程（不需提交代码）
1. git add
1. git stash
1. git pull --rebase
1. git stash pop

## commit标准
1. 新增功能 -> feat
1. 修改代码 -> fix
1. 修改bug -> bug
1. 修改文档 -> docs
1. 修改项目配置 -> config

commit提交示例
```cmd
$ git commit -m "feat: 新增弹窗组件"
$ git commit -m "fix: 修改首页"
$ git commit -m "bug: 修改首页的某个bug"
$ git commit -m "docs: 修改规范文档"
$ git commit -m "config: 修改项目启动端口号为5656"
```