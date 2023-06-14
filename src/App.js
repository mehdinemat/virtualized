
import Chance from 'chance';
import { AutoSizer, List  , CellMeasurer , CellMeasurerCache } from 'react-virtualized';

import './App.css';
import { useEffect, useState , useRef } from 'react';
import Card from './component/Card';

function App() {

  const chance = new Chance()
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 20
    })
  );
  const [persons, setPersons] = useState([])
  useEffect(() => {

    const dummyData = []
    for (let i = 0; i <= 1000; i++) {
      dummyData.push({
        name: 'salam', handle: 'khobi', bio: 'chera'
      })
    }
    setPersons(dummyData);

  }, [])

  useEffect(() => {
    console.log(persons)
  }, [persons])

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <AutoSizer>
        {({ width, height }) => {
          return (
            <div className="App">
              <List
                width={width}
                height={height}
                rowHeight={60}
                rowCount={persons.length}
                rowRenderer={({ key, index, style , parent }) => {
                  const person = persons[index];
                  return (
                    <CellMeasurer
                      key={key}
                      cache={cache.current}
                      parent={parent}
                      columnIndex={0}
                      rowIndex={index}
                    >
                    <div key={key} style={style}>
                      <Card
                          name={person.name}
                          handle={person.handle}
                        style={{ height: { height } }}
                      />
                    </div>
                    </CellMeasurer>
                  );
                }}
              />
            </div>
          );
        }}
      </AutoSizer>
    </div>
  );
}

export default App;
