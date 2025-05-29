export default function TestTable(): HTMLDivElement {
  const parent = document.createElement('div')

  parent.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
      </tr>
    </thead>
  <tbody>
  </tbody>
    <tr>
      <td>Hello</td>
      <td>World</td>
    </tr>
  </table>
  `;

  return parent;
}
