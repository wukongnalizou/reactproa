import React, { PureComponent } from 'react';
import OopCollapse from '@/lib/components/OopCollapse';

const panelList = [
  {
    header: '上班儿',
    key: '1',
    content: <p>上什么班儿</p>,
    showArrow: true
  },
  {
    header: '上学',
    key: '2',
    content: <p>上什么学</p>,
    showArrow: false,
    disabled: true
  }
]
export default class App extends PureComponent {
  state = {
  }
  componentDidMount() {
  }
  onChange = (e) => {
    console.log(e)
  }
  render() {
    return (
      <OopCollapse panelList={panelList} horizontal={true} onChange={this.onChange} defaultActiveKey={['1']} />
    )
  }
}
