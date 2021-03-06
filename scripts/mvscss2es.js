const fs = require('fs');
const componentList = require('./componentList');
const fo = require('./file');

componentList.push('Modal');
componentList.push('SafeArea');

componentList.forEach(component => {
  const name = fo.toLowerLine(component);
  const path = `components/${name}/style.scss`;

  if (fs.existsSync(path)) {
    const file = fs.readFileSync(path, 'utf-8');
    fs.writeFileSync(`es/${name}/style.scss`, file.toString());
  }

  // timepicker有个iscroll.js需要拷贝过去
  if (name === 'timepicker') {
    const file = fs.readFileSync(`components/${name}/iscroll.js`, 'utf-8');
    fs.writeFileSync(`es/${name}/iscroll.js`, file.toString());
  }
});

const theme = 'components/theme.scss';
if (fs.existsSync(theme)) {
  const file = fs.readFileSync(theme, 'utf-8');
  fs.writeFileSync(`es/theme.scss`, file.toString());
}
