const content = '治疗过程:康复情况:q132132病情描述:康复情况:e病康复情况:情描述:康复情况:wwqeq病情康复情况:描述:e';
const titleList = ['康复情况:', '病情描述:', '治疗过程:'];
const indexList = []; // { index: , title: }
const titleContentList = [];
// 遍历分割字符串，生成[{index: 1, title: '治疗过程:'}, ]
titleList.forEach(item => {
  let startIndex = 0;
  while( startIndex < content.length) {
    let index = content.indexOf(item, startIndex);
    if( index >= 0 ) {
      indexList.push({index: index, title: item});
    } else {
      break;
    }
    startIndex = index + 1;
  }
})

if (!indexList.length) {
  return [{ title: '', content}]
};

const indexs = indexList.map(item => {
  return item.index;
}).sort((a, b) =>  a - b );
console.log(111, indexList);
const noTitleContent = indexs[0] === 0 ? '' : content.substring(0, indexs[0]);
if (noTitleContent) {
  titleContentList.push({ title: '', content: noTitleContent});
}

for( let i = 0; i < indexs.length; i++) {
  const index = indexs[i];
  let title;
  indexList.some(item => {
    if(item.index === index) {
      title = item.title;
      return true;
    };
  })
  let startIndex = index + title.length;
  let titleContent;
  if( i + 1 === indexs.length) {
    titleContent = content.substring(startIndex);
  } else {
    titleContent = content.substring(startIndex, indexs[i + 1]);
  }
  titleContent = titleContent.replace('\\n', '');
  if( titleContent.endsWith('\n')) {
    titleContent = titleContent.substring(0, titleContent.length - 1)
  }

  if( titleContent ) {
    titleContentList.push({ title, titleContent });
  }

}
console.log(333, titleContentList);
