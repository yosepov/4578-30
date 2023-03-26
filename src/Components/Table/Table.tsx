import React from "react";
import './Table.css'

interface TableProps {
    headers: string[];
    data: string[][];
}


// Usage 
// const headers = ['Column 1', 'Column 2', 'Column 3', 'Column 4 '];
// const data = [['1','2','3', '4'],['5','6','7','8'],['9','10','11','12']]

// <MyTable headers={headers} data={data}/>


export const MyTable = ({ headers, data }: TableProps) => {
    return (

        <table>
            <thead>
                <tr>{
                    headers.map(h => <th>{h}</th>)
                }
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr >
                        {
                            row.map(t=> <td>{t}</td>)
                        }
                    </tr>
                ))}
            </tbody>
        </table>)
}



