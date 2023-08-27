import SplitScreen from "./components/SplitScreen";

const LeftHandComponent = () => {
  return <div style={{ backgroundColor: "red" }}>Left</div>;
};
const RightHandComponent = () => {
  return <div style={{ backgroundColor: "green " }}>Right</div>;
};
function App() {
  return (
      <SplitScreen
        leftWeight={2}
        rightWeight={3}
      >
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen>
  );
}

export default App;
