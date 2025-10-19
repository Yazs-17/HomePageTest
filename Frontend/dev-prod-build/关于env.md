关于打包

打包时分析的是是否在代码中显式的表现出了import 
而非 dev prod 之分

关于 npm 
要想下载dev依赖，
直接 `npm i -D `即可

关于生产环境
如ci/cd，dev标识可以方便安装时的跳过