'use client'
import styles from "./page.module.css";
import { useState } from 'react';

export default function Page() {

  const colours = ["A", "B", "C", "D", "E"];
  const colourStyles = [["A", styles.col1], ["B", styles.col2], ["C", styles.col3], ["D", styles.col4], ["E", styles.col5]];
  const [usedColours, setUsedColours] = useState(colours);
  const [numberOfColours, setColours] = useState(5);

  function emptyCells(number)
  {
    return([...Array(number)].map((_,key) => <td key={key}><input type="checkbox"  className={styles.checkbox}></input></td>))
  }

  function constructEitherOn() {
   const eitherOn = ["F/W", "F/S", "F/M", "D/W", "D/S", "D/M", "W/S", "W/M", "S/M"]
    return(
      <>
        <tr>
          <th rowSpan={eitherOn.length+1}>Either On</th>
          <th>F/D</th>
          {emptyCells(2*numberOfColours)}
        </tr>
        {eitherOn.map((value,key) => 
          <tr key = {key}>
            <th>{value}</th>
            {emptyCells(2*numberOfColours)}
          </tr> 
        )}
    </>)
  }

  function constructWithinOne()
    {
      const withinOne = ["S", "W", "D", "F", "A"]
      return(
        <>
          <tr>
            <th rowSpan={withinOne.length+1}>{"Within One"}</th>
            <th>M</th>
            {emptyCells(2*numberOfColours)}
          </tr>
          {withinOne.map((value, key) =>
          <tr key={key}>
            <th>{value}</th>
            {emptyCells(2*numberOfColours)}
          </tr>
          )}
        </>
      )
    }

    function constructWithinTwo()
    {
      const withinTwo = ["Shack", "Bear", "Cougar"]
      return(
        <>
          <tr>
            <th rowSpan={withinTwo.length+1}>{"Within Two"}</th>
            <th>Stone</th>
            {emptyCells(2*numberOfColours)}
          </tr>
          {withinTwo.map((value, key) =>
          <tr key={key}>
            <th>{value}</th>
            {emptyCells(2*numberOfColours)}
          </tr>
          )}
        </>
      )
    }
    function constructWithinThree()
    {
      const withinThree = ["White", "Blue", "Black"]
      return(
        <>
          <tr>
            <th rowSpan={withinThree.length + 1}>{"Within Three"}</th>
            <th>Green</th>
            {emptyCells(2*numberOfColours)}
          </tr>
          {withinThree.map((value, key) =>
          <tr key={key}>
            <th>{value}</th>
            {emptyCells(2*numberOfColours)}
          </tr>
          )}
        </>
      )
    }

    function selectColours(e) {
      if (e.target.checked) 
        {
          setColours(numberOfColours + 1);
          setUsedColours(usedColours.concat(e.target.value).sort());
        }
      else 
      {
        setColours(numberOfColours - 1);
        setUsedColours(usedColours.filter((v) => v != e.target.value).sort());
      }
    }

    return (
      <div>
        <table className={styles.colourSelector}>
          <thead>
            <tr>
              <th rowSpan={2}>Colours in play:</th>
              {colours.map((value, key) => <td key={key}>{value}</td>)}
            </tr>
            <tr>
              {colours.map((value, key) => (<td key={key}><input type="checkbox" value={value} defaultChecked={true} onClick={selectColours}/></td>))}
            </tr>
          </thead>
        </table>
        <table className={styles.table}>
          <colgroup>
            <col span="1" className={styles.col}/>
            <col span="1" className={styles.col}/>
          {colourStyles.filter((value) => usedColours.includes(value[0])).map((value, key) => <col key={key} span="1" className={value[1]}></col>)}
          {colourStyles.filter((value) => usedColours.includes(value[0])).map((value, key) => <col key={key} span="1" className={value[1]}></col>)}
          </colgroup>
          <thead>
            <tr>
              <th>Distance</th>
              <th>Terrain</th>
              <th colSpan={numberOfColours}>On</th>
              <th colSpan={numberOfColours}>Not On</th>
            </tr>
            <tr>
              <th colSpan={2}></th>
              {usedColours.map((value, key) => <th key={key}>{value}</th>)}
              {usedColours.map((value, key) => <th key={key}>{value}</th>)}
            </tr>
          </thead>
          <tbody>
            {constructEitherOn()}
            {constructWithinOne()}
            {constructWithinTwo()}
            {constructWithinThree()}
          </tbody>
        </table>
      </div>
    );
  }