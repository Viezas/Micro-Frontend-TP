import BaseLayout from '../../sharedComponent/src/layout/Base';
import Card from './Components/Card';

const App = () => (
  <BaseLayout client={'Remote'}>
    <Card>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis sem vel risus
        convallis, id dignissim risus blandit. Quisque placerat, enim pellentesque interdum
        fermentum, nulla ligula ultricies dui, fringilla commodo tellus nulla nec lorem. Nullam
        pulvinar commodo finibus. Fusce convallis condimentum massa, vel tempus urna aliquet a.
        Praesent fermentum eleifend odio, in dapibus erat pellentesque sit amet. Praesent sit amet
        metus eu neque mattis rutrum at nec ipsum. Donec vel velit dapibus, sollicitudin mauris
        vitae, iaculis lorem. Vestibulum sapien elit, blandit at odio nec, cursus malesuada eros.
        Nulla ac ligula sit amet eros dapibus condimentum nec ac ante. Nulla pretium ut nisl et
        condimentum. Nunc imperdiet mi varius, fringilla odio non, imperdiet tellus. Phasellus ac
        quam felis.
      </p>
    </Card>
  </BaseLayout>
);
export default App;
