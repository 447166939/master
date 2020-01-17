#react-native-secharts的安装
1. yarn add react-native-secharts@1.6.1
2. yarn add react-native-webview@2.14.3
3. react-native link react-native-webview
4. 在你的项目创建此路径的文件夹 $yourProject/android/app/src/main/assets/echarts
5. 拷贝node_modules/react-native-secharts/main/dist/index.html到android/app/src/main/assets/echarts/
6. 拷贝node_modules/react-native-secharts/main/dist/Bmap.html到android/app/src/main/assets/echarts/
7.修改node_modules/react-native-webview/android/build.gradle把ext.kotlin_version 改成1.3.0版本
#注意事项：
1. Top组件的数据必须是排好序的，要不然会出现样式错乱。