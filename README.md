# Python Web Projects Collection

这是一个包含多个Python Web项目的集合，主要使用Flask框架进行开发。

## 项目结构

```
.
├── E-commerce website/        # 电商网站项目
│   ├── templates/            # HTML模板文件
│   ├── static/              # 静态资源文件（CSS、JS、图片等）
│   └── app.py               # 主应用程序文件
├── Introduction/            # 介绍项目
├── The dark horse knows/    # Dark Horse项目
├── news/                    # 新闻项目
├── Plant science popularization/  # 植物科普项目
└── color change/           # 颜色变化项目
```

## 项目说明

### 1. 电商网站 (E-commerce website)
- 基于Flask框架开发的电子商务网站
- 包含基本的页面路由和模板渲染
- 使用Jinja2模板引擎
- 支持静态资源管理

### 2. 介绍项目 (Introduction)
- 项目介绍和展示平台

### 3. Dark Horse项目 (The dark horse knows)
- 知识分享平台

### 4. 新闻项目 (news)
- 新闻内容管理系统

### 5. 植物科普项目 (Plant science popularization)
- 植物知识科普平台

### 6. 颜色变化项目 (color change)
- 视觉效果展示项目

## 技术栈

- Python
- Flask Web框架
- HTML/CSS/JavaScript
- Jinja2模板引擎

## 运行要求

1. Python 3.x
2. Flask框架
3. 其他依赖包（建议使用虚拟环境）

## 如何运行

1. 克隆项目到本地
2. 创建并激活Python虚拟环境（推荐）
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows
   ```
3. 安装依赖
   ```bash
   pip install flask
   ```
4. 运行特定项目（以电商网站为例）
   ```bash
   cd "E-commerce website"
   python app.py
   ```
5. 在浏览器中访问 `http://localhost:5000`

## 开发说明

- 每个子项目都是独立的Flask应用
- 遵循Flask的标准项目结构
- 使用templates目录存放HTML模板
- 使用static目录存放静态资源

## 注意事项

- 确保安装了所有必要的Python包
- 运行前检查端口占用情况
- 开发模式下启用了调试功能

## 贡献指南

欢迎贡献代码，请遵循以下步骤：
1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 发起 Pull Request

## 许可证

MIT License 
