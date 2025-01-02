interface DataProps {
  name: string,
  id: number
}

const data = [
  {
    name: 'biraj',
    id: 1,
  },
  { name: 'sulav', id: 2 },
];

function App() {
  return data
    .map(
      (item: DataProps) => <div key={item.id}>{item.name}</div>,
    );
}

export default App;
