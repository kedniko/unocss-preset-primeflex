
const formlayout = [
  ['formgroup-inline', { display: 'flex', 'flex-wrap': 'wrap', 'align-items': 'flex-start', }],
  ['formgrid', { display: 'flex', 'flex-wrap': 'wrap', 'margin-right': '-0.5rem', 'margin-left': '-0.5rem', 'margin-top': '-0.5rem', }],
  ['field', { 'margin-bottom': '1rem' }],
  ['grid', { display: 'flex', 'flex-wrap': 'wrap', 'margin-right': '-0.5rem', 'margin-left': '-0.5rem', 'margin-top': '-0.5rem', }],
  ['field-checkbox', { 'margin-bottom': '1rem', display: 'flex', 'align-items': 'center' }],
  ['field-radiobutton', { 'margin-bottom': '1rem', display: 'flex', 'align-items': 'center' }],
]


const gridsystem = [
  ['grid', { display: 'flex', 'flex-wrap': 'wrap', 'margin-right': '-0.5rem', 'margin-left': '-0.5rem', 'margin-top': '-0.5rem' }],
  ['grid-nogutter', { 'margin-right': '0', 'margin-left': '0', 'margin-top': '0' }],
  ['col', { 'flex-grow': '1', 'flex-basis': '0' }],
  ['col-fixed', { flex: '0 0 auto' }],
  ['col-1', { flex: '0 0 auto', width: '8.3333%', padding: '0.5rem' }],
  ['col-2', { flex: '0 0 auto', width: '16.6667%', padding: '0.5rem' }],
  ['col-3', { flex: '0 0 auto', width: '25%', padding: '0.5rem' }],
  ['col-4', { flex: '0 0 auto', width: '33.3333%', padding: '0.5rem' }],
  ['col-5', { flex: '0 0 auto', width: '41.6667%', padding: '0.5rem' }],
  ['col-6', { flex: '0 0 auto', width: '50%', padding: '0.5rem' }],
  ['col-7', { flex: '0 0 auto', width: '58.3333%', padding: '0.5rem' }],
  ['col-8', { flex: '0 0 auto', width: '66.6667%', padding: '0.5rem' }],
  ['col-9', { flex: '0 0 auto', width: '75%', padding: '0.5rem' }],
  ['col-10', { flex: '0 0 auto', width: '83.3333%', padding: '0.5rem' }],
  ['col-11', { flex: '0 0 auto', width: '91.6667%', padding: '0.5rem' }],
  ['col-12', { flex: '0 0 auto', width: '100%', padding: '0.5rem' }],
  ['col-offset-0', { 'margin-left': '0' }],
  ['col-offset-1', { 'margin-left': '8.3333%' }],
  ['col-offset-2', { 'margin-left': '16.6667%' }],
  ['col-offset-3', { 'margin-left': '25%' }],
  ['col-offset-4', { 'margin-left': '33.3333%' }],
  ['col-offset-5', { 'margin-left': '41.6667%' }],
  ['col-offset-6', { 'margin-left': '50%' }],
  ['col-offset-7', { 'margin-left': '58.3333%' }],
  ['col-offset-8', { 'margin-left': '66.6667%' }],
  ['col-offset-9', { 'margin-left': '75%' }],
  ['col-offset-10', { 'margin-left': '83.3333%' }],
  ['col-offset-11', { 'margin-left': '91.6667%' }],
  ['col-offset-12', { 'margin-left': '100%' }],
]

export default [
  ...formlayout,
  ...gridsystem,
] as any