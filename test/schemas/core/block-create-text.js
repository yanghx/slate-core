/** @jsx h */

import h from '../../helpers/h'

export const schema = {}

export const input = (
  <state>
    <document>
      <paragraph />
    </document>
  </state>
)

export const output = {
  kind: 'state',
  document: {
    kind: 'document',
    data: {},
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        isVoid: false,
        data: {},
        nodes: [
          {
            kind: 'text',
            leaves: [
              {
                kind: 'leaf',
                text: '',
                marks: [],
              }
            ]
          }
        ]
      }
    ]
  }
}
