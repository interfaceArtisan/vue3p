/* const emptyProjectInfo1 = [{
    title: '原始文件',
    files: []
 }, {
     title: '点云文件',
     files: []
 }, {
     title: '报告文件',
     files: []
 },  {
     title: '模型文件',
     files: []
 }]
 const emptyProjectInfo2 = [{
    title: '原始文件',
    files: []
 }, {
     title: '点云文件',
     files: []
 }, {
     title: '报告文件',
     files: []
 }, {
     title: '模型文件',
     files: []
 }] */
 const projectInfo1 = [{
     title: '原始文件',
     files: [{
         label: '所有文件',
         children: [{
             id: 1,
             label: '1'
         }, {
             id: 2,
             label: '2',

         }]
     }]
 }, {
     title: '点云文件',
     files: [{
         label: '所有文件',
         children: [{
             id: 3,
             label: '1'
         }, {
             id: 4,
             label: '2'
         }]
     }]
 }, {
     title: '报告文件',
     files: [{
         label: '所有文件',
         children: [{
             id: 5,
             label: '1'
         }, {
             id: 6,
             label: '2'
         }]
     }]
 },  {
     title: '模型文件',
     files: [{
         label: '所有文件',
         children: [{
             id: 5,
             label: '1'
         }, {
                 id: 6,
                 label: '2'
         }]
     }]
 }];
 const projectInfo2 = [{
    title: '原始文件',
    files: [{
        label: '所有文件',
        children: [{
             id: 1,
             label: '1'
         }, {
             id: 2,
             label: '2'
         }]
     }]
 }, {
     title: '点云文件',
     files: [{
         label: '所有文件',
         children: [{
             id: 3,
             label: '1'
         }, {
             id: 4,
             label: '2'
         }]
     }]
 }, {
     title: '报告文件',
     files: [{
         label: '所有文件',
         children: [{
             id: 5,
             label: '1'
         }, {
             id: 6,
             label: '2'
         }]
     }]
 }, {
     title: '模型文件',
     files: [{
         label: '所有文件',
         children: [{
             id: 5,
             label: '1'
         }, {
                 id: 6,
                 label: '2'
         }]
     }]
 }]
 /* const contextMenu = [{
     function: '打开文件',
     func: 'open'
 }, {
     function: '刷新文件',
     func: 'refresh'
 }, {
     function: '上传文件',
     componentName: 'UploadFile',
     isShow: false
 }, {
     function: '下载文件',
     componentName: 'DownloadFile',
     isShow: false
 }, {
     function: '删除文件',
     func: 'delete'
 }, {
     function: '裁剪点云',
     componentName: 'CutPoint',
     isShow: false
 }, {
     function: '自动分类',
     func: 'classify'
 }]
 */
export const projectArr = [{
    name: '0',
    brand: '48度带',
    projectInfo: projectInfo1
}, {
    name: '1',
    brand: '49度带',
    projectInfo: projectInfo2
}, {
    name: '2',
    brand: '50度带',
    projectInfo: projectInfo2
}];