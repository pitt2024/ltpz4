# 交费完成模版页面

这是一个用于生成交费完成截图的网页模版，可以部署到 Cloudflare Pages 上。

## 部署步骤

### 1. 创建 GitHub 仓库
1. 在 GitHub 上创建新仓库
2. 将这些文件上传到仓库

### 2. 部署到 Cloudflare Pages
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 "Pages" 页面
3. 点击 "Create a project"
4. 选择 "Connect to Git"
5. 选择你的 GitHub 仓库
6. 配置构建设置：
   - Build command: 留空
   - Build output directory: `/`
7. 点击 "Save and Deploy"

### 3. 获取访问地址
部署完成后，你会得到一个类似 `https://your-project.pages.dev` 的地址。

## 使用方法

### URL 参数说明
- `merchant`: 商户名称（默认：天猫直充）
- `account` 或 `phone`: 交费号码
- `amount` 或 `money`: 交费金额
- `time` 或 `createTime`: 交费时间（支持时间戳或格式化字符串）
- `status`: 订单状态（默认：交费成功）

### 示例 URL
```
https://your-project.pages.dev/?merchant=天猫直充&account=13800138000&amount=100.00&time=2024-03-20 10:30:00&status=交费成功
```

### 在 Bot 中使用

```python
# 构建URL
url = f"https://your-project.pages.dev/?merchant={merchant}&account={account}&amount={amount}&time={time}&status={status}"

# 使用现有的截图功能
screenshot_path = await take_screenshot_async(url, "payment", 'mobile')
```

## 自定义样式

如果需要调整样式，可以修改 `index.html` 中的 CSS 部分。

## 注意事项

1. 中文参数需要进行 URL 编码
2. 时间支持多种格式：
   - 时间戳：`1710906600000`
   - 格式化字符串：`2024-03-20 10:30:00`
3. 金额会自动格式化为两位小数
4. 状态文字会根据内容自动设置颜色（成功=绿色，失败=红色）