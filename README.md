- 绘制中国地图
- 测试跨域请求
    - axios的type文件在\node_modules\axios\index.d.ts，不过刚安装的时候找不到，后来在node_modules/.vite/deps下找到的，反正多找找吧
    - 使用axios的实例的request方法时，传入了一个错误的data(当时传的是对象)，然后跨域请求一直无法到达服务器，浏览器也会报跨域的错误

- 大屏展现
在后续开发过程中，echarts的绘制可借鉴社区的样式进行开发：https://www.isqqw.com/?t=lines


- 如何将前端静态页面托管到GitHub
    - 如何创建：https://docs.github.com/zh/pages/getting-started-with-github-pages/creating-a-github-pages-site
    - 使用自定义工作流：自定义工作流的配置文件在.github/workflows/static.yml下，在这个项目中，
        - a. 配置了自定义的404页面(如果不配置，在vue-router的mode为history模式下，刷新页面会进入GitHub的默认404页面)
        - 配置了两个job，分别为`npm install` 和 `npm run build`
        - 我们在访问页面时用的[域名]/[项目名]/[path]的方式，所以在vue-router的配置和vite的配置文件中应该新增base的属性为文件名，以保证相对地址的正确性(比如 我们的静态文件，如果不配置的话，就是[域名]/[文件路径]，配置了之后是[域名]/[项目名]/[文件路径]，我们的访问路由，不配置的话，是[域名]/[配置的路由],配置之后是[域名]/[项目名]/[配置的路由]) 