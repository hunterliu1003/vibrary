import './demoComponent.css';

function DemoComponent(props) {
  const { msg } = props;
  
  return (
    <div className="demo-component">
      <h1>{msg}</h1>
      <h2>DemoComponent</h2>
    </div>
  );
}

export default DemoComponent
