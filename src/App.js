
import Chance from 'chance';
import { AutoSizer, List } from 'react-virtualized';

import './App.css';
import { useEffect, useState } from 'react';
import Card from './component/Card';

function App() {

  const chance = new Chance()
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
                rowRenderer={({ key, index, style }) => {
                  const person = persons[index];
                  return (
                    <div key={key} style={style}>
                      <Card
                          name={person.name}
                          handle={person.handle}
                        style={{ height: { height } }}
                      />
                    </div>
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
