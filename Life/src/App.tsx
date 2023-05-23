import ReactDOM from 'react-dom';
import Life from './Life';

import * as SC from './styles';

const App = () => (
  <SC.Container>
    <Life />
  </SC.Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
