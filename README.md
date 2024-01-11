<p align="center">
  <a href="http://nav.untview.top/">
    <img src="src/assets/image/logo.png" width="80" />
  </a>
  <br />
  <b>耕云导航</b>
  <p align="center">一款基于Vue3、Naive-UI和ThinkPHP6.0的前后台分离的简洁、自适应开源导航网站，</p>
  <p align="center">包含多种页面布局和卡片模式，优化内容提升用户体验。</p>
  <p align="center">
    <a href="README.md">
      <img src="https://img.shields.io/badge/lang-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-red.svg?longCache=true&style=flat-square">
    </a>
    <img src="https://img.shields.io/github/v/release/xjh22222228/nav" />
    <a href="https://githubfast.com/xjh22222228/nav/stargazers"><img src="https://img.shields.io/github/stars/xjh22222228/nav" alt="Stars"/></a>
    <img alt="Angular" src="https://img.shields.io/static/v1.svg?label=&message=Angular11&style=flat-square&color=C82B38">
    <img src="https://img.shields.io/github/license/xjh22222228/nav" />
  </p>
</p>

<br />
<br />


## 预览
**主题**

- [耕云导航 在线预览](https://nav3.cn/#/sim)

![Preview](https://usercontent.githubfast.com/raw/xjh22222228/public/gh-pages/nav/1.png)


## 特性
`发现导航` 的理念就是做一款无需依赖后端服务既简单又方便，没有繁杂的配置和数据库等配置概念, 做到开箱即用。

- 🍰 内置 `800+` 实用网站。
- 🍰 支持 SEO。
- 🍰 完全纯静态, 提供自动化部署功能。
- 🍰 三叉树分类、结构清晰、分类清晰。
- 🍰 支持一个网站关联多个网址
- 🍰 颜值与简约并存，不再是杀马特时代。
- 🍰 完全开源，轻松定制化。
- 🍰 支持多种浏览模式，创新。
- 🍰 支持足迹记忆。
- 🍰 支持移动端浏览。
- 🍰 支持搜索查询。
- 🍰 支持自定义引擎搜索。
- 🍰 多款主题切换。
- 🍰 支持暗黑模式。
- 🍰 支持后台管理, 无需部署。
- 🍰 支持从Chrome书签导入
- 🍰 多种Loading加载动画




## 部署
像数 `321` 一样简单。

#### 方式一(gh-pages免费)
1、Fork 当前项目。

2、在仓库页面点击 `main` 分支在输入框输入 `image` 创建一个分支，否则上传图片会出现 404 现象。

3、[https://githubfast.com/settings/tokens](https://githubfast.com/settings/tokens) 申请 token, 勾选相应的权限, 如果不懂就全部选中，复制并保存Token。

4、https://githubfast.com/用户名/nav/settings/secrets/actions/new  添加申请的token， name填写 `TOKEN` 大写。

5、打开 https://githubfast.com/用户名/nav/actions 点击 `绿色按钮`

6、务必修改项目配置文件 [nav.config.ts](nav.config.ts)

7、5分钟后打开 https://用户名.github.io/nav 就能看到一个非常强大的导航网站了。

### 推荐方式二(Vercel免费)
和方式一的步骤一样，除了第4步不用。

具体使用跟着步骤走即可 [https://githubfast.com/apps/vercel](https://githubfast.com/apps/vercel)



### 推荐方式三(Netlify免费)
[https://www.netlify.com/](https://www.netlify.com/)



## 后台
将路由地址修改为 `system` 即可进入，如: https://www.nav3.cn/#/light 修改为 https://www.nav3.cn/#/system


## 书签导入
支持从 Chrome 书签导入（WebKit内核应该都是支持的~），会自动检测满足三级分类的导航，其他一律设为未分类：

![](https://usercontent.githubfast.com/raw/xjh22222228/public/gh-pages/nav/import.png)

浏览器打开 [chrome://bookmarks/](chrome://bookmarks/) 导出书签得到 html 文件, 接着从导航网站后台导入即可。



## 升级
在升级之前请备份根目录下的 `data` 文件夹和 `nav.config.ts`, 升级完后替换即可。

点击右上角 `Watch` 按钮第一时间跟踪版本升级。



## 更新日志
[CHANGELOG](https://githubfast.com/xjh22222228/nav/releases)






## 开发构建
NODE: v18
``` bash
# 下载
git clone --depth=1 https://githubfast.com/xjh22222228/nav.git

cd nav

# 安装依赖 NODE: v18
yarn

# 启动
yarn start

# 打包
yarn build
```



## 贡献
Thank you for your [contribution](https://githubfast.com/xjh22222228/nav/issues), men.

<a href="https://githubfast.com/YutHelloWorld">
  <img src="https://usercontent.githubfast.com/avatars1/u/20860159?s=460&v=4" width="30px" height="30px" />
</a>
<a href="https://githubfast.com/JJJTHuang">
  <img src="https://usercontent.githubfast.com/avatars3/u/22817432?s=460&v=4" width="30px" height="30px" />
</a>
<a href="https://githubfast.com/Fechin">
  <img src="https://usercontent.githubfast.com/avatars1/u/2541482?s=460&v=4" width="30px" height="30px" />
</a>
<a href="https://githubfast.com/setdiaoyong">
  <img src="https://usercontent.githubfast.com/avatars1/u/62551864?s=460&v=4" width="30px" height="30px" />
</a>






## 建议
如果有任何功能上的建议可通过 [issue](https://githubfast.com/xjh22222228/nav/issues) 发起, Thank you.



## 支持
项目成立于 2018 年到至今一直坚持维护和开源, 经过N次的迭代与优化, 如果项目能帮到您是我的荣幸。

您可以请作者喝杯咖啡，继续战斗下去（请备注Github名字）~

<img src="https://cdn.jsdelivr.net/gh/xjh22222228/public@gh-pages/img/32.png" width="600">

感谢您的认可：
| 姓名    | 支持金额              |
| --------------------------------------- |----------- |
| [aiyou9](https://githubfast.com/aiyou9)     | ￥50.00、￥50.00     |
| [lastares](https://githubfast.com/lastares)       | ￥25.00     |
| [MrJxySteven](https://githubfast.com/MrJxySteven) | ￥20.00     |
| 路人甲     | ￥50.00     |


## 协议
[MIT](./LICENSE)