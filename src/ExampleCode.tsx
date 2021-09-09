import React from 'react';
import { CodePane } from "spectacle"

export default class ExampleCode extends React.Component<unknown, unknown> {
  render() {
    const code = `
class SuperCoolComponent extends React.Component {
    render() {
    return <p>code slide works in markdown too whaaaaat</p>;
}
`
    return <CodePane language="javascript">
      {code}
    </CodePane>
  }
}
