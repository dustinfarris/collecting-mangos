// This enables redux devtools. Just use it.
// https://github.com/zalmoxisus/redux-devtools-extension
import redux from 'redux'


const devtools = window.devToolsExtension ? window.devToolsExtension() : f => f;


export default redux.compose(devtools);
